import './UserInfo.scss';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import LoaderComponent from '../../components/loader/loader.component';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav';
import { dataInterface } from '../../interface';
import {
	educationAndEmployment,
	guarantor,
	personalInfo,
	socials,
} from '../../userData';

const UserInfo = ({user}: {user: dataInterface}) => {
    const personalInfoDetails = [
        `${user.profile.firstName} ${user.profile.lastName}`,
        user.profile.phoneNumber,
        user.email,
        user.profile.bvn,
        user.profile.gender,
    ];

    const educationAndEmploymentDetails = [
        user.education.level,
        user.education.employmentStatus,
        user.education.sector,
        user.education.duration,
        user.education.officeEmail,
        `₦${user.education.monthlyIncome[0]}- ₦${user.education.monthlyIncome[1]}`,
        user.education.loanRepayment,
    ];

    const socialsDetails = [
        user.socials.twitter,
        user.socials.facebook,
        user.socials.instagram,
    ];

    const guarantorDetails = [
        `${user.guarantor.firstName} ${user.guarantor.lastName}`,
        user.guarantor.phoneNumber,
        `${user.guarantor.address.split(' ').join('').toLowerCase()}@gmail.com`,
        user.guarantor.gender === 'Male' ? 'Brother' : 'Sister',
    ];

    return (
        <>
            <TopNav />
            <SideNav />
            {!user.email ? (
                <LoaderComponent message='Fetching Users' />
            ) : (
                <div className='user-info'>
                    <Link data-testid='back' to='/users' className='back'>
                        <BsArrowLeft /> Back to Users
                    </Link>

                    <div className='header'>
                        <h2>User Details</h2>
                        <div className='actions'>
                            <button>blacklist user</button>
                            <button>activate user</button>
                        </div>
                    </div>

                    <div className='top'>
                        <div className='profile-head'>
                            <img src={user.profile.avatar} alt='' />

                            <div className='name'>
                                <h2>{personalInfoDetails[0]}</h2>
                                <p>{user.accountNumber}</p>
                            </div>

                            <div className='tier'>
                                <p>User's Tier</p>
                                <div className='stars'>
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                            </div>

                            <div className='account-details'>
                                <h2>₦{user.accountBalance}</h2>
                                <p>9912345678/Providus Bank</p>
                            </div>
                        </div>

                        <ul className='user-nav'>
                            <li className='active'>General Details</li>
                            <li>Documents</li>
                            <li>Bank Details</li>
                            <li>Loans</li>
                            <li>Savings</li>
                            <li>App and System</li>
                        </ul>
                    </div>

                    <div className='user-details'>
                        <section>
                            <h3 className='title-header'>Personal Details</h3>
                            <article>
                                {personalInfo.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='title'>
                                                {item.title}
                                            </p>
                                            <p className='info'>
                                                {personalInfoDetails[index]
                                                    ? personalInfoDetails[index]
                                                    : item.info}
                                            </p>
                                        </div>
                                    );
                                })}
                            </article>

                            <h3 className='title-header'>
                                Education and Employment
                            </h3>
                            <article>
                                {educationAndEmployment.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='title'>
                                                {item.title}
                                            </p>
                                            <p className='info'>
                                                {
                                                    educationAndEmploymentDetails[
                                                        index
                                                    ]
                                                }
                                            </p>
                                        </div>
                                    );
                                })}
                            </article>

                            <h3 className='title-header'>Socials</h3>
                            <article>
                                {socials.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='title'>
                                                {item.title}
                                            </p>
                                            <p className='info'>
                                                {socialsDetails[index]}
                                            </p>
                                        </div>
                                    );
                                })}
                            </article>

                            <h3
                                className='title-header'
                                data-testid='title-header'
                            >
                                Guarantor
                            </h3>
                            <article>
                                {guarantor.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='title'>
                                                {item.title}
                                            </p>
                                            <p className='info'>
                                                {guarantorDetails[index]}
                                            </p>
                                        </div>
                                    );
                                })}
                            </article>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserInfo;

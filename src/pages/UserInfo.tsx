import './UserInfo.scss';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';
import userData from '../userData';

const UserInfo = () => {
    const [personalInfo, educationAndEmployment, socials, guarantor] = userData;

    return (
        <>
            <TopNav />
            <SideNav />
            <div className='user-info'>
                <Link to='/' className='back'>
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
                        <img src={require('../images/avatar.png')} alt='' />

                        <div className='name'>
                            <h2>Grace Effiom</h2>
                            <p>LSQFf587g90</p>
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
                            <h2>₦200,000.00</h2>
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
                                        <p className='title'>{item.title}</p>
                                        <p className='info'>{item.info}</p>
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
                                        <p className='title'>{item.title}</p>
                                        <p className='info'>{item.info}</p>
                                    </div>
                                );
                            })}
                        </article>

                        <h3 className='title-header'>Socials</h3>
                        <article>
                            {socials.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='title'>{item.title}</p>
                                        <p className='info'>{item.info}</p>
                                    </div>
                                );
                            })}
                        </article>

                        <h3 className='title-header'>Guarantor</h3>
                        <article>
                            {guarantor.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='title'>{item.title}</p>
                                        <p className='info'>{item.info}</p>
                                    </div>
                                );
                            })}
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
};

export default UserInfo;

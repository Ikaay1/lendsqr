import './Users.scss';

import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import { TbDotsVertical } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import LoaderComponent from '../../components/loader/loader.component';
import SideNav from '../../components/SideNav/SideNav';
import TopNav from '../../components/TopNav/TopNav';
import { dataInterface } from '../../interface';
import { months, tableData } from '../../tableData';

const Users = ({users}: {users: dataInterface[]}) => {
    const navigate = useNavigate();
    const stats = [
        {title: 'USERS', figure: 2453, icon: 'stats-users.png'},
        {title: 'ACTIVE USERS', figure: 2453, icon: 'stats-active.png'},
        {title: 'USERS WITH LOANS', figure: 12453, icon: 'stats-loans.png'},
        {
            title: 'USERS WITH SAVINGS',
            figure: 102453,
            icon: 'stats-savings.png',
        },
    ];

    const Table = () => {
        const tableHead = [
            'organization',
            'username',
            'email',
            'phone number',
            'date joined',
            'status',
        ];

        const showOptions = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
            e.stopPropagation();
            // @ts-ignore
            const option = e.target.parentElement.querySelector('ul.more');
            if (!option.classList.contains('active')) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        };

        const [filter, setFilter] = useState(false);
        const showFilter = () => {
            setFilter((prev) => !prev);
        };

        return (
            <table>
                {filter && (
                    <div className='filter-form'>
                        <div className='org-filter'>
                            Organization
                            <div className='org drop'></div>
                        </div>

                        <label htmlFor='filter-username'>Username</label>
                        <input
                            type='text'
                            id='filter-username'
                            placeholder='User'
                        />

                        <label htmlFor='filter-email'>Email</label>
                        <input
                            type='email'
                            name=''
                            id='filter-email'
                            placeholder='Email'
                        />

                        <label htmlFor='filter-date'>Date</label>
                        <input type='date' name='' id='filter-date' />

                        <label htmlFor='filter-phone'>Phone Number</label>
                        <input
                            type='text'
                            id='filter-phone'
                            placeholder='Phone Number'
                        />

                        <div className='status-filter'>
                            Status
                            <div className='status drop'></div>
                        </div>
                    </div>
                )}
                <thead>
                    <tr>
                        {tableHead.map((item) => (
                            <th key={item}>
                                <span>
                                    {item}
                                    <BsFilter
                                        className='filter-icon'
                                        onClick={
                                            item === 'organization'
                                                ? showFilter
                                                : () => {}
                                        }
                                    />
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr
                                key={user.id}
                                onClick={() => navigate(`/user/${user.id}`)}
                                style={{cursor: 'pointer'}}
                            >
                                {<td>{!filter ? user.orgName : ''}</td>}
                                {<td>{!filter ? user.userName : ''}</td>}
                                <td>{user.email}</td>
                                <td>{user.profile.phoneNumber}</td>
                                <td>
                                    {`${
                                        months[
                                            Number(
                                                user.createdAt.split('-')[1],
                                            ) - 1
                                        ]
                                    } ${user.createdAt
                                        .split('-')[2]
                                        .slice(0, 2)}, ${
                                        user.createdAt.split('-')[0]
                                    } ${
                                        Number(
                                            user.createdAt
                                                .split('-')[2]
                                                .slice(3, 5),
                                        ) < 12
                                            ? `${user.createdAt
                                                  .split('-')[2]
                                                  .slice(3, 8)} AM`
                                            : Number(
                                                  user.createdAt
                                                      .split('-')[2]
                                                      .slice(3, 5),
                                              ) === 12
                                            ? `${user.createdAt
                                                  .split('-')[2]
                                                  .slice(3, 8)} PM`
                                            : `${
                                                  Number(
                                                      user.createdAt
                                                          .split('-')[2]
                                                          .slice(3, 5),
                                                  ) -
                                                      12 <
                                                  9
                                                      ? `0${
                                                            Number(
                                                                user.createdAt
                                                                    .split(
                                                                        '-',
                                                                    )[2]
                                                                    .slice(
                                                                        3,
                                                                        5,
                                                                    ),
                                                            ) - 12
                                                        }`
                                                      : `${
                                                            Number(
                                                                user.createdAt
                                                                    .split(
                                                                        '-',
                                                                    )[2]
                                                                    .slice(
                                                                        3,
                                                                        5,
                                                                    ),
                                                            ) - 12
                                                        }`
                                              }${user.createdAt
                                                  .split('-')[2]
                                                  .slice(5, 8)} PM`
                                    }`}
                                </td>
                                <td
                                    className={`table-${tableData[index]} status`}
                                >
                                    <p>{tableData[index]}</p>
                                </td>
                                <td style={{position: 'relative'}}>
                                    <TbDotsVertical
                                        className='dots'
                                        onClick={(e) => showOptions(e)}
                                    />
                                    <ul
                                        className='more'
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <li
                                            onClick={() =>
                                                navigate(`/user/${user.id}`)
                                            }
                                        >
                                            <img
                                                src={require('../../images/view.png')}
                                                alt=''
                                            />{' '}
                                            View Details
                                        </li>
                                        <li>
                                            <img
                                                src={require('../../images/delete-user.png')}
                                                alt=''
                                            />
                                            Blacklist User
                                        </li>
                                        <li>
                                            <img
                                                src={require('../../images/activate.png')}
                                                alt=''
                                            />
                                            Activate User
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

    return (
        <>
            <TopNav />
            <SideNav />
            {!users.length ? (
                <LoaderComponent message='Fetching Users' />
            ) : (
                <div className='home'>
                    <div className='users'>
                        <h2>Users</h2>
                        <div data-testid='stats' className='stats'>
                            {stats.map((item, index) => {
                                return (
                                    <div className='stat-box' key={index}>
                                        <img
                                            src={require(`../../images/${item.icon}`)}
                                            alt=''
                                        />
                                        <h3>{item.title}</h3>
                                        <h2>{item.figure.toLocaleString()}</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <Table />
                        <div className='bottom'>
                            <div>
                                <p>Showing</p>
                                <button>
                                    100 <FiIcons.FiChevronDown />
                                </button>
                                <span>out of 100</span>
                            </div>

                            <div>
                                <button>
                                    <FiIcons.FiChevronLeft />
                                </button>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <span>...</span>
                                <span>15</span>
                                <span>16</span>
                                <button>
                                    <FiIcons.FiChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;

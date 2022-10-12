import './Users.scss';

import { BsFilter } from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import { TbDotsVertical } from 'react-icons/tb';

// import { Link } from 'react-router-dom';
import { tableData } from '../tableData';

const Users = () => {
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

    return (
        <>
            <div className='users'>
                <h2>Users</h2>
                <div className='stats'>
                    {stats.map((item, index) => {
                        return (
                            <div className='stat-box' key={index}>
                                <img
                                    src={require(`../images/${item.icon}`)}
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
        </>
    );
};

const Table = () => {
    const tableHead = [
        'organization',
        'username',
        'email',
        'phone number',
        'date joined',
        'status',
    ];

    return (
        <table>
            <thead>
                <tr>
                    {tableHead.map((item, index) => (
                        <th key={index}>
                            <span>
                                {item} <BsFilter className='filter-icon' />
                            </span>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.org}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.date}</td>
                            <td className={`table-${item.status} status`}>
                                <p>{item.status}</p>
                            </td>
                            <td>
                                <TbDotsVertical className='dots' />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Users;

import './SideNav.scss';

import { useContext } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import MenuContext from '../../MenuContext';

const SideNav = () => {
    const {menu} = useContext(MenuContext);

    const customers: (
        | {
              title: string;
              icon: string;
              active: boolean;
          }
        | {
              title: string;
              icon: string;
              active?: undefined;
          }
    )[] = [
        {title: 'Users', icon: 'users.png', active: true},
        {title: 'Guarantors', icon: 'guarantors.png'},
        {title: 'Loans', icon: 'loans.png'},
        {title: 'Decisions Models', icon: 'decision-models.png'},
        {title: 'Savings', icon: 'savings.png'},
        {title: 'Loan Requests', icon: 'loan-request.png'},
        {title: 'Whitelist', icon: 'whitelist.png'},
        {title: 'Karma', icon: 'karma.png'},
    ];

    const businesses: {
        title: string;
        icon: string;
    }[] = [
        {title: 'Organization', icon: 'organization.png'},
        {title: 'Loan Products', icon: 'loan-request.png'},
        {title: 'Saving Products', icon: 'saving-products.png'},
        {title: 'Fees and Charges', icon: 'fees-and-charges.png'},
        {title: 'Transacrions', icon: 'transactions.png'},
        {title: 'Services', icon: 'services.png'},
        {title: 'Service Account', icon: 'service-account.png'},
        {title: 'Settlements', icon: 'settlements.png'},
        {title: 'Reports', icon: 'reports.png'},
    ];

    const settings: {
        title: string;
        icon: string;
    }[] = [
        {title: 'Preferences', icon: 'preferences.png'},
        {
            title: 'Fees and Pricing',
            icon: 'fees-and-pricing.png',
        },
        {title: 'Audit Logs', icon: 'audit-logs.png'},
    ];

    return (
        <div className={`side-nav ${menu && 'active'}`}>
            <p className='switch-org nav-item'>
                <img
                    src={require('../../images/icons/organization.png')}
                    alt=''
                />
                Switch Organization
                <FiChevronDown />
            </p>

            <div className='dashboard-btn nav-item' style={{marginTop: '40px'}}>
                <img src={require('../../images/icons/dashboard.png')} alt='' />
                Dashboard
            </div>

            <ul>
                <h4>CUSTOMERS</h4>
                {customers.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.active ? (
                                <NavLink
                                    className='nav-item'
                                    to={`/${item.title.toLowerCase()}`}
                                >
                                    <img
                                        src={require(`../../images/icons/${item.icon}`)}
                                        alt=''
                                    />
                                    {item.title}
                                </NavLink>
                            ) : (
                                <div className='nav-item'>
                                    <img
                                        src={require(`../../images/icons/${item.icon}`)}
                                        alt=''
                                    />
                                    {item.title}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>

            <ul>
                <h4>BUSINESSES</h4>
                {businesses.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className='nav-item' to={`/${item.title}`}>
                                <img
                                    src={require(`../../images/icons/${item.icon}`)}
                                    alt=''
                                />
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <ul>
                <h4>SETTINGS</h4>
                {settings.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className='nav-item' to={`/${item.title}`}>
                                <img
                                    src={require(`../../images/icons/${item.icon}`)}
                                    alt=''
                                />
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideNav;

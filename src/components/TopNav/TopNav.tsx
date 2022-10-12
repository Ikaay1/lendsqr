import './TopNav.scss';

import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

import logo from '../../images/logo.png';
import profilePhoto from '../../images/profile-photo.png';
import MenuContext from '../../MenuContext';

const TopNav = () => {
    const {handleClick, menu} = useContext(MenuContext);

    return (
        <div className='top-nav'>
            <div className='left'>
                <img src={logo} alt='' className='logo' />

                <div className='search-bar'>
                    <input type='text' placeholder='Search for anything' />
                    <button>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>

            <div className='right'>
                <p className='docs'>Docs</p>

                <BsBell className='bell' />

                <div>
                    <img src={profilePhoto} alt='' />
                </div>

                <div className='profile'>
                    <p>Adedeji</p>
                    <FaCaretDown />
                </div>

                <div onClick={handleClick} className='menu-icon'>
                    {!menu ? (
                        <GiHamburgerMenu className='menu' />
                    ) : (
                        <GrFormClose className='close' />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopNav;

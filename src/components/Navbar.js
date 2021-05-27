import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Logo } from './Logo';

export const Navbar = () => {

    const [clickedMenu, setClickedMenu] = useState(false);


    const handleToggleMenu = () => setClickedMenu(!clickedMenu);
    const handleCloseMenu = () => setClickedMenu(false);

    return (
        <nav className={`navbar ${clickedMenu ? 'active' : ''}`}>
            <div className="navbar__logo">
                <Logo className='logo' />
            </div>
            <div className="menu-icon" onClick={ handleToggleMenu} >
                { clickedMenu ? <FaTimes/> : <FaBars /> }
            </div>
            <ul className={`navbar__menu ${ clickedMenu ? 'navbar__menu-active' : '' }`}>
                <li className="navbar__item" onClick={handleCloseMenu}>About</li>
                <li className="navbar__item" onClick={handleCloseMenu}>Carrers</li>
                <li className="navbar__item" onClick={handleCloseMenu}>Events</li>
                <li className="navbar__item" onClick={handleCloseMenu}>Products</li>
                <li className="navbar__item" onClick={handleCloseMenu}>Support</li>
            </ul>
        </nav>
    )
}

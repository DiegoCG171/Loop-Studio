import React from 'react';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => {
    return (
        <footer className='footer' >
            <div className="footer__container">
                <Logo className='logo' />
                <ul className='footer__links' >
                    <li className='footer__item' >About</li>
                    <li className='footer__item' >Careers</li>
                    <li className='footer__item' >Events</li>
                    <li className='footer__item' >Products</li>
                    <li className='footer__item' >Support</li>
                </ul>
            </div>
            <div className="footer__social">
                <div className="footer__social-icons">
                    <FaFacebookSquare className='footer__icon' />
                    <FaTwitter className='footer__icon' />
                    <FaPinterest className='footer__icon' />
                    <FaInstagram className='footer__icon' />
                </div>
                <p className='footer__reserved' >
                    © 2021 Loopstudios. All rights reserved.
                    </p>
            </div>
        </footer>
    )
}

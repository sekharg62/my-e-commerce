import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_logo from '../Assets/instagram_icon.png'
import pint_logo from '../Assets/pintester_icon.png'
import wp_logo from '../Assets/whatsapp_icon.png'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPSY</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={insta_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={wp_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pint_logo} alt="" />
                </div>

            </div><div className="footer-copyright">
                <hr />
                <p>Copyright @2024 -All Right Reserved. | Sekhar</p>
            </div>

        </div>
    )
}

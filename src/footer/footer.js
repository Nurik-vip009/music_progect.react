import React from 'react';
import '../footer/footer.css'
import img_logo from '../image/IMAGE (44).png'
import icon_footer from '../image/Frame (21).png'
import icons from '../image/Frame (22).png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">
                <div className="footer-left">
                    <img className="logo_footer" src={img_logo} alt=""/>
                    <img className="icon_footer" src={icon_footer} alt=""/>
                </div>
                <div className="footer-center">
                    <ul className="ul-left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Episodes</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="ul-right">
                        <li>Style Guide</li>
                        <li>Instructions</li>
                        <li>Changelog</li>
                        <li>Credit</li>
                        <li>Powered by Webflow</li>
                        <li>Licenses</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <img className="icons" src={icons} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
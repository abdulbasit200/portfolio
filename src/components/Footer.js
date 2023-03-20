import "./FooterStyles.css"

import React from 'react'
import { FaFacebookF, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>1087 LDA Avenue 1</p>
                        <p>Lahore, Pakistan</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +92-322-8095675
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        asgharabdulbasit@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Ccompany.</h4>
                <p>This is me Abdul Basit Asghar. Full stack Developer. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <FaFacebookF size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedinIn size={20} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
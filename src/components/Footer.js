import "./FooterStyles.css"

import React from 'react'
import { FaFacebookF, FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

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
                    <Link to="https://www.facebook.com/abdulbasit11420/"><FaFacebookF size={20} style={{color: "#fff", marginRight: "1rem"}}/></Link>
                    <Link to="https://twitter.com/basit_asghar"><FaTwitter size={20} style={{color: "#fff", marginRight: "1rem"}}/></Link>
                    <Link to="https://www.linkedin.com/in/abdul-basit-asghar-68aa0a190/"><FaLinkedinIn size={20} style={{color: "#fff", marginRight: "1rem"}}/></Link>
                    <Link to="https://github.com/abdulbasit200"><FaGithub size={20} style={{color: "#fff", marginRight: "1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
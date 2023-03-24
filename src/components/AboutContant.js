import "./AboutContantStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContant = () => {
  return (
    <div className="about">
        <div className="about-left">
            <h1>Who Am I?</h1>
            <p>I am a full stack developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className="about-right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="img" alt="Not found."/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1555680510-34daedadbdb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" className="img" alt="Not found."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContant
import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.image} alt="CardImage not found."/>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
        </div>
        <div className="project-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>
        </div>
    </div>
  )
}

export default WorkCard

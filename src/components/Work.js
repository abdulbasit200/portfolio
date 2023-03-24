import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../assets/img2.JPG"
import { NavLink } from "react-router-dom"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind)=>{
                return(
                    <WorkCard 
                    key={ind}
                    image={val.image}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work

import React from "react"
import "../../css/Experience.css"

function Experience({ experience }) {
    return (
        <div className="experience-content">
            <div className="experience-content-left">
                {experience.from}-{experience.to}
            </div>

            <div className="experience-content-right">
                <div className="bold-text">{experience.position}</div>
                <div>
                    {experience.company}, {experience.city}
                </div>
            </div>
        </div>
    )
}

export default Experience

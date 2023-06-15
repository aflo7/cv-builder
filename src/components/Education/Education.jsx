import React from "react"
import "../../css/Education.css"

function Education({ education }) {
    return (
        <div className="education-content">
            <div>
                {education.from}-{education.to}
            </div>

            <div>
                <p className="bold-text">{education.universityName}</p>
                <p>{education.location}</p>
                <p>
                    {education.degree} of {education.subject}
                </p>
            </div>
        </div>
    )
}

export default Education

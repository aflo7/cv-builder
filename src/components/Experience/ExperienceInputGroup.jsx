import React from "react"
import "../../css/ExperienceInputGroup.css"

function ExperienceInputGroup({
    experience,
    handleExperienceChange,
    handleExperienceDelete
}) {
    return (
        <div className="experience-inputs">
            <input
                name="position"
                type="text"
                placeholder="Position"
                value={experience.position}
                onChange={(e) => handleExperienceChange(e, experience.id)}
            />
            <input
                name="company"
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={(e) => handleExperienceChange(e, experience.id)}
            />
            <input
                name="city"
                type="text"
                placeholder="City"
                value={experience.city}
                onChange={(e) => handleExperienceChange(e, experience.id)}
            />
            <input
                name="from"
                type="text"
                placeholder="From"
                value={experience.from}
                onChange={(e) => handleExperienceChange(e, experience.id)}
            />
            <input
                name="to"
                type="text"
                placeholder="To"
                value={experience.to}
                onChange={(e) => handleExperienceChange(e, experience.id)}
            />
            <button
                className="reset-btn"
                onClick={() => handleExperienceDelete(experience.id)}
            >
                Delete Experience
            </button>
        </div>
    )
}

export default ExperienceInputGroup

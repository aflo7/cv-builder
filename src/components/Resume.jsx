import Avatar from "../assets/images/avatar.png"
import Experience from "./Experience/Experience"
import "../css/Resume.css"
import Education from "./Education/Education"
import { forwardRef } from "react"

const Resume = forwardRef(({ parentState }, ref) => {
    const experienceItems = parentState.experience.map((experience, i) => (
        <Experience experience={experience} key={i} />
    ))
    const experienceHeader =
        parentState.experience.length > 0 ? (
            <div>
                <h3 className="blue-text">Experience</h3>
                <hr></hr>
            </div>
        ) : null
    const educationItems = parentState.education.map((education, i) => (
        <Education key={i} education={education} />
    ))
    const educationHeader = parentState.education.length > 0 && (
        <div>
            <h3 className="blue-text">Education</h3>
            <hr></hr>
        </div>
    )
    return (
        <div className="resume" ref={ref}>
            <div className="top-resume">
                <h2 className="name">{parentState.personalInfo.name}</h2>
                <p>{parentState.personalInfo.title}</p>
            </div>
            <div className="bottom-resume">
                <div className="resume-info-1">
                    <div>
                        <h3 className="blue-text">Description</h3>
                        <hr></hr>
                    </div>

                    <p>{parentState.personalInfo.description}</p>

                    {experienceHeader}
                    {experienceItems}

                    {educationHeader}
                    {educationItems}
                </div>
                <div className="resume-info-2">
                    <img className="avatar" src={Avatar} />
                    <h3 className="personal-details-title">Personal Details</h3>
                    <hr></hr>
                    <h4>Address</h4>
                    <p>{parentState.personalInfo.address}</p>
                    <h4>Phone Number</h4>
                    <p>{parentState.personalInfo.phoneNumber}</p>

                    <h4>Email</h4>
                    <p>{parentState.personalInfo.email}</p>
                </div>
            </div>
        </div>
    )
})
Resume.displayName = "Resume"

export default Resume

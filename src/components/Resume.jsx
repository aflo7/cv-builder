import React from "react"
import Avatar from "../assets/images/avatar.png"

function Resume({ parentState }) {
    return (
        <div className="resume">
            <div className="top-resume">
                <h2 className="name">{parentState.personalInfo.name}</h2>
                {parentState.personalInfo.title}
                <p></p>
            </div>
            <div className="bottom-resume">
                <div className="resume-info-1">
                    <div>
                        <h3 className="blue-text">Description</h3>
                        <hr></hr>
                    </div>

                    <p>
                        <em>{parentState.personalInfo.description}</em>
                    </p>

                    <div>
                        <h3 className="blue-text">Experience</h3>
                        <hr></hr>
                    </div>

                    <div className="experience-content">
                        <div className="experience-content-left">
                            {parentState.experience.from}-
                            {parentState.experience.to}
                        </div>

                        <div className="experience-content-right">
                            <div className="bold-text">
                                {parentState.experience.position}
                            </div>
                            <div>
                                {parentState.experience.company},{" "}
                                {parentState.experience.city}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="blue-text">Education</h3>
                        <hr></hr>
                    </div>

                    <div className="education-content">
                        <div className="education-content-left">
                            {parentState.education.from}-
                            {parentState.education.to}
                        </div>

                        <div>
                            <div>
                                <p className="bold-text">
                                    {parentState.education.universityName}
                                </p>
                                <p>{parentState.education.location}</p>
                            </div>
                        </div>

                        <div>
                            <div>Degree: {parentState.education.degree}</div>
                            <div>Subject: {parentState.education.subject}</div>
                        </div>
                    </div>
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
}

export default Resume

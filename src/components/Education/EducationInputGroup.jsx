import "../../css/EducationInputGroup.css"

function EducationInputGroup({ education, handleEducationChange }) {
    return (
        <div className="education-inputs">
            <h3>Education</h3>
            <input
                name="universityName"
                type="text"
                placeholder="University Name"
                value={education.universityName}
                onChange={(e) => handleEducationChange(e)}
            />
            <input
                name="location"
                type="text"
                placeholder="Location"
                value={education.location}
                onChange={(e) => handleEducationChange(e)}
            />
            <input
                name="degree"
                type="text"
                placeholder="Degree"
                value={education.degree}
                onChange={(e) => handleEducationChange(e)}
            />
            <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={education.subject}
                onChange={(e) => handleEducationChange(e)}
            />
            <input
                name="from"
                type="text"
                placeholder="From"
                value={education.from}
                onChange={(e) => handleEducationChange(e)}
            />
            <input
                name="to"
                type="text"
                placeholder="To"
                value={education.to}
                onChange={(e) => handleEducationChange(e)}
            />
        </div>
    )
}

export default EducationInputGroup

import "../../css/EducationInputGroup.css"

function EducationInputGroup({ education, handleEducationChange, handleEducationDelete }) {
    return (
        <div className="education-inputs">
            <input
                name="universityName"
                type="text"
                placeholder="University Name"
                value={education.universityName}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <input
                name="location"
                type="text"
                placeholder="Location"
                value={education.location}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <input
                name="degree"
                type="text"
                placeholder="Degree"
                value={education.degree}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={education.subject}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <input
                name="from"
                type="text"
                placeholder="From"
                value={education.from}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <input
                name="to"
                type="text"
                placeholder="To"
                value={education.to}
                onChange={(e) => handleEducationChange(e, education.id)}
            />
            <button
                className="delete-btn"
                onClick={() => handleEducationDelete(education.id)}
            >
                Delete Education
            </button>
        </div>
    )
}

export default EducationInputGroup

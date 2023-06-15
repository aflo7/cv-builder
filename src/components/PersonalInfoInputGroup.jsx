import "../css/PersonalInfoInputGroup.css"

function PersonalInfoInputGroup({ personalInfo, handlePersonalInfoChange }) {
    return (
        <form
            data-testid="personal-info-inputs"
            className="personal-info-inputs"
            name="personal-info-inputs"
        >
            <h3>Personal Information</h3>
            <input
                data-testid="name"
                name="name"
                type="text"
                placeholder="Name"
                value={personalInfo.name}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                data-testid="title"
                name="title"
                type="text"
                placeholder="Title"
                value={personalInfo.title}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                data-testid="address"
                name="address"
                type="text"
                placeholder="Address"
                value={personalInfo.address}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                data-testid="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Phone number"
                value={personalInfo.phoneNumber}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                data-testid="email"
                name="email"
                type="text"
                placeholder="Email"
                value={personalInfo.email}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <textarea
                placeholder="Description"
                name="description"
                value={personalInfo.description}
                onChange={(e) => handlePersonalInfoChange(e)}
            ></textarea>
        </form>
    )
}

export default PersonalInfoInputGroup

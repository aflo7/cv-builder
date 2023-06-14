function PersonalInfoInputGroup({ personalInfo, handlePersonalInfoChange }) {
    return (
        <div className="personal-info-inputs">
            <h3>Personal Information</h3>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={personalInfo.name}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={personalInfo.title}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                type="text"
                placeholder="Address"
                name="address"
                value={personalInfo.address}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                type="text"
                placeholder="Phone number"
                name="phoneNumber"
                value={personalInfo.phoneNumber}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={personalInfo.email}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
            <input
                type="text"
                placeholder="Description"
                name="description"
                value={personalInfo.description}
                onChange={(e) => handlePersonalInfoChange(e)}
            />
        </div>
    )
}

export default PersonalInfoInputGroup

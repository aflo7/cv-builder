import { Component } from "react"
import "./App.css"
import Resume from "./components/Resume"
import { filledFields, emptyFields } from "./js/stateObjects"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = emptyFields
    }

    fillFieldsWithExample = () => {
        this.setState(filledFields)
    }

    resetFields = () => {
        this.setState(emptyFields)
    }

    handlePersonalInfoChange = (e) => {
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    handleExperienceChange = (e) => {
        this.setState({
            experience: {
                ...this.state.experience,
                [e.target.name]: e.target.value
            }
        })
    }

    handleEducationChange = (e) => {
        this.setState({
            education: {
                ...this.state.education,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="app-wrapper">
                <nav>REACT CV BUILDER</nav>

                <main>
                    <div className="inputs">
                        <div className="personal-info-inputs">
                            <h3>Personal Information</h3>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={this.state.personalInfo.name}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={this.state.personalInfo.title}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={this.state.personalInfo.address}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Phone number"
                                name="phoneNumber"
                                value={this.state.personalInfo.phoneNumber}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.personalInfo.email}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={this.state.personalInfo.description}
                                onChange={(e) =>
                                    this.handlePersonalInfoChange(e)
                                }
                            />
                        </div>

                        <div className="experience-inputs">
                            <h3>Experience</h3>
                            <input
                                name="position"
                                type="text"
                                placeholder="Position"
                                value={this.state.experience.position}
                                onChange={(e) => this.handleExperienceChange(e)}
                            />
                            <input
                                name="company"
                                type="text"
                                placeholder="Company"
                                value={this.state.experience.company}
                                onChange={(e) => this.handleExperienceChange(e)}
                            />
                            <input
                                name="city"
                                type="text"
                                placeholder="City"
                                value={this.state.experience.city}
                                onChange={(e) => this.handleExperienceChange(e)}
                            />
                            <input
                                name="from"
                                type="text"
                                placeholder="From"
                                value={this.state.experience.from}
                                onChange={(e) => this.handleExperienceChange(e)}
                            />
                            <input
                                name="to"
                                type="text"
                                placeholder="To"
                                value={this.state.experience.to}
                                onChange={(e) => this.handleExperienceChange(e)}
                            />
                        </div>

                        <div className="education-inputs">
                            <h3>Education</h3>
                            <input
                                name="universityName"
                                type="text"
                                placeholder="University Name"
                                value={this.state.education.universityName}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={this.state.education.location}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                            <input
                                name="degree"
                                type="text"
                                placeholder="Degree"
                                value={this.state.education.degree}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                value={this.state.education.subject}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                            <input
                                name="from"
                                type="text"
                                placeholder="From"
                                value={this.state.education.from}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                            <input
                                name="to"
                                type="text"
                                placeholder="To"
                                value={this.state.education.to}
                                onChange={(e) => this.handleEducationChange(e)}
                            />
                        </div>

                        <button
                            className="example-btn"
                            onClick={this.fillFieldsWithExample}
                        >
                            Load example
                        </button>
                        <button
                            className="reset-btn"
                            onClick={this.resetFields}
                        >
                            Reset
                        </button>
                    </div>

                    <Resume parentState={this.state}/>
                </main>
            </div>
        )
    }
}

export default App

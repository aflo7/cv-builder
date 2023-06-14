import "./css/App.css"
import { Component } from "react"
import { filledFields, emptyFields } from "./js/stateObjects"
import Resume from "./components/Resume"
import ExperienceInputGroup from "./components/ExperienceInputGroup"
import PersonalInfoInputGroup from "./components/PersonalInfoInputGroup"

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

    handleExperienceChange = (e, id) => {
        this.setState({
            experience: this.state.experience.map((item) => {
                if (item.id === id) {
                    return { ...item, [e.target.name]: e.target.value }
                } else return item
            })
        })
    }

    handleExperienceDelete = (id) => {
        this.setState({
            experience: this.state.experience.filter((item) => item.id !== id)
        })
    }

    addExperienceItem = () => {
        this.setState({
            experience: [
                ...this.state.experience,
                {
                    id: crypto.randomUUID(),
                    position: "",
                    company: "",
                    city: "",
                    from: "",
                    to: ""
                }
            ]
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
                <nav>REACT RESUME BUILDER</nav>

                <main>
                    <div className="inputs">
                        <PersonalInfoInputGroup
                            personalInfo={this.state.personalInfo}
                            handlePersonalInfoChange={
                                this.handlePersonalInfoChange
                            }
                        />

                        <h3>Experience</h3>

                        {this.state.experience.length > 0 &&
                            this.state.experience.map((experience, i) => {
                                return (
                                    <ExperienceInputGroup
                                        key={i}
                                        experience={experience}
                                        handleExperienceChange={
                                            this.handleExperienceChange
                                        }
                                        handleExperienceDelete={
                                            this.handleExperienceDelete
                                        }
                                    />
                                )
                            })}

                        <button
                            className="add-experience-btn"
                            onClick={this.addExperienceItem}
                        >
                            Add Experience
                        </button>

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

                        <hr></hr>

                        <button className="print-btn">
                            Print (not implemented)
                        </button>
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

                    <Resume parentState={this.state} />
                </main>
            </div>
        )
    }
}

export default App

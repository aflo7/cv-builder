import "./css/App.css"
import { Component } from "react"
import { filledFields, emptyFields } from "./js/stateObjects"
import Resume from "./components/Resume"
import ExperienceInputGroup from "./components/Experience/ExperienceInputGroup"
import PersonalInfoInputGroup from "./components/PersonalInfoInputGroup"
import EducationInputGroup from "./components/Education/EducationInputGroup"
import { v4 as uuidv4 } from "uuid"
import ReactToPrint from "react-to-print"

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

    handleEducationChange = (e, id) => {
        this.setState({
            education: this.state.education.map((item) => {
                if (item.id === id) {
                    return { ...item, [e.target.name]: e.target.value }
                } else return item
            })
        })
    }

    handleExperienceDelete = (id) => {
        this.setState({
            experience: this.state.experience.filter(
                (experienceItem) => experienceItem.id !== id
            )
        })
    }

    handleEducationDelete = (id) => {
        this.setState({
            education: this.state.education.filter(
                (educationItem) => educationItem.id !== id
            )
        })
    }

    addExperienceItem = () => {
        this.setState({
            experience: [
                ...this.state.experience,
                {
                    id: uuidv4(),
                    position: "",
                    company: "",
                    city: "",
                    from: "",
                    to: ""
                }
            ]
        })
    }

    addEducationItem = () => {
        this.setState({
            education: [
                ...this.state.education,
                {
                    id: uuidv4(),
                    universityName: "",
                    location: "",
                    degree: "",
                    subject: "",
                    from: "",
                    to: ""
                }
            ]
        })
    }

    render() {
        const experienceInputGroups = this.state.experience.map(
            (experience, i) => (
                <ExperienceInputGroup
                    key={i}
                    experience={experience}
                    handleExperienceChange={this.handleExperienceChange}
                    handleExperienceDelete={this.handleExperienceDelete}
                />
            )
        )
        const educationInputGroups = this.state.education.map(
            (education, i) => (
                <EducationInputGroup
                    key={i}
                    education={education}
                    handleEducationChange={this.handleEducationChange}
                    handleEducationDelete={this.handleEducationDelete}
                />
            )
        )
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

                        {experienceInputGroups}

                        <button
                            className="add-experience-btn"
                            onClick={this.addExperienceItem}
                        >
                            Add Experience
                        </button>

                        <h3>Education</h3>
                        {educationInputGroups}
                        <button
                            className="add-experience-btn"
                            onClick={this.addEducationItem}
                        >
                            Add Eduation
                        </button>

                        <hr></hr>

                        <ReactToPrint
                            trigger={() => {
                                return (
                                    <a href="#">
                                        <button className="print-btn">
                                            Print
                                        </button>
                                    </a>
                                )
                            }}
                            content={() => this.componentRef}
                        />

                        <button
                            data-testid="load-data-btn"
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

                    <Resume
                        parentState={this.state}
                        ref={(el) => (this.componentRef = el)}
                    />
                </main>
            </div>
        )
    }
}

export default App

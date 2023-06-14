import "./css/App.css"
import { Component } from "react"
import { filledFields, emptyFields } from "./js/stateObjects"
import Resume from "./components/Resume"
import ExperienceInputGroup from "./components/ExperienceInputGroup"
import PersonalInfoInputGroup from "./components/PersonalInfoInputGroup"
import EducationInputGroup from "./components/Education/EducationInputGroup"
import {v4 as uuidv4} from 'uuid';


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
    handleEducationChange = (e) => {
        this.setState({
            education: {
                ...this.state.education,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const experienceInputs = this.state.experience.map((experience, i) => (
            <ExperienceInputGroup
                key={i}
                experience={experience}
                handleExperienceChange={this.handleExperienceChange}
                handleExperienceDelete={this.handleExperienceDelete}
            />
        ))
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

                        {experienceInputs}

                        <button
                            className="add-experience-btn"
                            onClick={this.addExperienceItem}
                        >
                            Add Experience
                        </button>

                        <EducationInputGroup
                            education={this.state.education}
                            handleEducationChange={this.handleEducationChange}
                        />

                        <hr></hr>

                        <button className="print-btn">
                            Print (not implemented)
                        </button>
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

                    <Resume parentState={this.state} />
                </main>
            </div>
        )
    }
}

export default App

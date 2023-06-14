### Links

-   URL: [Here](https://aflo7.github.io/cv-builder/)

### Built with

-   HTML
-   Javascript
-   CSS
-   [React](https://reactjs.org/) - JS library

### What I learned

I learned about React class components, and how to pass props from class components to functional components

```js
class App extends Component {
    constructor(props) {
        super(props)
        this.state = emptyFields
    }

    render() {
        return (
            <div className="app-wrapper">
                <nav>REACT CV BUILDER</nav>

                {/* ... */}
            </div>
        )
    }
}
```

I learned how to map over an array inside the render() method

```js
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

            {experienceInputs}
            {/* ... */}

        )}
```

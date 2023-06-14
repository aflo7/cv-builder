### Links

-   URL: [Here](https://aflo7.github.io/cv-builder/)

### Built with

-   HTML
-   Javascript
-   CSS
-   [React](https://reactjs.org/) - JS library
-   React Testing Library
-   Jest

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

I added 4 tests to test my App.jsx component. I used React Testing Library and Jest. One test checks for empty form data. Another test checks for filled form data after the 'load example' button is clicked.

```js
describe("personal info form", () => {
    it("loads empty data", () => {
        render(<App />)
        expect(screen.getByRole("form").childElementCount).toBe(7)
        expect(screen.getByTestId("name").textContent).toBe("")
        expect(screen.getByTestId("title").textContent).toBe("")
        expect(screen.getByTestId("address").textContent).toBe("")
        expect(screen.getByTestId("phoneNumber").textContent).toBe("")
        expect(screen.getByTestId("email").textContent).toBe("")
        expect(screen.getByTestId("description").textContent).toBe("")
    })

    it("loads example data after btn click", async () => {
        render(<App />)
        const button = screen.getByTestId("load-data-btn")
        const user = userEvent.setup()
        await user.click(button)
        expect(screen.getByTestId("name").value).toBe("Matt Lake")
        expect(screen.getByTestId("title").value).toBe("Engineer")
        expect(screen.getByTestId("address").value).toBe("123 Street Ave")
        expect(screen.getByTestId("phoneNumber").value).toBe("4402266521")
        expect(screen.getByTestId("email").value).toBe("matt@lake.com")
        expect(screen.getByTestId("description").value).toBe(
            "I'm a student with a degree in English and minor in software engineering. I have experience with the Python programming language."
        )
    })
})
```

### Links

- Live URL: [Here](https://aflo7.github.io/cv-builder/)

## My process

### Built with

- HTML
- CSS Flex
- [React](https://reactjs.org/) - JS library


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
    )}
}
```


### Continued development

If I was to continue working on this project, I would add components for each experience and each education a person may have. I would update the state for experience and education to hold an array of objects...
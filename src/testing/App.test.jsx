// import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App"
import { it, describe, expect } from 'vitest';

describe("App component", () => {
    it("should render correctly", () => {
        const { container } = render(<App />)
        expect(container).toMatchSnapshot()
    })

    it("renders correct nav text REACT RESUME BUILDER", () => {
        render(<App />)
        expect(screen.getByRole("navigation").textContent).toMatch(
            /REACT RESUME BUILDER/
        )
    })
})

describe("Personal info form data", () => {
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

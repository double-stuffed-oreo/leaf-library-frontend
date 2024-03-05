import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import SignUp from "../pages/SignUp"
import React from "react"

describe("<SignUp />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <SignUp signUp={SignUp} />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        expect(screen.getByText(/email: password: confirm password:/i)).toBeInTheDocument()
    })  

    it("renders the button", () => {
        render(
            <BrowserRouter>
                <SignUp signUp={SignUp} />
            </BrowserRouter>
        )
        
        expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })
})
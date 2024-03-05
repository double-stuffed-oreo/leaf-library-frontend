import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import HerbNew from "../pages/HerbNew"
import React from "react"
import mockUsers from '../mockUsers'

describe("<HerbNew />", () => {
    it("renders the form", () => {
        render(
            <BrowserRouter>
                <HerbNew currentUser={mockUsers[0]} />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        expect(screen.getByText(/common name:/i)).toBeInTheDocument()
        expect(screen.getByText(/scientific or strain name:/i)).toBeInTheDocument()
        expect(screen.getByText(/short summary of plant:/i)).toBeInTheDocument()
        expect(screen.getByText(/what are the benefits\?:/i)).toBeInTheDocument()
        expect(screen.getByText(/are there any major warnings\?:/i)).toBeInTheDocument()
        expect(screen.getByText(/image url:/i)).toBeInTheDocument()
    })  

    it("renders the button", () => {
        render(
            <BrowserRouter>
                <HerbNew currentUser={mockUsers[0]}/>
            </BrowserRouter>
        )
        
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    })
}) 
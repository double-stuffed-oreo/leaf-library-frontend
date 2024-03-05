import { render, screen } from "@testing-library/react"
import HerbEdit from "../pages/HerbEdit"
import { BrowserRouter } from "react-router-dom"
import mockHerbs from "../mockHerbs.js"

describe("<HerbEdit />", () => {
  it("renders a form to update herb", () => {
    render(
      <BrowserRouter>
        <HerbEdit herbs={mockHerbs} updateHerb={() => {}} />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /scientific name \(optional\)/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /summary/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /benefit/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /warning/i})).toBeInTheDocument()
    expect(screen.getByRole('textbox', {name: /image url/i})).toBeInTheDocument()
  })
})
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import about from "../assets/botanical-garden.jpg"

describe("<AboutUs />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", about)
  })
})
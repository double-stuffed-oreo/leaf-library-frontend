import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import about from "../assets/botanical-garden.jpg"
import ContactUs from '../pages/ContactUs';

describe("<ContactUs />", () => {
  it("renders a name", () => {
    render(
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/chantel/i)).toBeInTheDocument();
    expect(screen.getByText(/sakaa/i)).toBeInTheDocument();
    expect(screen.getByText(/michael/i)).toBeInTheDocument();
    // const link = screen.getByRole("link")
    // expect(link).toHaveAttribute("src", about)
  })
})
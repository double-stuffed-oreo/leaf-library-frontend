import { render, screen } from '@testing-library/react';
import Footer from '../component/Footer';
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("renders Chantel, Micahel & Sakaa", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it("renders an about us link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const aboutLink = screen.getByText("About Us")
    expect(aboutLink).toBeInTheDocument()
  })

  it("renders a contact us link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const contactLink = screen.getByText("Contact Us")
    expect(contactLink).toBeInTheDocument()
  })
})

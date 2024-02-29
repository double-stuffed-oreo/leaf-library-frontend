import Header from '../component/Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("<Header />", () => {
  it("renders a logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const logo = screen.getByRole('img', {
      name: /logo/i
    })
    expect(logo).toBeInTheDocument()
  })

  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const indexLink = screen.getByText("Library")
    expect(indexLink).toBeInTheDocument()
  })

  it("renders a contact us link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const contactLink = screen.getByText("Contact Us")
    expect(contactLink).toBeInTheDocument()
  })

  it("renders an about us link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const aboutLink = screen.getByText("About Us")
    expect(aboutLink).toBeInTheDocument()
  })

  it("renders a sign up link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const signUpLink = screen.getByText("Sign Up") 
    expect(signUpLink).toBeInTheDocument()
  })

  it("renders a sign in link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const signInLink = screen.getByText("Sign In") 
    expect(signInLink).toBeInTheDocument()
  })
})


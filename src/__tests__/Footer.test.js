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
})

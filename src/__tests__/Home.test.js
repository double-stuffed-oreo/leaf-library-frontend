import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
  it("renders text", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const welcome = screen.getByText('Welcome to the Leaf Library')
    expect(welcome).toBeInTheDocument()
  })
})
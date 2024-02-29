import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom'

describe("<NotFound />", () => {
  it("renders text", () => {
    // Arrange
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    const welcome = screen.getByText('404: Page Not Found')
    expect(welcome).toBeInTheDocument()
  })
})
import { render, screen } from "@testing-library/react";
import HerbShow from "../pages/HerbShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockHerbs from "../mockHerbs";

describe("<HerbShow />", () => {  
  it("renders one herb", () => {
    render(
      <MemoryRouter initialEntries={[`/herbshow/1`]}>
        <Routes> 
          <Route path="/herbshow/:id" element={<HerbShow herbs={mockHerbs} />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', {name: /marigold/i})).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByText(/summary:/i)).toBeInTheDocument("Summary");
    expect(screen.getByText(/benefit:/i)).toBeInTheDocument("Benefit");
    expect(screen.getByText(/warning:/i)).toBeInTheDocument("Warning");
  });
});
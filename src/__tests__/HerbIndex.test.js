import { render, screen } from "@testing-library/react";
import HerbIndex from "../pages/HerbIndex";
import { BrowserRouter } from "react-router-dom";
import mockHerbs from "../mockHerbs";

describe("<HerbIndex />", () => {
  it("renders all herbs", () => {
    render(
      <BrowserRouter>
        <HerbIndex herbs={mockHerbs} />
      </BrowserRouter>
    );

    mockHerbs.forEach((herb) => {
      expect(screen.getByText(`${herb.name}`)).toBeInTheDocument();
      expect(screen.getByText(`${herb.scientific_name}`)).toBeInTheDocument();
      expect(screen.getByText(`Summary: ${herb.summary}`)).toBeInTheDocument();
    });
  });
});
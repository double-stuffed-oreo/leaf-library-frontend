import { render, screen } from "@testing-library/react";
import HerbProtectedIndex from "../pages/HerbProtectedIndex";
import { BrowserRouter } from "react-router-dom";

describe("<HerbProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com"
    }

    const userHerbs = [
      {
        id: 1,
        name: "Marigold",
        scientific_name: "Calendula officinalis",
        summary: "Marigold has exceptional healing powers along with a prowess for healing wounds.",
        benefit: "Antiseptic, Muscle Pain, Wound Treatment for Eczema and Sunburns",
        warning: "Fresh Marigold is likely unsafe as comsumption fresh can cause diarrhea and severe irritation of stomach, intestines, bladder, and kidneys.",
        image:"https://cdn.britannica.com/76/118076-050-756CD4F5/French-marigold.jpg",
        user_id: 1
      }
    ]

    render(
      <BrowserRouter>
        <HerbProtectedIndex 
          herbs={userHerbs}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )

    
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Herbs")
    expect(element).toBeInTheDocument()
  })

  
  it("renders a button", () => {
    render(
        <BrowserRouter>
            <HerbProtectedIndex />
        </BrowserRouter>
     )

    expect(screen.getByRole('button', {name: /edit herb/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /delete herb/i})).toBeInTheDocument()
  })
})
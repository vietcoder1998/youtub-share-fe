import { render, screen } from "@testing-library/react";
import { HomePage } from "../pages/home-page/HomePage"; // Import the component you want to test

describe("App", () => {
  it("renders the page correctly", () => {
    render(<HomePage />);
    // Use screen queries to interact with the rendered components
    const pageTitle = screen.getByText("Welcome to HomePage");
    expect(pageTitle).not.toBeNull();
  });
});

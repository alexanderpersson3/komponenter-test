import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer with text", () => {
  render(<Footer text="Test Footer" />);
  const footerElement = screen.getByText(/Test Footer/i);
  expect(footerElement).toBeInTheDocument();
});

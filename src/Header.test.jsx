import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header with title", () => {
  render(<Header title="Test Header" />);
  const headerElement = screen.getByText(/Test Header/i);
  expect(headerElement).toBeInTheDocument();
});

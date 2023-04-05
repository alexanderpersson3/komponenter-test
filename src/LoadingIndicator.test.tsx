import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingIndicator from "./LoadingIndicator";

test("renders loading indicator", () => {
  render(<LoadingIndicator />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

test("renders alert with message and type", () => {
  render(<Alert message="Test Alert" type="error" />);
  const alertElement = screen.getByText(/Test Alert/i);
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveClass("alert error");
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

test("toggles switch ON and OFF", () => {
  render(<ToggleSwitch />);
  const toggleSwitch = screen.getByTestId("toggle-switch");

  fireEvent.click(toggleSwitch);
  expect(screen.getByText("ON")).toBeInTheDocument();

  fireEvent.click(toggleSwitch);
  expect(screen.getByText("OFF")).toBeInTheDocument();
});

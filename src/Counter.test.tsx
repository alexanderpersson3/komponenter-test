import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments and decrements the counter", () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe("Count: 1");

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe("Count: 0");
});

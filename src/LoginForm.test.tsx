import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("submits form with username and password", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByLabelText(/Username:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText(/Login/i);

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  fireEvent.click(submitButton);

  expect(usernameInput.value).toBe("testuser");
  expect(passwordInput.value).toBe("testpassword");
});

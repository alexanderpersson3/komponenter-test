import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

test("renders user card with name and email", () => {
  const testUser = { name: "John Doe", email: "john.doe@example.com" };
  render(<UserCard user={testUser} />);
  expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Email: john.doe@example.com/i)).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page title", () => {
  render(<App />);
  const title = screen.getByText(/Todo-Driven Development/i);
  expect(title).toBeInTheDocument();
});

test("renders TodoList", () => {
  render(<App />);
  const todos = screen.getByText("My List");

  expect(todos).toBeInTheDocument();
});

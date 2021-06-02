import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders an empty list with no todos", () => {
  render(<TodoList todos={[]} />);
  const list = screen.getByRole("list");

  expect(list.children.length).toBe(0);
  expect(screen.getByText("There is nothing here.")).toBeInTheDocument();
});

test("renders a list with existing todos", () => {
  const existingTodos = ["Dishes", "Laundry"];
  render(<TodoList todos={existingTodos} />);
  const list = screen.getByRole("list");

  expect(list.children[0]).toHaveTextContent("Dishes");
  expect(list.children[1]).toHaveTextContent("Laundry");
});

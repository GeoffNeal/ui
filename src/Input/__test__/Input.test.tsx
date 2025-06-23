import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import { TextField } from "../index";

describe("Input", () => {
  test("change handler gets called when user types", async () => {
    // Arrange
    const handler = jest.fn();
    render(<TextField onChange={handler} />);
    const inputEl = screen.getByRole("textbox");

    // Act
    await userEvent.type(inputEl, "hello world");

    // Assert
    expect(handler).toHaveBeenCalledTimes(11);
    expect(inputEl).toHaveValue("hello world");
  });
});

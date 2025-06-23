import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import { Button } from "../index";

describe("Button", () => {
  test("Button text content", () => {
    // Arrange
    const { getByText } = render(<Button>Hello world</Button>);

    // Assert
    expect(getByText("Hello world")).toHaveTextContent("Hello world");
  });

  test("click handler gets called when Button is clicked", async () => {
    // Arrange
    const handler = jest.fn();
    render(<Button onClick={handler}>Hello world</Button>);

    // Act
    await userEvent.click(screen.getByRole("button", { name: "Hello world" }));

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

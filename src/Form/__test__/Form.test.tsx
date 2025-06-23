import React, { MouseEvent } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import { Form, FormCol } from "../index";
import { TextField } from "../../Input";
import { Button } from "../../Button";

describe("Form", () => {
  test("submit the values provided", async () => {
    // Arrange
    const log = jest.spyOn(console, "log").mockImplementation(() => {});

    const handler: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      console.log(
        [...data.entries()].reduce((acc, [key, value]) => {
          return { ...acc, [key]: value };
        }, {})
      );
    };
    const handleSubmit = jest.fn(handler);

    render(
      <Form onSubmit={handleSubmit}>
        <FormCol>
          <TextField type="email" name="email" label="Email" id="1" />
          <TextField type="password" name="password" label="Password" id="2" />
        </FormCol>

        <Button name="submit">Submit</Button>
      </Form>
    );

    // Act
    await userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    await userEvent.type(screen.getByLabelText("Password"), "password");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    // Assert
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ type: "submit" })
    );
    expect(log).toHaveBeenCalledWith({
      email: "test@test.com",
      password: "password",
    });
  });
});

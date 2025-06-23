import React from "react";
import { render } from "@testing-library/react";

// Components
import { Button } from "../index";

test("Hello test", () => {
  const { getByText } = render(<Button>Hello world</Button>);
  expect(getByText("Hello world")).toHaveTextContent("Hello world");
});

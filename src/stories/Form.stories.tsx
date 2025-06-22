import React from "react";

import type { Meta, StoryObj } from "@storybook/react-webpack5";

// Components
import { Form, FormCol, FormRow } from "../Form";
import { TextField } from "../Input";
import { Button } from "../Button";

// Styles
import "../styles.global.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Form",
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example1: Story = {
  args: {
    children: (
      <>
        <FormCol>
          <FormRow>
            <TextField type="text" label="First name" id="1" />
            <TextField type="text" label="Last name" id="2" />
          </FormRow>
          <TextField type="text" label="Address line 1" id="3" />
          <TextField type="text" label="Address line 2" id="4" />
          <FormRow>
            <TextField type="text" label="City" id="5" />
            <TextField type="text" label="Postcode" id="6" />
          </FormRow>
        </FormCol>

        <Button>Submit</Button>
      </>
    ),
  },
};

export const Example2: Story = {
  args: {
    children: (
      <>
        <FormCol>
          <TextField type="email" label="Email" id="3" />
          <TextField type="password" label="Password" id="4" />
        </FormCol>

        <Button>Submit</Button>
      </>
    ),
  },
};

export const Example3: Story = {
  args: {
    children: (
      <>
        <FormCol>
          <FormCol>
            <TextField type="email" label="Email" id="1" />
            <TextField type="password" label="Password" id="2" />
          </FormCol>
          <FormCol>
            <TextField type="text" label="Hello" id="3" />
            <TextField type="text" label="World" id="4" />
          </FormCol>
        </FormCol>

        <Button>Submit</Button>
      </>
    ),
  },
};

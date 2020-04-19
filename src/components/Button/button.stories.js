import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, PrimaryButton } from ".";

export default {
  component: Button,
  title: "Button",
};

export const button = () => <Button onClick={action("clicked")}>Button</Button>;

export const primaryButton = () => (
  <PrimaryButton onClick={action("clicked")}>Primary Button</PrimaryButton>
);

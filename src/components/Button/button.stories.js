import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";

export default {
  component: Button,
  title: "Button",
};

export const button = () => <Button onClick={action("clicked")}>Button</Button>;

import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from ".";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};

export const button = () => {
  const state = select("state", ["default", "pending"], "default");

  return (
    <Button state={state} onClick={action("clicked")}>
      Button
    </Button>
  );
};

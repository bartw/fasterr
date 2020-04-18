import React from "react";
import { action } from "@storybook/addon-actions";
import AlphaButton from "./AlphaButton";

export default {
  component: AlphaButton,
  title: "AlphaButton",
};

export const alphaButton = () => (
  <AlphaButton onClick={action("clicked")}>Alpha Button</AlphaButton>
);

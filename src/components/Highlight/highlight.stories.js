import React from "react";
import Highlight from ".";

export default {
  component: Highlight,
  title: "Highlight",
};

export const highlight = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur <Highlight>adipiscing</Highlight>{" "}
    elit. Donec sit amet tortor a magna tempor faucibus a vel ipsum.
  </p>
);

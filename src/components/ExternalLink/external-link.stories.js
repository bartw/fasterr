import React from "react";
import ExternalLink from ".";

export default {
  component: ExternalLink,
  title: "ExternalLink",
};

export const externalLink = () => (
  <ExternalLink
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    label="external link"
  >
    External Link
  </ExternalLink>
);

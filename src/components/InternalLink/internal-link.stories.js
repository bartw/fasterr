import React from "react";
import { MemoryRouter } from "react-router-dom";
import InternalLink from ".";

export default {
  component: InternalLink,
  title: "InternalLink",
};

export const internalLinkButton = () => (
  <MemoryRouter initialEntries={["/"]}>
    <InternalLink to="destination">Internal Link</InternalLink>
  </MemoryRouter>
);

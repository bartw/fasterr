import React from "react";
import { MemoryRouter } from "react-router-dom";
import InternalLinkButton from ".";

export default {
  component: InternalLinkButton,
  title: "InternalLinkButton",
};

export const internalLinkButton = () => (
  <MemoryRouter initialEntries={["/"]}>
    <InternalLinkButton to="destination">
      Internal Link Button
    </InternalLinkButton>
  </MemoryRouter>
);

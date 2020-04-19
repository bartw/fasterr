import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

test("renders fasterr logo", () => {
  const { getAllByAltText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Layout />
    </MemoryRouter>
  );
  const imageElements = getAllByAltText(/logo/i);
  expect(imageElements.length).toBe(2);
  imageElements.forEach((imageElement) =>
    expect(imageElement).toBeInTheDocument()
  );
});

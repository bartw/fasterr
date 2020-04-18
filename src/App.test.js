import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders fasterr logo", () => {
  const { getAllByAltText } = render(<App />);
  const imageElements = getAllByAltText(/logo/i);
  expect(imageElements.length).toBe(2);
  imageElements.forEach((imageElement) =>
    expect(imageElement).toBeInTheDocument()
  );
});

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders fasterr logo", () => {
  const { getByAltText } = render(<App />);
  const imageElement = getByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});

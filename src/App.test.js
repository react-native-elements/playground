import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
it("Testing works!, testing over ExplorePage", () => {
  render(<App />);
  expect(screen.getByText(/playground/i)).toBeInTheDocument();
  console.table("woohho");
});

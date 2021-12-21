import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Personalia from "./Personalia";

describe("tester Personalia komponenten", () => {
  test("komponenten vises med navn", () => {
    const navn = "Grim Gråsone";
    render(<Personalia navn={navn} />);
    expect(screen.getByText(navn, { exact: false })).toBeInTheDocument();
  });
});

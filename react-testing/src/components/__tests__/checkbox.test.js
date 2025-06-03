import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../checkbox";

test("Defaults to Inactive label", () => {
  render(<Checkbox labelActive="Active" labelInactive="Inactive" />);
  expect(screen.getByLabelText("Inactive")).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButton from "./ToggleButton";

test("changes text after click", () => {
  render(<ToggleButton />);

  // Verifica se o botão começa com o texto inicial
  const buttonElement = screen.getByText(/clique para alterar/i);
  expect(buttonElement).toBeInTheDocument();
  // Simula o clique e verifica se o texto mudou
  fireEvent.click(buttonElement);
  const updatedButtonElement = screen.getByText(/texto alterado/i);
  expect(updatedButtonElement).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Like component", () => {
  test("Muestra 'Likes: 0' por defecto", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Incrementa likes cuando se hace clic en el boton Like", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Reduce likes cuando se hace clic en el boton Dislike", () => {
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
  });

  // Este no me lo pedían pero quise probar si podía hacerlo correctamente y si me salió :)
  test("Maneja correctamente múltiples clicks", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    const dislikeButton = screen.getByText("Dislike");

    // Click Like 3 veces
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 3")).toBeInTheDocument();

    // Click Dislike 2 veces
    fireEvent.click(dislikeButton);
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });
});

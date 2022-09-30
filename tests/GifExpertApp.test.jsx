import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe de mostrar la busqueda de la categoria', () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
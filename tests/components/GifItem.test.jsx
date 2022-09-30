import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Unit test for <GifItem />', () => {

  const title = 'One Piece';
  const url = 'https://prueba.sf.ar/';

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot(); 
  });

  test('Debe de mostrar la URL y texto ALT', () => {
    render(<GifItem title={title} url={url} />);
    screen.debug();
    // Desestructuramos
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('Debe de mostrar el titulo del componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
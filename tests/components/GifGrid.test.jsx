import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'One Piece';

  test('Debe de mostar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    screen.debug();

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));

  });


  test('Debe de mostrar itemas cuando se cargan las imagenes desde el useFetchGifs', () => {

    const gifs = [
      {
        id: 'abs',
        title: 'One Piece',
        url: 'https://blabla.com'
      },
      {
        id: 'abs3',
        title: 'Zoro',
        url: 'https://blabla-zoro.com'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    screen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);

  });

});
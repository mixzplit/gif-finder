import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas del helper getGifs", () => {
  test("Debe de retornar un  array de gifs ", async() => {
    const gifs = await getGifs('One Piece');
    // Verificamos que el arreglo que esperamos tenga elementos
    expect(gifs.length).toBeGreaterThan(0);
    // Verificamos que el arreglo tenga las propiedades
    // que necesitamos
    expect(gifs[0]).toEqual({
      id:expect.any(String),
      title:expect.any(String),
      url:expect.any(String),
    });
    
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas del componente <AddCategory />", () => {
  test("Debe cambiar el valor del input text", () => {
    render(<AddCategory onNewCategory={() => {}} />); // Sujeto a evaluar

    const input = screen.getByRole("textbox"); // obtenemos el input

    fireEvent.input(input, { target: { value: "One Piece" } }); // Disparamos el evento, mandando un valor en el campo

    screen.debug();

    expect(input.value).toBe("One Piece");
  });

  test('Debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'One Piece';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />); // Sujeto a evaluar
    // Referencias elementos del componente
    const input = screen.getByRole("textbox"); // obtenemos el input
    const form = screen.getByRole("form"); // obtenemos el form
    fireEvent.input(input, { target: { value: inputValue } }); 
    fireEvent.submit(form); // Disparamos el evento submit y simular el envio del form

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

  });

  test('No debe llamar al onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />); // Sujeto a evaluar

    const form = screen.getByRole("form"); // obtenemos el form
    fireEvent.submit(form); // Disparamos el evento submit y simular el envio del form

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();


  });

});

import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); // evitamos el refresh del form

    if(inputValue.trim().length <= 1) return;

    // Aqui obtenemos la categorias que se enviaron implicitamente
    // en la propiedades de componente el cual desestrucuramos en la 
    // linea 3 y actualizamos el estado con el valor del input y el
    // resto de categorias
    // setCategories(categories => [inputValue, ...categories]);


    onNewCategory(inputValue.trim());
    setInputValue(''); // limpiamos el input despues de enviar su valor
  }

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={(e) => onChangeHandler(e)} />
    </form>
  )
}

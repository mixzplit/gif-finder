import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {

    //Validamos que no se repitan las categorias
    if(categories.includes(newCategory)) return;

    //Destructuramos y usamos el operador spread para
    //obtener el estado actual de las categorias y
    // agregamos la nueva
    setCategories([newCategory, ...categories ]);
  }



  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={ setCategories } /> */}
      <AddCategory onNewCategory={ (e) => onAddCategory(e) } />

      {/* Listado de GIF */}
        {
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  );
};

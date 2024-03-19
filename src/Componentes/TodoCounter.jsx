import React from "react";
import '../estilos/todoCounter.css'
function TodoCounter({total, completed}){
    return (
     <h1>Has completado {completed} de {total} TODOS</h1>   
    );
}
export {TodoCounter}
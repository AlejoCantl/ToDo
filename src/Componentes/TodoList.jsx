import React from "react";
import '../estilos/todoList.css'
function TodoList(props){
    return(
    <div className={"list-container"}>
    <ul>
        {props.children}
    </ul>
    </div>
    );
}

export {TodoList}
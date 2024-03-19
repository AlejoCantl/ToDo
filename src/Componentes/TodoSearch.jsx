import React from "react";
import '../estilos/todoSearch.css'
function TodoSearch({placeholder, children, setSearchValue, handleModalOpen}){
    
    return (
        <div className={"barra"}>
        <input id={"buscar"} placeholder = {placeholder} onChange={(e)=>{setSearchValue(e.target.value)}}/>
        <button onClick={handleModalOpen}>{children}</button>
        </div>
    );
}

export {TodoSearch}
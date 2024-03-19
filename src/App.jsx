import React,{ useState } from 'react'
import './estilos/App.css'
import { AppUI } from './Componentes/AppUI'
import { TodoProvider } from './Componentes/TodoContext';



function App() {
  return (
    <TodoProvider>
      <AppUI
     //loading={loading}
     //error={error}
     //todos = {todos}
     //botones={botones}
     //setSearchValue={setSearchValue}
     //handleButtonClick={handleButtonClick}
     //filtredTodos={filtredTodos}
     //completeTodo={completeTodo}
     //deleteTodo={deleteTodo}
     //handleModalOpen={handleOpenModal}
     //isModalOpen={isModalOpen}
     //handleCloseModal={handleCloseModal}
     //handleAddItem={handleAddItem}
     //handleAddMultipleItems= {handleAddMultipleItems}
    />
    </TodoProvider>
    
  );
}



export {App}

import React from 'react'
import { TodoSearch } from './TodoSearch'
import { TodoCounter } from './TodoCounter'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { Button } from './Button'
import { TodosLoad } from './TodosLoad'
import CustomModal from './Modal'; // Ajusta la ruta según sea necesario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from './TodoContext'


function AppUI(){
return(
<>
        <TodoContext.Consumer>
        {({loading, error, todos, botones, handleButtonClick, setSearchValue, filtredTodos, completeTodo, deleteTodo, handleOpenModal, isModalOpen, handleCloseModal, handleAddItem, handleAddMultipleItems})=>(
          <>
          <TodoCounter completed={todos.filter(todo => todo.completed).length} total={todos.length}></TodoCounter>
          <TodoSearch setSearchValue={setSearchValue} placeholder = {"Realizar busqueda"} handleModalOpen={handleOpenModal}>
              <FontAwesomeIcon icon={faPlus} />
          </TodoSearch>
          <CustomModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          onAddItem={handleAddItem}
          onListItem = {handleAddMultipleItems}
        />
          <Button buttons={botones} onButtonClick={handleButtonClick}/>
  
          <TodoList>
            {loading && <TodosLoad/>}
            {error && <p>Error...</p>}
            {(!loading && filtredTodos.length === 0)&& <p>Añade tu primera tarea</p>}
  
          {filtredTodos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} completed= {todo.completed} onComplete={()=>{completeTodo(todo.text)}} onDelete={()=>{deleteTodo(todo.text)}}></TodoItem>
          ))}
          </TodoList>
          </>
        )}
        
        </TodoContext.Consumer>
</>
);
}

export {AppUI}
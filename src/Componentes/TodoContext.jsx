import React, {useState,createContext} from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = createContext();
const botones = [
    {text: 'Mostrar todo'},
    {text: 'Pendiente'},
    {text: 'Completado'}
  ];

const TodoProvider = ({children})=> {
    const {item: todos, saveItem: saveTodos, loading, error}= useLocalStorage('todos_v1', []);
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState(0);
    const [newItems, setNewItems] = useState([]);
  
    const handleButtonClick = (filterType) => {
      setFilter(filterType);
    };
      
  
      const filtredTodos = todos.filter((todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      const matchesSearch = todoText.includes(searchText);
      switch (filter){
      case 1: return matchesSearch && !todo.completed;
      case 2: return matchesSearch && todo.completed;
      default: return matchesSearch;
      }
      });
  
      
      
      const completeTodo = (text)=>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
  
      const deleteTodo = (text)=>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
  
      const [isModalOpen, setIsModalOpen] = useState(false);
  
      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewItems([]); // Limpiar la lista de nuevos elementos al cerrar el modal
  
      };
    
      const handleAddItem = (newItems) => {
        const newTodos = [...todos, ...newItems.map((text) => ({ text, completed: false }))];
        saveTodos(newTodos);
        console,console.log(newTodos);
        handleCloseModal();
      };
  
      const handleAddMultipleItems = (items) => {
        setNewItems([...newItems, ...items]);
      };
return(
<TodoContext.Provider value={{loading, error, todos, botones, handleButtonClick, setSearchValue, filtredTodos, completeTodo, deleteTodo, handleOpenModal, isModalOpen, handleCloseModal, handleAddItem, handleAddMultipleItems}}> 
{children}
</TodoContext.Provider>
);
}

export {TodoContext, TodoProvider};
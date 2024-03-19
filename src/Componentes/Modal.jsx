import React, {useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import '../estilos/modal.css'
Modal.setAppElement('#root'); // Reemplaza '#root' con el selector de tu elemento raíz

const CustomModal = ({ isOpen, onRequestClose, onAddItem, onListItem}) => {
    const [inputValue, setInputValue] = useState('');
    const [inputItems, setInputItems] = useState([]);
    const isInputValue = inputValue !== '';
    const isArray = inputItems.length > 0;


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const clearInput = () => {
        setInputValue('');
      };

      const handleAddItem = () => {
        if(isInputValue){
        onListItem(inputValue);
        setInputItems([...inputItems, inputValue]);
        clearInput();
        }
      };
    
      const handleAddItems = () => {
        if (isInputValue || isArray) {
          onAddItem(isInputValue && isArray ? [...inputItems, inputValue] : isInputValue ? [inputValue]: inputItems);
          setInputItems([]);
          clearInput();
        } else {
          // Puedes mostrar un mensaje o tomar la acción correspondiente cuando ambos estén vacíos
          console.log('No puedes agregar un modal vacio');
        }
      };
      
    
      const handleDeleteItems = (item) => {
        const newItems = inputItems.filter((existingItem) => existingItem !== item);
        setInputItems(newItems);
      };
      

    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className='container_n'>
        <h2>Añadir Tarea</h2>
        <textarea type="text" placeholder="Nueva tarea" value={inputValue} onChange={handleInputChange}/>
        </div>
        <div className='btns_modal'>
        <button onClick={handleAddItem}><FontAwesomeIcon icon={faPlus}/></button>
        <button onClick={handleAddItems}>Añadir</button>
        <button onClick={() => { onRequestClose(); setInputItems([]);  clearInput(); }}>{inputItems.length!==0 ? 'Cancelar': 'Salir'}</button>
        </div>
        <ul>
        {inputItems.map((item) => (
          <TodoItem key = {item} completed={false} text = {item} onDelete = {()=>{handleDeleteItems(item)}}></TodoItem>
        ))}
        </ul>
      </Modal>
    );
  };
  
  export default CustomModal;
  
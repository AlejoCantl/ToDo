import {useState, useEffect} from "react";

//localStorage.setItem('todos_v1', JSON.stringify(defaultTODOS));
//const defaultTODOS = [
//{text: 'Comprar' , completed: false}, 
//{text: 'Tomar' , completed: false}, 
//{text: 'Estudiar' , completed: false} , 
//{text: 'Probar' , completed: false},
//{text: 'Pintar y adornar la casa', completed: false},
//{text: 'Comprar velas', completed: false},
//{text: 'Dominar react', completed: false}
//];
function useLocalStorage(itemName, initialValue){    
    const [item ,setItem]= useState(initialValue);
    const [loading ,setLoading]= useState(true);
    const [error, setError] = useState(false)


    useEffect(()=>{
      setTimeout(()=>{
      try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem=initialValue;
      }
      else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
    }
    catch(error){
        setError(true)

    }
    setLoading(false);
  }, 1000);
    }, []);
    
    
    const saveItem = (newItem)=>{
      localStorage.setItem('todos_v1', JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {item, saveItem, loading, error};
  }

  export {useLocalStorage}
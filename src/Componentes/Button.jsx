import React, { useState, useEffect } from 'react';
import '../estilos/button.css';

function Button(props) {
    const [activeButton, setActiveButton] = useState(0);
    //const [filter, setFilter] = useState(0); // Inicializa con el valor correspondiente al "Mostrar todo"

    useEffect(() => {
      props.onButtonClick(activeButton);
    }, [activeButton, props]);

    const handleButtonClick = (index) => {
        setActiveButton(index);
        //setFilter(index);
        //props.onButtonClick(index); // Pasa el índice al componente padre si es necesario
      };
  return (
    <div className={'container'}>
      {props.buttons.map((buttonProps, index) => (
        <a key={index} className={index === activeButton ? 'active enlace' : 'enlace'}
        onClick={() => handleButtonClick(index)}
        >
          {buttonProps.text}
        </a>
      ))}
    </div>
  );
}

export { Button };

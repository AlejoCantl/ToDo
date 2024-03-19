import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
function TodoItem(props) {
  const check = (firstCase,SecondCase) =>{
    return props.completed ? firstCase: SecondCase;
  }

    return (
      <li>
        <div>
        <span onClick= {props.onComplete} >{check(<FontAwesomeIcon icon={faCircleCheck} color="green" />,<FontAwesomeIcon icon={faCircle} color="white" />)}</span>
        </div>
        <p className={check('completed','')}>{props.text}</p>
        <div>
        <span onClick= {props.onDelete} >{<FontAwesomeIcon icon={faCircleXmark}/>}</span>
        </div>
      </li>
    );
  }

export {TodoItem}
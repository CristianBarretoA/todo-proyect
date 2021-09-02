import React from "react";
import './TodoItem.css';
import { CompleteIcon } from '../../Elements/TodoIcon/CompleteIcon';
import { DeleteIcon } from '../../Elements/TodoIcon/DeleteIcon';

export function TodoItem(props) {

  return (
    <li className={'TodoItem'}>
            <span
              className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
              onClick={props.onCompleted}
            >
                 <CompleteIcon
                   completed={props.completed}
                   onComplete={props.onCompleted}
                 />
            </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDeleted}
      >
                <DeleteIcon
                  onDelete={props.onDeleted}
                />
            </span>
    </li>
  );
}

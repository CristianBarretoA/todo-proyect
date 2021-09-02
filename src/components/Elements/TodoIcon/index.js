import React from 'react';
import './TodoIcon.css';
import { FaCheck, FaRegTrashAlt } from 'react-icons/fa';

const iconTypes = {
  'check': color => (
    <FaCheck color={color} className={'Icon-svg Icon-svg--check'}/>
  ),
  'delete': color => (
    <FaRegTrashAlt color={color} className={'Icon-svg Icon-svg--delete'}/>
  )
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export default TodoIcon;

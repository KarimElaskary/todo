import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const Item = ({ task, onDelete, onToggle }) => {
  return (
    <li className='flex items-center justify-between todo'>
      <div className='flex items-center justify-center gap-4'>
        <input type='checkbox' value={task.done} onChange={() => {onToggle(task.id)}}/>
        <p style={task.done ? {textDecoration: 'line-through', textDecorationColor: 'red'} : {}} className='text-blue-950'>{task.name}</p>
      </div>
      <button onClick={() => onDelete(task.id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
};

export default Item;

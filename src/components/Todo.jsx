import React from 'react';
import Item from './Item';

const Todo = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className='container mx-auto mt-6 pb-6'>
      <div className='flex flex-col justify-between gap-6'>
        {tasks.map((task) => {
          return (
            <Item
              task={task}
              onDelete={onDelete}
              key={task.id}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

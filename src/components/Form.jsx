import React from 'react';
import { useState } from 'react';

const Form = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { name: task, id: Date.now(), done: false };
    onAdd(newTask);
    setTask('');
  };
  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='form flex-row'>
        <input
          type='text'
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
          required
          placeholder='What Is Your Plan?'
        />
        <button className='add-btn'><p>Add Task</p></button>
      </form>
    </div>
  );
};

export default Form;

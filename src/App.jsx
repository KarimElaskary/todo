import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
    console.log(task);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleItem = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className='animated-background'>
      <div className='container mx-auto'>
        <Header tasks={tasks}/>
        <Form onAdd={addTask} />
        <Todo tasks={tasks} onDelete={deleteTask} onToggle={toggleItem} />
      </div>
    </div>
  );
};

export default App;

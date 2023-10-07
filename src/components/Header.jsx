import React from 'react';

const Header = ({tasks}) => {

  const total = tasks.length
  const done = tasks.filter(task => task.done).length

  return (
    <div className='flex flex-col justify-center items-center py-10 header'>
      <h1 className='text-[50px]'>TO-DO LIST</h1>
      <p className='text-[24px] sm: text-center'>You have {done} of {total} tasks have been completed</p>
    </div>
  );
};

export default Header;

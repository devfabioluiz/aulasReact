import React, { useState } from 'react';

// Componente Filho
const Child = ({ onButtonClick }) => (
  <button onClick={onButtonClick}>Click me!</button>
);


// Componente Pai
const Parent = () => {
  const [message, setMessage] = useState('No interaction yet');

  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;


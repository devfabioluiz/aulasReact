import React, { useState } from "react";

// Componente Pai
const Parent = () => {
  const [message, setMessage] = useState("No interaction yet");

  // Função a ser chamada pelo Filho
  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;

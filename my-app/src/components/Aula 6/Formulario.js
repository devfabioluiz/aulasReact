import React from 'react'

const Formulario = () => {
    const [inputValue, setInputValue] = React.useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
    // evita que o submit limpe o input
      e.preventDefault();
      console.log('Dados enviados:', inputValue);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Enviar</button>
        <div>{inputValue}</div>
      </form>
    );
  }
  
  export default Formulario
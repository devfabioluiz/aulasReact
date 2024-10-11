import React from 'react';
import PropTypes from 'prop-types';

// Componente funcional que aceita props
const Greeting = ({ name, age, isStudent }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Age: {age}</p>
    <p>{isStudent ? 'You are a student.' : 'You are not a student.'}</p>
  </div>
);

// Definindo PropTypes para validação
Greeting.propTypes = {
  name: PropTypes.string.isRequired, // Obrigatório
  age: PropTypes.number.isRequired,  // Obrigatório
  isStudent: PropTypes.bool          // Opcional
};

// Valores padrões
Greeting.defaultProps = {
  isStudent: false
};

export default Greeting;


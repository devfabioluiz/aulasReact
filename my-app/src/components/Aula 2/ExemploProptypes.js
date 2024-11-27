import React from "react";
import PropTypes from "prop-types";

// Componente funcional que aceita props
const ExemploPropTypes = ({ name, age, isStudent }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Age: {age}</p>
    <p>{isStudent ? "You are a student." : "You are not a student."}</p>
  </div>
);

// Definindo PropTypes para validação
ExemploPropTypes.propTypes = {
  name: PropTypes.string.isRequired, // Obrigatório
  age: PropTypes.number.isRequired, // Obrigatório
  isStudent: PropTypes.bool, // Opcional
};

// Valores padrões
ExemploPropTypes.defaultProps = {
  isStudent: false,
};

export default ExemploPropTypes;

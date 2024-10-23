import React, {useState} from 'react';
import InputComponent from './InputComponent';

const FormularioPai = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <InputComponent 
            label="Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
        />
        <InputComponent label="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
        />
      </div>
    );
  }
  
  export default FormularioPai
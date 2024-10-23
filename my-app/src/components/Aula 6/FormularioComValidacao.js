import React, {useState} from "react";

const FormularioComValidacao = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [cpf, setcpf] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeCPF = (e) => {
    setcpf(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // esse e o momento da validacao para checar se o email esta em padrao de formato de um endereco de email
    
    if (!email.includes("@")) {
        setError("Email inválido");
    } else if(cpf.length < 11){
        setError("CPF invalido");
    } else {
      setError("");
      console.log("Email enviado:", email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={handleChangeEmail} />
      <input type="text" value={cpf} onChange={handleChangeCPF} />
      {error && <span>{error}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioComValidacao;

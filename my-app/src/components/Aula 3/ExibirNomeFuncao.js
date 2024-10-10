import React, {useState}  from 'react'

const ExibirNomeFuncao = () => {
  const [contador, setNome] = useState('');
  const mudarNomeParaJoao = () => {
      setNome('João');
  };

  return (
      <div>
          <h1>Contador: {contador}</h1>
          <button onClick={mudarNomeParaJoao}>
            Incrementar
          </button>
      </div>
  );
}

export default ExibirNomeFuncao;
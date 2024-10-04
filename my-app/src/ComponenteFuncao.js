import React from 'react';

const ComponenteFuncao = (props) => {
    return (
        <div>
            <h1>Este é um componente de função</h1>
            <h2>Este é um exemplo de uma propriedade que é recebida por parametro, chamada no React de props: 
                {props.nome}
            </h2>
        </div>
    );
};

export default ComponenteFuncao;

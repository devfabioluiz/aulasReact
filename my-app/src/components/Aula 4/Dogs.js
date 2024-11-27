import React, { useState, useEffect } from "react";
import DogCards from "./DogCards";
import "./DogCards.css";

function Dogs() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/br3eeds/image/random")
      .then((response) => response.json()) // processa a resposta e transforma em formato JSON
      .then((data) => {
        setDogImage(data.message); // usa os dados e configura o estado para receber o data.message da requisição da API
        setLoading(false);
      })
      .catch(
        (error) => console.error("Erro ao buscar imagem de cachorro:", error) // captura erros caso a requisicao cause erro na API
      );
  }, []);

  return (
    <div className="app">
      {loading ? <p>Loading...</p> : <DogCards imageUrl={dogImage} />}
    </div>
  );
}

export default Dogs;

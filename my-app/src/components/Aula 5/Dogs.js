import React, { useState, useEffect } from 'react';
import DogCards from './DogCards';
import './DogCards.css';

function Dogs() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/br3eeds/image/random')
      .then(response => response.json()) 
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(error => console.error('Erro ao buscar imagem de cachorro:', error));
  }, []);

  return (
    <div className="app">
      {loading ? <p>Loading...</p> : <DogCards imageUrl={dogImage} />}
    </div>
  );
}

export default Dogs;

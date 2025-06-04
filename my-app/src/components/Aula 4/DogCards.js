import React from "react";
import "./DogCards.css";

const DogCards = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Random Dog" className="dog-image" />
      <div className="card-content">
        <h2>Random Dog</h2>
        <p>Este é um cachorro gerado aleatoriamente!</p>
      </div>
    </div>
  );
};

export default DogCards;

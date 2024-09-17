import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detalle.css';

const About = () => {
  const location = useLocation();
  const { pet } = location.state;

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Adóptame</h1>
      </header>
      <div className="about-content">
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name} className="about-image" />
        <h3>{pet.breed}</h3>
        <p>Edad: {pet.age} años</p>
        <p>{pet.description}</p>
    </div>
    </div>
  );
};

export default About;
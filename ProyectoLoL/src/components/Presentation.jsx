import React from 'react';
import './presentation.css';

const Presentation = ({ name, title, lore, tags, info, id }) => {
  return (
    <div 
      className="presentation-container" 
      style={{ backgroundImage: `url(/splash/${id}_0.jpg)` }} // Imagen de fondo exclusiva de Presentation
    >
      <div className="overlay"></div>
      <div className="champion-content">
        <h1 className="champion-title">{name}</h1>
        <h2 className="champion-subtitle">{title}</h2>
        <p className="champion-description">{lore}</p>

        <div className="champion-details">
          <div className="detail-box">
            <h4>Rol</h4>
            <p>{tags.join(', ')}</p>
          </div>
          <div className="detail-box">
            <h4>Dificultad</h4>
            <p>{info.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

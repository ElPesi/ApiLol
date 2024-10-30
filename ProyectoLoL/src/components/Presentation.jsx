import React from 'react'; // Importa React y CSS
import './presentation.css';

// Componente para mostrar la presentación de un campeón
const Presentation = ({ name, title, lore, tags, info, id }) => {
  // URL del splash art desde la API de DDragon
  const splashUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;

  return (
    <div 
      className="presentation-container" 
      style={{ backgroundImage: `url(${splashUrl})` }} // Establece la imagen de fondo desde la API
    >
      <div className="overlay"></div> {/* Capa de superposición para mejorar la visibilidad del texto */}
      <div className="champion-content">
        <h1 className="champion-title">{name}</h1> 
        <h2 className="champion-subtitle">{title}</h2> 
        <p className="champion-description">{lore}</p> 

        <div className="champion-details">
          <div className="detail-box">
            <h4>Rol</h4>
            <p>{tags.join(', ')}</p> {/* Muestra los roles del campeón como una lista */}
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

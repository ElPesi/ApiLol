import React from 'react'; // Importa React y CSS
import './presentation.css'; 

// Componente para mostrar la presentación de un campeón
const Presentation = ({ name, title, lore, tags, info, id }) => {
  return (
    <div 
      className="presentation-container" 
      style={{ backgroundImage: `url(/splash/${id}_0.jpg)` }} // Establece una imagen de fondo usando el ID del campeón
    >
      <div className="overlay"></div> {/*/ Capa de superposición para mejorar la visibilidad del texto*/}
      <div className="champion-content">
        <h1 className="champion-title">{name}</h1> 
        <h2 className="champion-subtitle">{title}</h2> 
        <p className="champion-description">{lore}</p> 

        <div className="champion-details">
          <div className="detail-box">
            <h4>Rol</h4>
            <p>{tags.join(', ')}</p> {/* Muestra los roles del campeón como una lista*/}
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

export default Presentation; // Exporta el componente Presentation

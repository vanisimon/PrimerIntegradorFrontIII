import React from "react";

const Card = ({jugador}) => {

    
    return (
        <div>
          <h2>Inscriptos</h2>
          {jugador.map((jugador, index) => (
            <div key={index} className="card">
              <h3>{jugador.nombre} {jugador.posicion}</h3>
            </div>
          ))}
        </div>
      );
  };
  
  
  export default Card;
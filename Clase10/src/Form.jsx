import React from "react";
import { useState } from "react";

const Form = ({nAddPlayer}) => {


    const [nombre,setNombre]=useState("");
    const [posicion,setPosicion]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nombre);
        console.log(posicion);

        if(nombre && apellido){
            onAddPatient({nombre,apellido});
            setNombre("");
            setPosicion("");
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <input type="text" placeholder="¿De que jugas?" value={posicion} onChange={(e)=>setPosicion(e.target.value)} />
            <button type="submit">Inscribirte</button>        
        </form>
    )
    
  };
  
  
  export default Form;
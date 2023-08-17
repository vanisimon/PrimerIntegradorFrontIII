import { useState } from 'react'
import './App.css'
import Card from './Card'
import Form from './Form'


function App() {
  const [jugador, setJugador] = useState([])

  const addPlayer= (player) => {
    setJugador([...jugador,player]);
    console.log(jugador)
  };


  return (
    <>
     <div className="App">
      <h1>Anotarse al Partido</h1>
      <p>Rival: Camada 4</p>
      <p>Miercoles 21 hs</p>
      <Form onAddPlayer={addPlayer}/>
      <Card Anotado={jugador}/>
      
      </div>
      

     
    </>
  )
}

export default App

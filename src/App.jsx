import { useState } from 'react'
import { Nombre } from './componentes/atomos/nombre'
import { Boton } from './componentes/atomos/boton'
import { Descripcion } from './componentes/atomos/descripcion'
import { Perfil } from './componentes/atomos/perfil'
import { Boton2 } from './componentes/atomos/boton2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
            <Perfil></Perfil>
      
      
            <Nombre></Nombre>
      
    
            <Boton></Boton>
      
      
            <Boton2></Boton2>
      
    
            <Descripcion></Descripcion>
      
      

    </>
  )
}

export default App

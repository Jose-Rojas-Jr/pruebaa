import { useState } from 'react'
import { Nombre } from './componentes/atomos/nombre'
import { Boton } from './componentes/atomos/boton'
import { Descripcion } from './componentes/atomos/descripcion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <Nombre></Nombre>
      </div>
      <div>
            <Boton></Boton>
      </div>
      <div>
            <Descripcion></Descripcion>
      </div>

    </>
  )
}

export default App

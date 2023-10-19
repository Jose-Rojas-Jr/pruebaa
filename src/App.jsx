import { useState } from "react";
import { Nombre } from "./componentes/atomos/nombre";
import { Boton } from "./componentes/atomos/boton";
import { Descripcion } from "./componentes/atomos/descripcion";
import { Perfil } from "./componentes/atomos/perfil";
import { Boton2 } from "./componentes/atomos/boton2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="super">
        <Perfil></Perfil>
        
      <div className="card">
        <Nombre></Nombre>
        <Descripcion></Descripcion>
        <Boton></Boton>
        <Boton2></Boton2>
      </div>
      </div>
    </>
  );
}

export default App;

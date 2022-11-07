import React from "react";
import Integrantes from "./Integrantes.js";
import "./Styles/Desarrolladores.css";
import desarrolladores from "../Componentes/Json/desarrolladores"

/** Cree un array de objectos compuesto por la informacion de cada alumno y integrante del grupo 11
 * solicitado por el profesor en un componente Json ("desarroladores.json") como el nombre completo, usuario git,etc.
 *  Utilizo el componente reutilizable "Integrantes.js" el cual mediante 
 * la funcion "Desarrolladores" realiza un mapeo que renderiza la informacion del array mostrandola por pantalla. Nadia Rosario Sanchez*/

function Desarrolladores() {

  return (
    <div className="contPadre">
      <div className="contPrincipal">
        {
          desarrolladores.map((e, i) => <Integrantes
            key={i}
            name={e.name}
            gitname={e.gitname}
            descripcion={e.descripcion}
            img={e.img}
            link={e.link} />
          )
        }
      </div>
    </div>

  );
}

export default Desarrolladores;

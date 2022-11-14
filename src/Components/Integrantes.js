import React from "react";
import '../components/Styles/Desarrolladores.css'
const Integrantes = (props) => {
    return (
        <div className="contProps">
            <div className="contenedortexto">
                <div className="name">{props.name}</div>
                <div className="gitname">{props.gitname} </div>
                <div className="descripcion">{props.descripcion}</div>
                <a className="git" href={props.link} target='_blank'>Has click aca si quieres ver mis trabajos</a>
            </div>
            <img className="imagen" src={props.img} alt="foto de perfil Git" />
        </div>
    )
}

export default Integrantes;
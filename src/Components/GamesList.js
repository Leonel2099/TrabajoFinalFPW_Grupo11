import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../components/Styles/GameList.css';
import PPT from '../Assets/img/PPTH.png'
import AhorcaditoI from "../Assets/img/AhorcaditoH.png"
import ArkanoidI from"../Assets/img/ArkanoidH.png"
export default function GamesList() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <h1 className='tituloP'>Juegos hechos por el Grupo11</h1>
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
                <Carousel.Item className='container'>
                    <img
                        src={PPT}
                        alt="First slide"
                    />
                <Carousel.Caption>
                        <p>Puede encontrar el repositorio de estos juegos en Games, puede clonarlos para verlos como la imagen o puede jugarlos aqui mismo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='container'>
                    <img
                        src={AhorcaditoI}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Puede encontrar el repositorio de estos juegos en Games, puede clonarlos para verlos como la imagen o puede jugarlos aqui mismo</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='container'>
                    <img
                        src={ArkanoidI}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p>Puede encontrar el repositorio de estos juegos en Games, puede clonarlos para verlos como la imagen o puede jugarlos aqui mismo</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

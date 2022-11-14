import React from "react"
import CardsGames from "./CardsGames.js"
import games from './Json/Games.json'
import '../components/Styles/GameList.css'
export default function Cards() {
    return (
        <div className="cardsG">
            {
                games.map((g, i) => <CardsGames
                    key={i}
                    img={g.img}
                    titulo={g.titulo}
                    descripcion={g.descripcion}
                    linkG={g.linkG}
                    linkP={g.linkP}
                />)
            }
        </div>
    );
}

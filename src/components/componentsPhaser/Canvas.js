import { useState,useEffect} from "react";
import Preload from "./Preload";
import Inicio from './Inicio'
import Nivel from "./Nivel";
import Derrota from "./Derrota";
import Victoria from "./Victoria";
export default function Canvas() {
    //uso state de una varstibale 'listo', sino usamos esto los lienzos se acumularan en la visa 
    const [listo, setListo] = useState(false);
    //usamos el hook para que renderice acciones que reat no hace
    useEffect(() => {
        //configuracion por defecto
        const CONFIGURACION = {
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
                width: 640,
                height: 682
            },
        }
        const Escenas = [Preload,Inicio,Nivel,Derrota]
        const crearEscena = Scene => new Scene(CONFIGURACION)
        const iniciarEscena = () => Escenas.map(crearEscena)

        const config = {
            type: Phaser.AUTO,
            ...CONFIGURACION,
            physics:{
                default:'arcade',
                arcade:{
                    gravity:{y:0},
                    //debug:true
                }
            },
            scene: iniciarEscena()
        }
        //Aqui empieza el juego
        const game = new Phaser.Game(config);
        //Trigger cuando el juego esta completamente listo
        game.events.on("LISTO", setListo);
        //Esto ayuda a que no se duplique el lienzo
        return () => {
            setListo(false);
            game.destroy(true);
        }
    }, [listo])
};

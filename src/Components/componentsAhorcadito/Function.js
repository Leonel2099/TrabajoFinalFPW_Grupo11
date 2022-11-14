import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
import abc from "../Json/abecedario.json"
import dic from "../Json/palabras.json"
import gif from "../../Assets/img/inicioAnim.gif"
import img0 from "../../Assets/img/0.jpg"
import img1 from "../../Assets/img/1.jpg"
import img2 from "../../Assets/img/2.jpg"
import img3 from "../../Assets/img/3.jpg"
import img4 from "../../Assets/img/4.jpg"
import img5 from "../../Assets/img/5.jpg"

export default function Function() {
    const btn_letras = document.querySelectorAll("#botones")
    const [num, setNum] = useState(0);
    const palabra = Array.from(dic[num].words)
    const [arrayPalabra, setArrayPalabra] = useState([]);
    const [palabraAdivinar, setPalabraAdivinar] = useState("")
    const [play, setPlay] = useState(false)
    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [resultado, setResultado] = useState("");
    const [imagen, setImagen] = useState(gif)

    const restart = () => {
        setNum(Math.floor(Math.random() * dic.length))
        habilitar();
        setResultado("")
        setErrores(0)
        setAciertos(0)
        setImagen(img0)
    }
    const handleClick = () => {
        setPlay(true)
        setImagen(img0)
        setNum(Math.floor(Math.random() * dic.length))
    }
    useEffect(() => {
        setArrayPalabra(Array(palabra.length).fill("_ "))
        setPalabraAdivinar(dic[num].words)
    }, [num]);

    useEffect(() => {
        switch (errores) {
            case 1: {
                setImagen(img1)
                break
            }
            case 2: {
                setImagen(img2)
                break
            }
            case 3: {
                setImagen(img3)
                break
            }
            case 4: {
                setImagen(img4)
                break
            }
            case 5: {
                setImagen(img5)
                setResultado("Perdiste: La palabra era " + palabraAdivinar);
                desHabilitar();
                break
            }

        }
        if (aciertos == palabra.length) {
            setResultado("Acertaste");
            desHabilitar();
        }
    }, [errores, aciertos])

    const habilitar = () => {
        for (let i = 0; i < btn_letras.length; i++) {
            btn_letras[i].disabled = false;
        }
    }
    const desHabilitar = () => {
        for (let i = 0; i < btn_letras.length; i++) {
            btn_letras[i].disabled = true;
        }
    }
    const letraOk = (event) => {
        let num = 0;
        let acerto = false;
        const boton = event.target;
        boton.disabled = true;
        const letraClick = boton.innerHTML;
        palabra.map((letra, i) => {
            if (letra === letraClick) {
                num++;
                acerto = true;
                arrayPalabra[i] = letra;
                setArrayPalabra((prev) => [...prev])
            }
        })
        setAciertos(aciertos + num)
        if (acerto == false) {
            setErrores(errores + 1);
        }
    }

    if (play) {
        return (
            <div className="functionContainer">
                <section className="juego">
                <div className="palabra">
                <Button onClick={restart}>Reiniciar</Button>
                <h1>{errores+"/5 Intentos"}</h1>
                <h1>{arrayPalabra}</h1>
                </div>
                <figure className="sprite">
                    <img src={imagen} height="100" width="100" />
                </figure>
                </section>
                <section className="botonera">
                {abc.map((l, i) =>
                    <Button onClick={letraOk} id="botones" variant="outline-primary"
                        key={i}
                    >
                        {l.letra}
                    </Button>
                )}
                </section>
                <h1>{resultado}</h1>
            </div>
        )
    } else {
        return (
            <div className="functionContainer">
                <figure className="imgMain">
                    <img src={imagen} />
                </figure>
                <Button onClick={handleClick}>Comenzar Juego</Button>
            </div>
        )

    }

};
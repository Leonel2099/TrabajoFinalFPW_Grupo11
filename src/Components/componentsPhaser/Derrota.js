import Phaser from "phaser";
import { RetryBoton } from "./RetryBoton";
export default class Derrota extends Phaser.Scene {
    constructor(config) {
        super('derrota')
        this.config = config
        this.button= new RetryBoton(this)
        //this.sonido2=null;
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        //this.createSound()
    }
    createBackground() {
        this.add.image(320,341, 'perdiste').setScale(0.5,0.5);
    }
    // createSound(){
    //     this.sonido2=this.sound.add('lose')
    //     this.sonido2.play({
    //         volume:0.3
    //     });
    // }
};
import Phaser from "phaser";
import { InicioBoton} from "./InicioBoton";


export default class Victoria extends Phaser.Scene {
    constructor(config) {
        super('ganaste')
        this.config = config
        this.cursors=null
        this.button= new InicioBoton(this)
        //this.sound3= null
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        //this.createSound()
    }
    createBackground() {
        this.add.image(320,341, 'ganaste').setScale(0.5,0.5);
    }

    // createSound(){
    //     this.sonido2=this.sound.add('winS')
    //     this.sonido2.play({
    //         volume:0.3
    //     });
    // }
};
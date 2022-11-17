import Phaser from "phaser";
import {PlayBoton} from './PlayBoton'

export default class Inicio extends Phaser.Scene {
    constructor(config) {
        super('Inicio')
        this.config = config
        this.button= new PlayBoton(this)
        //this.lvl1=new ButtonLvl1(this)
        // this.lvl2=new ButtonLvl2(this)
        // this.lvl3=new ButtonLvl3(this)
        //this.sonido;
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear();
        //this.lvl1.crear()
        // this.lvl2.crear()
        // this.lvl3.crear()
        // this.createSound()

    }
    createBackground() {
        this.add.image(320,341, 'inicio').setScale(0.5,0.5);
    }
    // createSound(){
    //     this.sonido=this.sound.add('opening')
    //     this.sonido.play({
    //         loop:true,
    //         volume:0.3
    //     });
    // }
    // stopMusic(){
    //     this.sonido.stop()
    // }
};
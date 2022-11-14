import Phaser from "phaser";
import {PlayButton} from './PlayButton'
import { ButtonLvl1 } from "./ButtonLvl1";
import { ButtonLvl2 } from "./ButtonLvl2";
import { ButtonLvl3 } from "./ButtonLvl3";
export default class Menu extends Phaser.Scene {
    constructor(config) {
        super('Menu')
        this.config = config
        this.button= new PlayButton(this)
        this.lvl1=new ButtonLvl1(this)
        this.lvl2=new ButtonLvl2(this)
        this.lvl3=new ButtonLvl3(this)
        this.sonido;
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        this.lvl1.crear()
        this.lvl2.crear()
        this.lvl3.crear()
        // this.createSound()

    }
    createBackground() {
        this.add.image(320,341, 'fondoM');
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
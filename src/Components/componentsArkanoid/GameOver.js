import Phaser from "phaser";
import {ResetButton} from './ResetButton'
export default class GameOver extends Phaser.Scene {
    constructor(config) {
        super('GameOver')
        this.config = config
        this.button= new ResetButton(this)
        this.sonido2=null;
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        this.createSound()
    }
    createBackground() {
        this.add.image(320,341, 'gameOver');
    }
    createSound(){
        this.sonido2=this.sound.add('lose')
        this.sonido2.play({
            volume:0.3
        });
    }
};
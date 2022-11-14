import Phaser from "phaser";
import { MenuButton } from "./MenuButton";
export default class YouWon extends Phaser.Scene {
    constructor(config) {
        super('YouWon')
        this.config = config
        this.cursors=null
        this.button= new MenuButton(this)
        this.sound3= null
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        this.createSound()
    }
    createBackground() {
        this.add.image(320,341, 'win');
    }
    
    createSound(){
        this.sonido2=this.sound.add('winS')
        this.sonido2.play({
            volume:0.3
        });
    }
};
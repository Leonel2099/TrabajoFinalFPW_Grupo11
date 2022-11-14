import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }

    preload() {
        //Carga de imagenes
        //Fondos de escenas
        this.load.image('fondoM', 'assets/assetsArkanoid/inicio.jpg')
        this.load.image('fondo', 'assets/assetsArkanoid/fondos.png');
        this.load.image('gameOver', 'assets/assetsArkanoid/gameover.jpg')
        this.load.image('win', 'assets/assetsArkanoid/youwon.jpg');
        //objetos
        this.load.image('pelota', 'assets/assetsArkanoid/ball.png');
        this.load.image('player', 'assets/assetsArkanoid/vaus.png');
        this.load.image('blue', 'assets/assetsArkanoid/blue.png');
        this.load.image('red', 'assets/assetsArkanoid/red.png');
        this.load.image('barra', 'assets/assetsArkanoid/bloque_cian.png');
        this.load.image('barra1', 'assets/assetsArkanoid/bloque_green.png');
        this.load.image('barra2', 'assets/assetsArkanoid/bloque_red.png');
        //botones
        this.load.spritesheet('restart', 'assets/assetsArkanoid/buttonRestart.png',{frameWidth:164.5, frameHeight:56})
        this.load.spritesheet('play', 'assets/assetsArkanoid/play.png',{frameWidth:184.5,frameHeight:114});
        this.load.spritesheet('menu', 'assets/assetsArkanoid/buttonMenu.png',{frameWidth:128.5, frameHeight:53});
        this.load.spritesheet('level1', 'assets/assetsArkanoid/buttonlvl1.png',{frameWidth:155.5, frameHeight:55});
        this.load.spritesheet('level2', 'assets/assetsArkanoid/buttonlvl2.png',{frameWidth:155.5, frameHeight:55});
        this.load.spritesheet('level3', 'assets/assetsArkanoid/buttonlvl3.png',{frameWidth:155.5, frameHeight:55});
        //Carga de Sonidos
        this.load.audio('lose', 'assets/sounds/arkanoid_lose.mp3');
        this.load.audio('opening', 'assets/sounds/arkanoid_opening.mp3');
        this.load.audio('reboteP', 'assets/sounds/arkanoid_rebote1.mp3');
        this.load.audio('reboteB', 'assets/sounds/arkanoid_rebote2.mp3');
        this.load.audio('winS', 'assets/sounds/arkanoid_start.mp3');
    }

    create() {
        this.scene.start('Menu')
    }
};
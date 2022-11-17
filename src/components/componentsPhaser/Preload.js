import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        //Carga imagenes para escena de juego
        this.load.image('meta', 'assets/assetsPhaser/meta.png');
        this.load.image('lake', 'assets/assetsPhaser/lake.png');
        this.load.image('lakeM', 'assets/assetsPhaser/lake_M.png');
        this.load.image('nenufar', 'assets/assetsPhaser/loto.png');
        this.load.image('platform', 'assets/assetsPhaser/plataform.png');
        this.load.spritesheet('frog', 'assets/assetsPhaser/frogger.png', { frameWidth: 31.25, frameHeight: 28.5});
        this.load.image('frogWin', 'assets/assetsPhaser/lotoWin.png');
        this.load.image('car1', 'assets/assetsPhaser/car1.png');
        this.load.image('car2', 'assets/assetsPhaser/car2.png');
        this.load.image('car3', 'assets/assetsPhaser/car3.png');
        this.load.spritesheet('turttle', 'assets/assetsPhaser/turttle.png',{ frameWidth: 37, frameHeight: 23 });
        this.load.image('woodL','assets/assetsPhaser/logL.png');
        this.load.image('woodXL','assets/assetsPhaser/logXL.png');
        //Carga imagenes para escenas de inicio, derrota y victoria
        this.load.image('inicio', 'assets/assetsPhaser/inicioScreen.jpg');
        this.load.image('perdiste', 'assets/assetsPhaser/gameoverScreen.jpg');
        this.load.image('ganaste', 'assets/assetsPhaser/winScreen.jpg');
        this.load.spritesheet('retry', 'assets/assetsPhaser/botonRetry.png', { frameWidth: 279, frameHeight: 278});//indica el tamaño del frame que se mostrará
        this.load.spritesheet('play', 'assets/assetsPhaser/botonPlay.png', { frameWidth: 698, frameHeight: 610});//indica el tamaño del frame que se mostrará
    }

    create() {
        //this.scene.start('Menu')
        this.scene.start('Inicio')
    }
};

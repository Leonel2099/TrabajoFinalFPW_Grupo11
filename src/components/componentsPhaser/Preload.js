import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        this.load.image('meta', 'assets/assetsPhaser/meta.png');
        this.load.image('lake', 'assets/assetsPhaser/lake.png');
        this.load.image('nenufar', 'assets/assetsPhaser/nenufar.png');
        this.load.image('platform', 'assets/assetsPhaser/plataform.png');
        this.load.spritesheet('frog', 'assets/assetsPhaser/frogger.png', { frameWidth: 31.25, frameHeight: 28.5});
        this.load.image('frogWin', 'assets/assetsPhaser/froggerWin.png');
    }

    create() {
        //this.scene.start('Menu')
        this.scene.start('Nivel')
    }
};

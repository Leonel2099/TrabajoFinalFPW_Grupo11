import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        this.load.image('meta', 'assets/assetsPhaser/meta.png');
        this.load.image('meta1', 'assets/assetsPhaser/metaBig.png');
        this.load.image('meta2', 'assets/assetsPhaser/metaSmall.png');
        this.load.image('lake', 'assets/assetsPhaser/lake.png');
        this.load.image('nenufar', 'assets/assetsPhaser/nenufar.png');
        this.load.image('platform', 'assets/assetsPhaser/plataform.png');
        this.load.spritesheet('frog', 'assets/assetsPhaser/frogger.png', { frameWidth: 31.25, frameHeight: 28.5});
        this.load.image('frogWin', 'assets/assetsPhaser/froggerWin.png');
        this.load.image('car1', 'assets/assetsPhaser/car1.png');
        this.load.image('car2', 'assets/assetsPhaser/car2.png');
        this.load.image('car3', 'assets/assetsPhaser/car3.png');
        this.load.spritesheet('turttle', 'assets/assetsPhaser/turttle.png',{ frameWidth: 37, frameHeight: 23 });
        this.load.image('logL','assets/assetsPhaser/logL.png');
        this.load.image('logS','assets/assetsPhaser/logS.png');
        this.load.image('logXL','assets/assetsPhaser/logXL.png');


    }

    create() {
        //this.scene.start('Menu')
        this.scene.start('Nivel')
    }
};

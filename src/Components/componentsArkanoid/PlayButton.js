export class PlayButton {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(320, 330, 'play').setInteractive()

        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        })

        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        })

        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelOne')
        })

    }

};

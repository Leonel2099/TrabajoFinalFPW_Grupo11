export class RetryBoton {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(320, 341, 'retry').setInteractive().setScale(0.5,0.5);

        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        })

        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        })

        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('Nivel')
        })

    }

};
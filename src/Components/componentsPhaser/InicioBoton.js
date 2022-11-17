export class InicioBoton {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(320, 580, 'inicioBoton').setInteractive().setScale(0.3,0.3);

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
export class ButtonLvl1 {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(190, 450, 'level1').setInteractive()
        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelOne')
        })
        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        })

        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        })
    }

};

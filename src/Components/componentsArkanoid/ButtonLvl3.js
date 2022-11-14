export class ButtonLvl3 {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(320, 550, 'level3').setInteractive()
        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelThree')
        })
        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        })

        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        })
    }

};
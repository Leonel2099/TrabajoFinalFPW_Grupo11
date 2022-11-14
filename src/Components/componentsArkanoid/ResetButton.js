export class ResetButton {
    constructor(scene){
        this.sceneR=scene
    }
    crear(){
        this.button = this.sceneR.add.image(320, 400, 'restart').setInteractive()
        this.button.on('pointerdown',()=>{
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

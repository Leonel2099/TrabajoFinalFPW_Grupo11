export class MenuButton {
    constructor(scene){
        this.sceneR=scene
    }
    crear(){
        this.button = this.sceneR.add.image(320, 500, 'menu').setInteractive()
        this.button.on('pointerdown',()=>{
            this.sceneR.scene.start('Menu')
        })
        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        })

        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        })
    } 
    
};

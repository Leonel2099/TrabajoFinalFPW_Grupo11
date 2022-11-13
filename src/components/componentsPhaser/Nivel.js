import Phaser from 'phaser';
export default class Nivel extends Phaser.Scene {
    constructor(config) {
        super('Nivel')
        this.cursors = null;
        this.player = null;
        this.playerWin = null;
        this.platform = null;
        this.nenufar = null;
        this.x = 0;
        this.lake = null;
        this.lakeM = null;
        this.lakeM1 = null;
        this.lakeM2 = null;
        this.car = null;
        this.car2 = null;
        this.car3 = null;
        this.tortuga1 = null;
        this.tortuga2 = null;
        this.tortuga3 = null;
        this.tortuga4 = null;
        this.tortuga5 = null;
        this.tortuga6 = null;
        this.woodS = null;
        this.woodL = null;
        this.woodXL = null;
        this.gWood = null;
    }
    create() {
        this.lakeM = this.physics.add.image(866.5, 125, 'lakeM');//Lago movible para colision
        this.lakeM1 = this.physics.add.image(1243.5, 125, 'lakeM1');//Lago movible para colision
        this.lakeM2 = this.physics.add.image(1620.5, 125, 'lakeM2');//Lago movible para colision
        this.lake = this.physics.add.image(320, 180, 'lake').setScale(0.4, 0.4);//Lago statico
        this.meta = this.physics.add.image(240, 50, 'meta').setScale(2, 2);//Meta pasto casillas

        this.playerWin = this.physics.add.staticGroup({
            key: 'frogWin',
            repeat: 4,
            setXY: { x: 66, y: 65, stepX: 169 },
        });
        this.nenufar = this.physics.add.staticGroup({
            key: 'nenufar',
            repeat: 4,
            setXY: { x: 66, y: 65, stepX: 169 },
            immovable: true
        });
        this.nenufar.refresh();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.platform = this.physics.add.staticGroup({
            key: 'platform',
            repeat: 2,
            setXY: { x: 400, y: 300, stepY: 350 },
            setScale: { x: 2, y: 2.8 },
        });

        //this.meta = this.physics.add.staticGroup();
        //this.meta.create(399, 53, 'meta').setScale(2).refreshBody();
        //this.physics.add.collider(this.meta, this.player);
        //this.meta.setCollideWorldBounds(true);


        //META VERSION SEPARADA EN DOS PARTES

        //a la tortuga se le asigna el sprite
        this.tortuga1 = this.physics.add.sprite(640, 125, 'turttle').setScale(1.5);
        this.tortuga2 = this.physics.add.sprite(678, 125, 'turttle').setScale(1.5);
        this.tortuga3 = this.physics.add.sprite(716, 125, 'turttle').setScale(1.5);
        this.tortuga4 = this.physics.add.sprite(1017, 125, 'turttle').setScale(1.5);
        this.tortuga5 = this.physics.add.sprite(1055, 125, 'turttle').setScale(1.5);
        this.tortuga6 = this.physics.add.sprite(1093, 125, 'turttle').setScale(1.5);
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('turttle', { start: 0, end: 2 }),
            frameRate: 3,
        });

        //this.createCar();
        this.createWood();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setCollideWorldBounds(true);
        //Movimientos(se usan en el Update)
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('frog', { frames: [2, 3, 2] }),
            frameRate: 10
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('frog', { frames: [0, 1, 0] }),
            frameRate: 10
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('frog', { frames: [4, 5, 4] }),
            frameRate: 10
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('frog', { frames: [6, 7, 6] }),
            frameRate: 10
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'frog', frame: 4 }],
            frameRate: 20
        });
        this.physics.add.overlap(this.player, this.nenufar, this.win, null, this);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
    }


    update() {

        this.physics.add.overlap(this.player, [this.tortuga1,
            this.tortuga2,
            this.tortuga3,
            this.tortuga4,
            this.tortuga5,
            this.tortuga6], this.over, null, this);
        //  this.moveCar()
        // this.moveLog()

        //console.log(this.player.y, this.player.x)
        //  Horizontal movement every 250ms
        if (this.input.keyboard.checkDown(this.cursors.left, 250)) {
            this.player.x -= 32;
            this.player.anims.play('left', true)
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 250)) {
            this.player.x += 32;
            this.player.anims.play('right', true)
        }
        //  Vertical movement every 150ms
        if (this.input.keyboard.checkDown(this.cursors.up, 150)) {
            this.player.y -= 34;
            this.player.anims.play('up', true)
            this.player.setVelocityX(0)
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 150)) {
            this.player.y += 34;
            this.player.anims.play('down', true)
            this.player.setVelocityX(0)
        }
        // else{
        //     this.player.setVelocityX(0);
        //     this.player.anims.play('turn')
        // }
        this.moveTurtles();
        this.moveWood();
        this.moveLake();
        // console.log(wood.getvelocity());
    }
    moveWood() {
        this.gWood.children.iterate((x) => {
            x.setVelocityX(-100);
            console.log(this.gWood.getChildren().indexOf(1).x)
        });
        // this.woodL.setVelocityX(-100);
        // this.woodL.setVelocityX(-100);
        // this.woodXL.setVelocityX(-100);
        // this.woodXL.setVelocityX(-100);
        // let wood = this.gWood.getChildren()
    }
    moveLake() {

        this.lakeM.setVelocityX(-100);
        if (this.lakeM.x < -90) {
            this.lakeM.x = 1041.66;
        }
        this.lakeM1.setVelocityX(-100);
        if (this.lakeM1.x < -90) {
            this.lakeM1.x = 1041.66;
        }
        this.lakeM2.setVelocityX(-100);
        if (this.lakeM2.x < -90) {
            this.lakeM2.x = 1041.66;
        }
    }
    moveTurtles() {
        this.tortuga1.setVelocityX(-100);
        this.tortuga2.setVelocityX(-100);
        this.tortuga3.setVelocityX(-100);
        this.tortuga4.setVelocityX(-100);
        this.tortuga5.setVelocityX(-100);
        this.tortuga6.setVelocityX(-100);


        this.tortuga1.anims.play('move', true);
        this.tortuga2.anims.play('move', true);
        this.tortuga3.anims.play('move', true);
        this.tortuga4.anims.play('move', true);
        this.tortuga5.anims.play('move', true);
        this.tortuga6.anims.play('move', true);
        if (this.tortuga3.x < -19) {
            this.tortuga1.x = 659;
            this.tortuga2.x = 697;
            this.tortuga3.x = 735;
        }
        if (this.tortuga6.x < -19) {
            this.tortuga4.x = 659;
            this.tortuga5.x = 697;
            this.tortuga6.x = 735;
        }
    }

    over() {
        this.player.setVelocityX(-100);
    }
    createCar() {

        this.car = this.physics.add.group();
        this.car2 = this.physics.add.group();
        let distCar = 670;
        let distCar2 = 0;

        for (var i = 0; i < 2; i++) {
            this.car.create(distCar, 400, 'car1').setScale(1.5);
            this.car2.create(distCar2, 450, 'car2').setScale(1.5);
            this.car.create(distCar, 500, 'car3').setScale(1.5);
            distCar += 200;
            distCar2 += 200;
        }
        this.physics.add.overlap(this.player, this.car, this.dead, null, this);
        this.physics.add.overlap(this.player, this.car2, this.dead, null, this);

    }

    moveCar() {
        this.car.setVelocityX(-100);
        this.car2.setVelocityX(100);
    }

    createWood() {
        this.gWood = this.physics.add.group();
        let disH = 900;
        for (let i = 0; i < 2; i++) {
            this.gWood.create(disH, 300, 'woodS').setScale(1.5);
            disH += 200;
        }
        // this.woodS = this.physics.add.image(678, 300, 'woodS').setScale(1.5);
        // this.woodL = this.physics.add.image(-900, 150, 'woodL').setScale(1.5);
        // this.woodL = this.physics.add.image(900, 300, 'woodL').setScale(1.5);
        // this.woodXL = this.physics.add.image(-900, 150, 'woodXL').setScale(1.5);
        // this.woodXL = this.physics.add.image(976, 300, 'woodXL').setScale(1.5);
    }
    win(player, nenufar) {
        //this.playerWin.create(55, 65, 'frogWin').setScale(1.5);
        this.nenufar.killAndHide(nenufar);
        nenufar.body.enable = false;
        this.player.destroy();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setCollideWorldBounds(true);
        this.physics.add.overlap(this.player, this.nenufar, this.win, null, this);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
    }
    dead(player, nenufar) {
        this.player.destroy();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setCollideWorldBounds(true);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
        this.physics.add.overlap(this.player, this.nenufar, this.win, null, this);

    }

};
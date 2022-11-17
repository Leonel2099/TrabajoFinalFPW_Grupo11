import Phaser from 'phaser';
export default class Nivel extends Phaser.Scene {
    constructor(config) {
        super('Nivel')
        this.cursors = null;
        this.player = null;
        this.playerWin = null;
        this.platform = null;
        this.nenufar = null;
        this.score = 0;
        this.lake = null;
        this.lakeM = null;
        this.lakeM1 = null;
        this.lakeM2 = null;
        this.lakeM3 = null;
        this.lakeM4 = null;
        this.lakeM5 = null;
        this.lakeM6 = null;
        this.car = null;
        this.car1 = null;
        this.car1a = null;
        this.car2 = null;
        this.car2a = null;
        this.car3 = null;
        this.car3a = null;
        this.tortuga1 = null;
        this.tortuga2 = null;
        this.tortuga3 = null;
        this.tortuga4 = null;
        this.tortuga5 = null;
        this.tortuga6 = null;
        this.woodL = null;
        this.woodL2 = null;
        this.woodXL = null;
        this.woodXL2 = null;
        this.lifePlayer = 3;
        this.lifeText = null;

    }
    create() {
        this.createLake();
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
            setXY: { x: 400, y: 310, stepY: 350 },
            setScale: { x: 2, y: 2.8 },
        });
        this.createTurtles();
        this.createCar();
        this.createWood();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setCollideWorldBounds(true);
        this.player.setSize(18, 10);
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
        this.physics.add.overlap(this.player, this.nenufar, this.setWin, null, this);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM3, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM4, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM5, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM6, this.dead, null, this);
        this.scoreText = this.add.text(20, 630, 'Score: 0', { fontSize: '25px', fill: '#fff' });
        this.lifeText = this.add.text(10, 2, '🐸🐸🐸', { fontSize: '25px', fill: '#fff' });

    }


    update() {
        this.physics.add.overlap(this.player, [this.car,
        this.car1,
        this.car1a,
        this.car2,
        this.car2a,
        this.car3,
        this.car3a], this.dead, null, this);
        this.physics.add.overlap(this.player, [this.tortuga1,
        this.tortuga2,
        this.tortuga3,
        this.tortuga4,
        this.tortuga5,
        this.tortuga6], this.over, null, this);
        this.physics.add.overlap(this.player, [this.woodL, this.woodL2], this.over, null, this);
        this.physics.add.overlap(this.player, [this.woodXL, this.woodXL2,], this.over2, null, this);
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
        this.moveCars();
        this.moveTurtles();
        this.moveWood();
        this.moveLake();
    }
    createLake() {
        this.lakeM = this.physics.add.image(866.5, 125, 'lakeM').setScale(1, 0.5);//Lago movible para colision
        this.lakeM1 = this.physics.add.image(1243.5, 125, 'lakeM').setScale(1, 0.5);//Lago movible para colision
        this.lakeM2 = this.physics.add.image(1620.5, 125, 'lakeM').setScale(1, 0.5);//Lago movible para colision
        this.lakeM3 = this.physics.add.image(-300, 170, 'lakeM').setScale(0.4, 0.8);//Lago movible para colision
        this.lakeM4 = this.physics.add.image(-775, 170, 'lakeM').setScale(1.1, 0.8);//Lago movible para colision
        this.lakeM5 = this.physics.add.image(870, 220, 'lakeM').setScale(0.7, 0.8);//Lago movible para colision
        this.lakeM6 = this.physics.add.image(1273, 220, 'lakeM').setScale(0.9, 0.8)//Lago movible para colision
        this.lake = this.physics.add.image(320, 180, 'lake').setScale(0.4, 0.4);//Lago statico
    }
    createCar() {
        this.car = this.physics.add.image(640, 380, 'car1').setScale(1.5);
        this.car1 = this.physics.add.image(800, 380, 'car1').setScale(1.5);
        this.car1a = this.physics.add.image(960, 380, 'car1').setScale(1.5);
        this.car2 = this.physics.add.image(0, 480, 'car2').setScale(1.5);
        this.car2a = this.physics.add.image(-130, 480, 'car2').setScale(1.5);
        this.car3 = this.physics.add.image(640, 580, 'car3').setScale(1.5);
        this.car3a = this.physics.add.image(800, 580, 'car3').setScale(1.5);
    }
    createTurtles() {
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
    }
    createWood() {
        this.woodL = this.physics.add.image(680, 220, 'woodL').setScale(1.5);
        this.woodL2 = this.physics.add.image(1060, 220, 'woodL').setScale(1.5);
        this.woodXL = this.physics.add.image(-100, 170, 'woodXL').setScale(1.5);
        this.woodXL2 = this.physics.add.image(-500, 170, 'woodXL').setScale(1.5);
    }
    moveWood() {
        this.woodL.setVelocityX(-100);
        this.woodL2.setVelocityX(-100);
        this.woodXL.setVelocityX(100);
        this.woodXL2.setVelocityX(100);
        if (this.woodXL.x > 800) {
            this.woodXL.x = -150;
        }
        if (this.woodXL2.x > 800) {
            this.woodXL2.x = -150;
        }
        if (this.woodL.x < -85) {
            this.woodL.x = 720;
        }
        if (this.woodL2.x < -85) {
            this.woodL2.x = 720;
        }
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
        this.lakeM3.setVelocityX(100);
        if (this.lakeM3.x > 800) {
            this.lakeM3.x = -148.5;
        }
        this.lakeM4.setVelocityX(100);
        if (this.lakeM4.x > 800) {
            this.lakeM4.x = -148.5;
        }
        this.lakeM5.setVelocityX(-100);
        if (this.lakeM5.x < -89) {
            this.lakeM5.x = 715.5;
        }
        this.lakeM6.setVelocityX(-100);
        if (this.lakeM6.x < -89) {
            this.lakeM6.x = 715.5;
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
    over2() {
        this.player.setVelocityX(100);
    }

    moveCars() {
        this.car.setVelocityX(-200);
        this.car1.setVelocityX(-200);
        this.car1a.setVelocityX(-200);
        this.car2.setVelocityX(350);
        this.car2a.setVelocityX(350);
        this.car3.setVelocityX(-150);
        this.car3a.setVelocityX(-150);
        if (this.car.x < 0 && this.car1.x < 0 && this.car1a.x < 0) {
            this.car.x = 640;
            this.car1.x = 800;
            this.car1a.x = 960;
        }

        if (this.car3.x < 0 && this.car3a.x < 0) {
            this.car3.x = 640;
            this.car3a.x = 800;
        }

        if (this.car2.x > 640 && this.car2a.x > 640) {
            this.car2.x = 0;
            this.car2a.x = -130;
        }
    }

    setWin(player, nenufar) {
        this.nenufar.killAndHide(nenufar);
        nenufar.body.enable = false;
        this.player.destroy();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setSize(18, 10);
        this.player.setCollideWorldBounds(true);
        this.physics.add.overlap(this.player, this.nenufar, this.setWin, null, this);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM3, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM4, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM5, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM6, this.dead, null, this);
        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        this.win()
    }
    dead(player, nenufar) {
        this.player.destroy();
        this.player = this.physics.add.sprite(330, 668, 'frog').setScale(1.5);
        this.player.setSize(18, 10);
        this.player.setCollideWorldBounds(true);
        this.physics.add.overlap(this.player, this.lakeM, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM1, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM2, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM3, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM4, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM5, this.dead, null, this);
        this.physics.add.overlap(this.player, this.lakeM6, this.dead, null, this);
        this.physics.add.overlap(this.player, this.nenufar, this.setWin, null, this);
        this.lifePlayer = this.lifePlayer - 1;
        this.gameOver();
    }

    win() {
        if (this.score === 400) {
            this.physics.pause();
            this.scene.start('ganaste')
        }
    }
    gameOver() {
        if (this.lifePlayer == 2) {
            this.lifeText.setText('🐸🐸');
        }
        else if (this.lifePlayer == 1) {
            this.lifeText.setText('🐸');
        }
        else if (this.lifePlayer == 0) {
            this.lifeText.setText(' ');
            this.scene.start('derrota')
            this.lifePlayer= 3;
            this.lifeText.setText('🐸🐸🐸');
            this.score= 0;
            this.scoreText.setText('Score: '+this.score);
        }
    }

};
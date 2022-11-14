import Phaser from "phaser";
export default class LevelThree extends Phaser.Scene {
    constructor(config) {
        super('LevelThree')
        this.config = config
        this.player = null;
        this.cursors = null;
        this.pelota = null;
        this.barras = null;
        this.score = 0;
        this.scoreText = null;
        this.sonidoRebotePlayer = null;
        this.sonidoReboteBlock = null;
        this.velocidadInicialY = -300;
        this.velocidadInicialX = -72;
        this.barrasEliminadas = 0;
        this.particles = null
        this.emitter = null
    }
    create() {
        //colision entre paredes del canva 
        this.physics.world.setBoundsCollision(true, true, true, true);
        //Creacion del Background
        this.createBackground();
        //Creacion del player
        this.createPlayer();
        //Creacion de Ball
        this.createBall();
        //Creacion de Bloque
        this.createBlocks();
        //se crea el objeto cursors para determinar si una tecla es pulsada o no
        this.cursors = this.input.keyboard.createCursorKeys();
        //this.physics.add.collider(this.pelota, this.player, this.bar, null, this);
        this.scoreText = this.add.text(20, 30, 'Score: 0', { fontSize: '32px', fill: '#fff' });

    }
    update() {
        //movimiento del player segun se presione la tecla izquierda o derecha
        if (this.cursors.left.isDown && this.player.x >= 80) {
            this.player.setVelocityX(-500);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(-500);
            }
        }
        else if (this.cursors.right.isDown && this.player.x <= 555) {
            this.player.setVelocityX(500);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(500)
            }
        }
        else {
            this.player.setVelocityX(0);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(0);
            }
        }
        //Lanzamiento de pelota con la tecla 'Space'
        if (this.cursors.space.isDown && this.pelota.getData('startingPoint')) {
            this.pelota.setVelocity(this.velocidadInicialX, this.velocidadInicialY)
            this.pelota.setData('startingPoint', false)
            //Creacion de particulas
            this.createParticles();
        }

        //alerta de salida del canvas
        if (this.pelota.y > 615) {
            this.score = 0;
            this.scoreText.setText('Score: ' + this.score);
            this.pelota.disableBody(true, true); // la pelota al pasar el limite superior del canvas se elimina
            this.scene.start('GameOver')
            this.physics.pause();
            this.player.setTint(0xff0000);
        }
        if (this.pelota.y <= 45) {
            this.pelota.setVelocityY(this.velocidadInicialY * (-1))
        }
        if (this.pelota.x <= 30) {
            this.pelota.setVelocityX(this.velocidadInicialX * (-1))
        } else if (this.pelota.x >= 610) {
            this.pelota.setVelocityX(this.velocidadInicialX)
        }

    }
    createBackground() {
        this.add.image(990, -30, 'fondo').setScale(2.9);
    }
    createPlayer() {
        //se aÃ±ade fisica al player
        this.player = this.physics.add.image(300, 600, 'player').setImmovable().setScale(0.3);
        //se quita la gravedad al player
        this.player.body.allowGravity = false;
        //evita que el player atraviese el borde izquierdo y derecho
        this.player.setCollideWorldBounds(true);
    }
    createBall() {
        this.pelota = this.physics.add.image(300, 576, 'pelota').setScale(0.4);
        //se agrega el rebote de la pelota con los bordes
        this.pelota.setCollideWorldBounds(true);
        this.pelota.setBounce(1);
        this.pelota.setData('startingPoint', true);
        //se agrega la colision entre la pelota y el player
        this.physics.add.collider(this.pelota, this.player, this.collisionPlayer, null, this);
    }
    collisionPlayer(pelota, player) {
        this.createSoundP();
        //Incrementa la velocidad de la pelota despues de la colision
        this.pelota.setVelocityY(this.velocidadInicialY - 5);
        let newXVelocity = Math.abs(this.velocidadInicialX) + 5;
        // Setea la velocidad en X de la pelota con respecto al ejeX del player 
        if (this.pelota.x < this.player.x) {
            this.pelota.setVelocityX(-newXVelocity);
        } else {
            this.pelota.setVelocityX(newXVelocity);
        }
    }
    createBlocks() {
        this.barras = this.physics.add.staticGroup();
        let barraDistanciaHorizontal = 45;
        for (let i = 0; i < 2; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra');
            this.barras.create(barraDistanciaHorizontal, 205, 'barra');
            barraDistanciaHorizontal += 60;
        }

        for (let i = 0; i < 2; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 205, 'barra1');
            barraDistanciaHorizontal += 60;
        }

        for (let i = 0; i < 2; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra2');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra2');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra2');
            this.barras.create(barraDistanciaHorizontal, 205, 'barra2');
            barraDistanciaHorizontal += 60;
        }

        for (let i = 0; i < 2; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra1');
            this.barras.create(barraDistanciaHorizontal, 205, 'barra1');
            barraDistanciaHorizontal += 60;
        }

        for (let i = 0; i < 2; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra');
            this.barras.create(barraDistanciaHorizontal, 205, 'barra');
            barraDistanciaHorizontal += 60;
        }
        //se agrega la colision entre la pelota y las barras
        this.physics.add.collider(this.pelota, this.barras, this.collectBarra, null, this);
    }
    createParticles() {
        this.particles = this.add.particles('red');
        this.emitter = this.particles.createEmitter({
            speed: 10,
            scale: { start: 0.2, end: 0 },
            frequency: 10,
            blendMode: 'ADD'
        });
        this.emitter.startFollow(this.pelota);
    }
    createSoundB(){
        this.sonidoReboteBlock=this.sound.add('reboteB')
        this.sonidoReboteBlock.play({
            volume:0.3
        });
    }
    createSoundP(){
        this.sonidoRebotePlayer=this.sound.add('reboteP')
        this.sonidoRebotePlayer.play({
            volume:0.3
        });
    }

    //velocidadInicial = 50;
    collectBarra(pelota, barras) {
        this.createSoundB();
        barras.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
        if (this.score === 400) {
            this.scene.start('YouWon')
        }
    }
};
export class PlayScene extends Phaser.Scene {

    constructor(){
        super({key: 'PlayScene'});
    }

    preload() {
        this.player = this.physics.add.sprite(100, 450, 'character');
        this.player.setCollideWorldBounds(true);
    }

    create() {
        this.player.anims.play('idle', true);
    }

    update(){
        console.log('updated!');
    }
}
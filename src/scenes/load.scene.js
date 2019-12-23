export class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: "LoadScene" });
    }

    preload() {

        this.load.spritesheet("character", "src/assets/img/player.png", { frameWidth: 50, frameHeight: 37 });

    }

    create() {

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("character", { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

        this.scene.launch("PlayScene");
        this.scene.stop("LoadScene");
        this.scene.destroy("LoadScene");
    }
}

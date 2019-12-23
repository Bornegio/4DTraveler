import 'phaser';

import { PlayScene } from './scenes/play.scene';
import { LoadScene } from './scenes/load.scene';

const width = 800;
const height = 600;

const config = {
    width,
    height,
    type: Phaser.AUTO,
    scene: [
        LoadScene,
        PlayScene
    ],
    backgroundColor: '#1550A1',
    disableContextMenu: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{
                y: 300
            },
            debug: false
        }
    },
};

const game = new Phaser.Game(config);

console.log(game);

import { Level1 } from './scenes/Level1.js';
import { Death } from './scenes/Death.js';
import { Menu } from './scenes/Menu.js';
import { Win } from './scenes/Win.js';

const config = {
    type: Phaser.AUTO,
    title: 'Platform Jumper',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    physics:{
        default: 'arcade',
        arcade: {
            debug:false,
            gravity: { y: 800}
        }
    },
    pixelArt: true,
    scene: [
        Menu,
        Level1,
        Death,
        Win
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            
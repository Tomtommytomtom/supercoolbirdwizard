import { Game as MainGame } from './scenes/Game';
import { AUTO, Game, Physics, Scale,Types } from 'phaser';
import { Stats } from './scenes/Stats';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#7d7d7d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0, y: 300 },
            debug: false
        }
    },
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame,
        Stats,
    ]
};

export default new Game(config);

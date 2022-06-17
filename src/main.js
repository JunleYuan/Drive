let config = {
    type: Phaser.CANVAS,
    width: 1024,
    height: 768,
    fps: {
        target: 60
    },
    physics: {
        default: 'arcade',
    },
    scene: [ Loading, Car, Road, Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
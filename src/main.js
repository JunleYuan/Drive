let config = {
    type: Phaser.CANVAS,
    width: 1024,
    height: 768,
    fps: {
        target: 60
    },
    physics: {
        default: 'matter',
    },
    scene: [Dialogue, Loading, Car, Road, Menu, Play, Walkcar, Tray, Door]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
class Car extends Phaser.Scene {
    constructor() {
        super("car");
    }

    preload() {
        
    }

    create() {

        //this.topBoarder = this.add.image(0, 0, 'Wboarder').setOrigin(0, 0).setScale(1);

        this.botBoarder = this.add.image(0, 768, 'Wboarder').setOrigin(0, 1).setScale(1);

        this.car = this.add.image(0, 0, 'car').setOrigin(0, 0).setScale(1);

        
        this.scene.bringToTop('car');

        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {

        




    }
}
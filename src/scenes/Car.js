class Car extends Phaser.Scene {
    constructor() {
        super("car");
    }

    preload() {
        
    }

    create() {

        //this.topBoarder = this.add.image(0, 0, 'Wboarder').setOrigin(0, 0).setScale(1);

        this.botBoarder = this.add.image(0, 768, 'Wboarder').setOrigin(0, 1).setScale(1);
        this.scene.bringToTop('car');
    }

    update() {






    }
}
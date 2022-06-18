class Tray extends Phaser.Scene {
    constructor() {
        super("tray");
    }

    preload() {
        
    }

    create() {

        //mouse
        this.pointer = this.input.activePointer;

        this.background = this.add.image(0, -100, 'tray').setOrigin(0, 0).setScale(1);

        //this.background = this.add.image(0, -100, 'trayKey').setOrigin(0, 0).setScale(1);

        this.key = this.add.image(0, 0, 'key').setOrigin(0, 0).setScale(1.5).setInteractive();

        this.input.setDraggable(this.key);
        
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
        
    }

    update() {





    }
}
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

        this.key = this.add.image(0, 0, 'key').setOrigin(0, 0).setScale(1.5).setInteractive().setDepth(2);;

        this.input.setDraggable(this.key);
        
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });


        var zone = this.add.zone(580, 200, 700, 300).setRectangleDropZone(700, 300);

        //  Just a visual display of the drop zone
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {

            graphics.clear();
            graphics.lineStyle(2, 0x00ffff);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
    
        });
    
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
    
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
    
        });
    
        this.input.on('drop', this.setBack(this,this.key));
    }

    update() {





    }

    setBack(scene,key){

        return function() {
            scene.background.setTexture('trayKey');

            scene.key.visible = false;
        };


    }
}
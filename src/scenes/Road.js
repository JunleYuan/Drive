class Road extends Phaser.Scene {
    constructor() {
        super("road");
    }

    preload() {
        
    }

    create() {

        this.cam = this.cameras.main;

        this.cam.setBounds(0, 0, 1024*2, 768);

        this.camX = 0;
        this.camY = 0;

        this.road = this.add.image(0, 0, 'roadBackground').setOrigin(0, 0).setScale(4);

        //tem contols
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        this.text = this.add.text(32, 150).setScrollFactor(0).setFontSize(32).setColor('#ffffff');
    
    }

    update() {
        
        this.text.setText([
            'ScrollX: ' + this.cam.scrollX,
            'ScrollY: ' + this.cam.scrollY,
            'MidX: ' + this.cam.midPoint.x,
            'MidY: ' + this.cam.midPoint.y
        ]);
        

        if (this.keyLEFT.isDown){

            
            this.cam.scrollX -= 3;

        }
        else if (this.keyRIGHT.isDown){

            this.cam.scrollX += 3;
        }


    }
}
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

        //this.road = this.add.image(0, 0, 'roadBackground').setOrigin(0, 0).setScale(4);

        //tem contols
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        this.text = this.add.text(32, 150).setScrollFactor(0).setFontSize(32).setColor('#ffffff');

        // this.r1 = this.add.line(540, 300, 0, 0, 570, 400, 0x6666ff).setOrigin(0);
       
        // //this.r1.setLineWidth(20);

        // this.r1.lineWidth = 5;

        // this.r2 = this.add.line(510, 300, 0, 0, -1300, 400, 0x6666ff).setOrigin(0);
       
        // //this.r1.setLineWidth(20);

        // this.r2.lineWidth = 5;


        

        this.sideL1 = this.add.image(540, 320, 'sideline').setOrigin(.5, 0).setScale(1);

        this.sideL1.rotation = 1.3;


        this.sideL2 = this.add.image(540, 320, 'sideline').setOrigin(.5, 0).setScale(1);

        this.sideL2.rotation = -1.3;

        this.sideL3 = this.add.image(540, 320, 'sideline').setOrigin(.5, 0).setScale(.5,1);

        this.sideL3.rotation = 0;

    }

    update() {
        
        this.text.setText([
            'ScrollX: ' + this.cam.scrollX,
            'ScrollY: ' + this.cam.scrollY,
            'MidX: ' + this.cam.midPoint.x,
            'MidY: ' + this.cam.midPoint.y
        ]);
        
        //console.log(this.r1);

        

        if (this.keyLEFT.isDown && this.sideL1.rotation >1.18){

            // this.r1.geom.x2 -= 3;

            // this.r2.geom.x2 -= 3;
            //this.cam.scrollX -= 3;

            //console.log(this.sideL1.rotation);

            this.sideL1.rotation -= .001;
            this.sideL2.rotation -= .001;

            this.sideL3.rotation -= .01;

        }
        else if (this.keyRIGHT.isDown && this.sideL1.rotation < 1.40){

            //console.log(this.sideL1.rotation);

            // this.r1.geom.x2 += 3;
            
            // this.r2.geom.x2 += 3;
            //this.cam.scrollX += 3;

            this.sideL1.rotation += .001;
            this.sideL2.rotation += .001;

            this.sideL3.rotation += .01;
        }


    }
}
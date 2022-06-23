class Road extends Phaser.Scene {
    constructor() {
        super("road");
    }

    preload() {
        
    }

    create() {

       
        //tem contols
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        this.sideL1 = this.add.image(540, 320, 'sideline').setOrigin(.5, 0).setScale(1);

        this.sideL1.rotation = 1.3;


        this.sideL2 = this.add.image(542, 320, 'sideline').setOrigin(.5, 0).setScale(1);

        this.sideL2.rotation = -1.3;

        this.sideL3 = this.add.image(541, 320, 'sideline').setOrigin(.5, 0).setScale(.5,1);

        this.sideL3.rotation = 0;

    }

    update() {
        

        if (this.keyLEFT.isDown && this.sideL1.rotation >1.18){

           
            this.sideL1.rotation -= .001;
            this.sideL2.rotation -= .001;

            this.sideL3.rotation -= .01;

        }
        else if (this.keyRIGHT.isDown && this.sideL1.rotation < 1.40){

          
            this.sideL1.rotation += .001;
            this.sideL2.rotation += .001;

            this.sideL3.rotation += .01;
        }


    }
}
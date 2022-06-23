class Walkcar extends Phaser.Scene {
    constructor() {
        super("walkcar");
    }

    preload() {
        
    }

    create() {

        //mouse
        this.pointer = this.input.activePointer;

        this.background = this.add.image(0, 0, 'walkBackground').setOrigin(0, 0).setScale(1);


        this.guy = this.add.image(20, 400, 'walkGuy').setOrigin(0, 0).setScale(.7);

        this.tree = this.add.image(0, 0, 'tree').setOrigin(0, 0).setScale(1);


        

        this.car = this.add.image(600, 480, 'sidecar').setOrigin(0, 0).setScale(.6);
        
        

        
        
    }

    update() {


        if(this.pointer.isDown){

            if (this.pointer.leftButtonDown() && this.guy.x < 780 ){

                this.guy.x += 1;

            }


        }

        if (this.guy.x > 780){

            //next scene

        }



    }
}
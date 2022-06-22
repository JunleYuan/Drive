class Door extends Phaser.Scene {
    constructor() {
        super("door");
    }

    preload() {
        
    }

    create() {
        this.first_y = 0;

        this.firstclick = true;

        this.current_add = 50;

        this.doorcount = 2;

        this.door = this.add.image(0, 0, 'door1').setOrigin(0, 0).setScale(1);

        this.pointer = this.input.activePointer;

    
       

        
    }

    update() {


        if(this.pointer.isDown){

            if (this.pointer.leftButtonDown()){

                if(this.firstclick){
                    this.current_add = 20;
                    this.first_y = this.pointer.y
                    this.firstclick = false;
                    console.log(this.pointer.y);
                }
                


                if(this.first_y - this.pointer.y > this.current_add && this.doorcount < 12){

                    this.current_add += 20;

                    this.door.setTexture('door'+this.doorcount);
                    this.doorcount += 1;
                }
               

            }


        }else{
            this.firstclick = true;
            
        }

       



    }
}
class Loading extends Phaser.Scene {
    constructor() {
        super("loading");
    }

    

    preload() {
        //this.load.image('backgroundWS', './assets/back.png');
        
        let loadingBar = this.add.graphics({
            
            fillStyle: {
                color: 0xffffff //white
            }
            
        })
        this.loadWidth = 200;
        this.loadHeight = 50;

        // load images/tile sprites

        this.loadIMG();

        // load sound
        this.loadSound();

        
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(this.game.renderer.width/2 - this.loadWidth/2, this.game.renderer.height/2, this.loadWidth * percent, this.loadHeight);

        })

    }

    create() {
        
        
        //this.scene.start("road");
        //this.scene.launch("car");

        //this.scene.start("walkcar");

        //this.scene.start("tray");

        this.scene.start("door");

        this.scene.launch("car");

        //this.scene.start("total");
        
    }

    update(delta) {

    }

    loadIMG(){

        this.load.image('Wboarder', './assets/boarder.png');

        this.load.image('roadBackground', './assets/background.png');

        this.load.image('sidecar', './assets/car_side.png');

        this.load.image('walkBackground', './assets/walk_background.png');

        this.load.image('tree', './assets/walk_background_tree.png');

        this.load.image('walkGuy', './assets/walk_guy.png');

        this.load.image('trayKey', './assets/tray_key.png');

        this.load.image('tray', './assets/tray.png');

        this.load.image('key', './assets/key.png');


        for(let i = 1; i< 12;i++){

            this.load.image('door'+i, './assets/pxdoor'+ i +'.png');

        }
        

    }

    loadSound(){
        

    }

}
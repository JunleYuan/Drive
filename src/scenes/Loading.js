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
        
        
        this.scene.start("road");
        this.scene.launch("car");



        //this.scene.start("total");
        
    }

    update(delta) {

    }

    loadIMG(){

        this.load.image('Wboarder', './assets/boarder.png');

        this.load.image('roadBackground', './assets/background.png');

    }

    loadSound(){
        

    }

}
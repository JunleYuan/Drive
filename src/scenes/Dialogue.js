// READ WHAT THINGS DO
//      The script works in chains. If you don't call the display_Txt(text) function and
//      opt to call another in the script, it will break.
//      The function takes a single string arguement.
//
//      In the create() function, there is a debug section that's commented out.
//      Remove the comments to see the dialogue stuff run.
//      
//      Basically, just comment out 1 of the 2 functions in the bottom section
//      to see what the text behavior does.
//
//      The textbox is a placeholder. It is there so you can see the text,
//      do as you will for the background.
//
//      Lastly, this is a module script. There's nowhere to really store the text strings, so a
//      seperate js file for managing which strings are displayed might be neccesary.
//
//      WIP: Can take multiple requests and queue them automatically.
//

class Dialogue extends Phaser.Scene {
    constructor() {
        super("Scene_Dialogue");
    }

    preload() {
        this.load.image('textbox_BG', './assets/textbox_BG.png');
    }

    create() {
        // ===========================================
        // Technical Fields
        // ===========================================
        // Textbox Config - Dimensions, Position
        let tb_Config = {
            x: config.width / 2,
            y: config.height - 64 - 16,
            width: 992,
            height: 128,
        };
        // Text Config - Font, Etc
        let t_Config = {
            fontFamily: 'Comic Sans',
            fontSize: '25px',
            color: '#000000',
            align: 'center',
            padding: {
                top: 10,
                bottom: 10,
            },
            fixedWidth: 0
        };
        
        this.CHAR_DELAY = 0.1; // Seconds delay between chats for step display
        this.FADE_DELAY = 1.5; // Seconds delay for auto fading text
        this.FADE_DURATION = 1.0; // Seconds duration for fade transition
        
        this.locked = false; // Prevents multiple anims from playing at once

        // ===========================================
        // Generating Assets
        // ===========================================
        // Generating textbox_BG
        this.tb_BG = this.add.image(
            tb_Config.x, 
            tb_Config.y,
            'textbox_BG'
        ).setOrigin(0.5).setScale(1);
        
        // Generating textbox text
        this.tb_Text = this.add.text(
            tb_Config.x, 
            tb_Config.y,
            'This is but a mere placeholder text.\nYou see nothing.',
            t_Config
        ).setOrigin(0.5).setScale(1);
    
            
        // ===========================================
        // Debugging
        // ===========================================
        // let scene = this;
        // setTimeout(function () { // Delays the call to fade out text    
        //     scene.display_Txt('So this is how it is\ngoing to be...');
        // }, 2000);
    }

    // ===========================================
    // 'Privateer' Functions
    // ===========================================
    // Generates Dialogue Letter by Letter
    txt_steps(text) {
        this.txt_steps_rec(text, 0); //Initiates Recursive Chain
    }
    // Recursive helper for step display
    txt_steps_rec(text, step) {
        let scene = this; // For delaying scope
        if(step >= text.length) { // Exit Condition
            setTimeout(function () { // Delays the call to fade out text
                scene.txt_fadeOut();
            }, this.FADE_DELAY * 1000);

        } else {
            let offset = 1;
            // Checking for \n
            if((/\\/).test(text.charAt(step))) {
                offset += 2; // \n should ALWAYS be followed by a char
            }
            this.tb_Text.text = text.substring(0, step+1);

            // Moving on
            setTimeout(function () {
                scene.txt_steps_rec(text, step + offset);
            }, this.CHAR_DELAY * 1000);

        }

    }

    // Fades in entire dialogue
    txt_fadeIn(text) {
        console.log('Txt fade in called');
        let scene = this; // Scope assistance
        this.tb_Text.alpha = 0;
        this.tb_Text.text = text;
        this.add.tween({
            targets: this.tb_Text,
            ease: 'linear',
            duration: this.FADE_DURATION * 1000,
            delay: 0,
            alpha: {
                getStart: () => 0,
                getEnd: () => 1
            }
        });
        setTimeout(function () { // Delays the call to fade out text
            scene.txt_fadeOut();
        }, this.FADE_DELAY * 2000); //2k due to 2 fades
    }

    // Fades out entire dialogue
    txt_fadeOut() {
        console.log('Txt fade out called');
        let scene = this; // scope assistance
        this.add.tween({
            targets: this.tb_Text,
            ease: 'linear',
            duration: this.FADE_DURATION * 1000,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            }
        });
        setTimeout(function () { // Delays the call to fade out text
            scene.locked = false;
        }, this.FADE_DELAY * 2000); //2k due to 2 fades
    }

    // ===========================================
    // PUBLIC FUNCTIONS
    // ===========================================
    // CALL THIS ONE
    display_Txt(text) {
        this.locked = true;
        this.txt_steps(text);
        //this.txt_fadeIn(text);
    }
}
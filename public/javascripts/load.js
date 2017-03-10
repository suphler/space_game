/**
 * Created by suphler on 21.02.17.
 */
var field = [];
var spotList = [];
var currentSelected={};
var secondSelected={};
var  emptySet=[];


var loadState = {

    preload: function () {


// Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.width / 2, 150,
            'loading...', {font: '30px Arial', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5, 0.5);
// Display the progress bar
        var progressBar = game.add.sprite(game.width / 2, 200,
            'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
// Load all our assets

        spotList[0] = game.load.image('bg', 'images/assets/bg/bg.jpg');
        spotList[1] = game.load.spritesheet('cannon', 'images/assets/sprites/explosion_sprite.png',64,64);
        spotList[2] = game.load.image('point', 'images/assets/sprites/01.png');

        //sounds

        game.load.audio('background', 'images/assets/sounds/background.ogg');
        game.load.audio('boomSound','images/assets/sounds/explosion_3.ogg');

    },
    create: function () {
// Go to the menu state
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.state.start('menu');
    }
};

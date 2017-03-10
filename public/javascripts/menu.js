/**
 * Created by suphler on 21.02.17.
 */
var menuState = {
    create: function() {

        game.add.image(0, 0, 'bg');

        var nameLabel = game.add.text(game.width/3, 10,'Press Up to  start', { font: '50px Arial', fill: '#ffffff' });

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.start();/////del to  menu


        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.add(this.start, this);
        var tween = game.add.tween(nameLabel);
        tween.to({y:280},500).easing(Phaser.Easing.Bounce.Out);
        tween.start();
    },
    start: function() {

        console.log("UP key  is  fire");
        game.state.start('main');
    }
};


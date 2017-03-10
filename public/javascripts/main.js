/**
 * Created by suphler on 27.02.17.
 */
/**
 * Created by suphler on 18.02.17.
 */

var mainState = {
        preload: function () {


        },

        create: function () {


            this.cannonX = game.width;
            this.cannonY = 0;
            game.add.sprite(0, 0, 'bg');
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.music = game.add.audio('background');
            this.music.loop = false;
            // this.music.fadeOut(0.3);
            // this.music.fadeIn(0.3);
            this.music.volume = 0.5;
            this.music.play();
            //boomSoumd
            this.boomSound = game.add.audio('boomSound');


            // this.buildCannon();
            this.cannon = game.add.sprite(this.cannonX, this.cannonY / 2, 'cannon');
            this.cannon.animations.add('fly', [0], 8, true);
            this.cannon.animations.add('boom', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, true);
            this.cannon.animations.play('fly', 5, true);

            this.cannon.anchor.setTo(0.5, 0.5);
            game.physics.arcade.enable(this.cannon);


            this.cannon.body.velocity.x = -50;
            this.cannon.body.velocity.y = 50;
            // this.cannon.reset();
            game.time.events.loop(10000, this.timerToBorn, this);

            //create point  sprite
                this.point = game.add.sprite(game.rnd.integerInRange(1, game.width / 2), game.rnd.integerInRange(1, game.height / 2), 'point');
            this.point.anchor.setTo(0.5, 0.5);
            this.point.scale.setTo(0.2, 0.2);
            game.physics.arcade.enable(this.point);


            this.point.scale.setTo(0.2, 0.2);
            // this.shit = game.add.

        },

        update: function () {

            // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.physics.arcade.moveToXY(this.cannon, this.point.x, this.point.y, 200);
            game.physics.arcade.overlap(this.cannon, this.point, this.exploseCannon, null, this);


        },

    timerToBorn:function () {
        setTimeout(this.buildCannon(),3000);
    },
        buildCannon: function () {

            if (!this.cannon.alive) {
                this.cannon.reset(this.cannonX, this.cannonY / 2);
                this.point.reset(game.rnd.integerInRange(1, game.width / 2), game.rnd.integerInRange(1, game.height / 2));
                // this.cannon.animations.stop();
                this.cannon.frame = 0;
                this.music.play();



            };

        },
        exploseCannon: function () {
            console.log("Boom!");
            this.music.pause();
            this.boomSound.play();
            game.camera.flash(0xffffff,300);
            game.camera.shake(0.02, 300);
            this.cannon.animations.play('boom', 50, false,true);
            this.cannon.animations.killOnComplete=true;
            // this.cannon.kill();
            setTimeout(this.killCannon(), 3000);
        },
        killCannon: function () {
            // this.point.kill();
            // this.cannon.kill();
            // this.animations.frame(0);
        }

    }
    ;


var game = new Phaser.Game(1131, 707, Phaser.AUTO, "", 'gameDiv');
game.global = {
    score: 0
};
game.state.add('main', mainState);
game.state.add('menu', menuState);
// game.state.add('result', resultState);

game.state.add('boot', bootState);
game.state.add('load', loadState);
// game.state.add('menu', menuState);

game.state.start('boot');
// game.state.start('main');





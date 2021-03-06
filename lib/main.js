enchant();

window.onload = function() {
  var core = new Core(320, 320);
  core.preload(['img/chara7.png', 'img/chara2.png', 'img/icon0.png', 'img/monster4.gif', 'img/effect0.png', 'img/clear.png', 'img/map2.png', 'img/bigmonster1.gif', 'sound/bgm.wav', 'sound/bomb.mp3', 'sound/bigbomb.mp3', 'img/gameover.png', 'img/monster3.gif', 'sound/gameclear.wav', 'sound/gameover.wav', 'img/logo.gif']);
  core.fps = 10;
  core.onload = function() {
  var bgm = core.assets['sound/bgm.wav'].clone();
  var soundBomb = core.assets['bomb.mp3'];
  var soundBigBomb = core.assets['bigbomb.mp3'];
  var soundGameOver = core.assets['gameover.wav']
  var soundGameClear = core.assets['gameclear.wav']
  var labelAgain = new Label('もう一度プレイ！');
  labelAgain.x = 110;
  labelAgain.y = 200;
  labelAgain.color = 'green';
  labelAgain.addEventListener('touchend', function() {
    location.reload();
  })
  var labelStart = new Label('PRESS RETURN TO START!!');
  labelStart.x = 70;
  labelStart.y = 150;
  labelStart.color = 'green';
  var gameStartScene = new Scene();
  gameStartScene.addChild(labelStart);
  logo = new Sprite(273, 106);
  logo.x = 30;
  logo.y = 20;
  logo.image = core.assets['logo.gif'];
  gameStartScene.addChild(logo);
  gameStartScene.image = core.assets['logo.gif'];
  bgm.play();
  core.pushScene(gameStartScene);
  var labelRetry = new Label('リトライ！');
  labelRetry.x = 130;
  labelRetry.y = 220;
  labelRetry.color = 'blue';
  labelRetry.addEventListener('touchend', function() {
    location.reload();
  })
  gameOverScene = new Scene();
  gameOverScene.backgroundColor = 'black';
  var gameover = new Sprite(189, 97);
  gameover.image = core.assets['gameover.png'];
  gameover.x = 60;
  gameover.y = 100;
  gameOverScene.addChild(gameover);
  gameOverScene.addChild(labelRetry);
  var clear = new Sprite(267, 48);
  clear.image = core.assets['clear.png'];
  clear.x = 30;
  clear.y = 130;
  gameClearScene = new Scene();
  gameClearScene.addChild(labelAgain);
  gameClearScene.addChild(clear);

  document.onkeydown = function(e) {
    if (e.keyCode == 13 && core.currentScene == gameStartScene) core.pushScene(core.rootScene);
  }
  var map = new Map(16, 16);
  map.image = core.assets['map2.png'];
  var mapData = [
            [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ],
            [ 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19 ],
            [ 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19 ],
            [ 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19 ],
            [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ],
            [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ],
            [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
            [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
            [ 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ]
        ];
    map.loadData(mapData);
    core.rootScene.addChild(map);

    var Player = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.frame = 60;
        this.image = core.assets['chara7.png'];

        core.rootScene.addChild(this);
      },

      onenterframe: function() {
        if (core.input.right) {
          this.x += 5;
        }
        if (core.input.left) {
          this.frame += 5
          this.x -= 5;
        }
        for (i = 0; i < enemies.length; i++) {
          if (enemies[i].presence == true && this.intersect(enemies[i])) this.die();
        }
        var self = this;
        document.onkeydown = function(e) {
          if (e.keyCode == 65) {
            self.throwBomb(1);
          }
          if (e.keyCode == 81) {
            self.throwBomb('up');
          }
          if (e.keyCode == 88) {
            self.throwBomb(3);
          }
          if (e.keyCode == 83) {
            self.throwBigBomb(1);
          }
          if (e.keyCode == 67) {
            self.throwBigBomb(3);
          }
        };

      },

      throwBomb: function(power) {
        if (power == 'up') {
          this.tl.cue({
            0: function() { bomb = new Bomb(this.x+3, this.y-30); },
            2: function() { bomb.tl.moveTo(this.x, this.y - 100, 3); },
            3: function() { bomb.tl.moveTo(this.x, this.y - 150, 2); },
            4: function() { bomb.tl.moveTo(this.x, this.y-50, 3); },
            4: function() { bomb.tl.moveTo(this.x, this.y+20, 1); }
          })
        } else {
          this.tl.cue({
            0: function() { bomb = new Bomb(this.x+3, this.y); },
            2: function() { bomb.tl.moveTo(this.x + 30 * power, this.y - 15 * power, 2); },
            3: function() { bomb.tl.moveTo(this.x + 50 * power, this.y - 5 * power, 1); },
            4: function() { bomb.tl.moveTo(this.x + 60 * power, this.y + 15, 0.1); }
          })
        }
      },

      throwBigBomb: function(power) {
        this.tl.cue({
          0: function() { bomb = new BigBomb(this.x+3, this.y); },
          2: function() { bomb.tl.moveTo(this.x + 30 * power, this.y - 15 * power, 2); },
          3: function() { bomb.tl.moveTo(this.x + 50 * power, this.y - 5 * power, 1); },
          4: function() { bomb.tl.moveTo(this.x + 60 * power, this.y + 15, 0.1); }
        })
      },

      die: function() {
        bgm.stop();
        soundGameOver.play();
        core.pushScene(gameOverScene);
        core.stop;
      }
    });

    // 敵機
    var Enemy = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.frame = 18;
        this.image = core.assets['chara2.png'];
        this.life = 1;
        this.presence = true;

        core.rootScene.addChild(this);
      },

      onenterframe: function() {
        if (this.frame = 3) this.frame = 0;
        this.frame ++;
        this.x -= 2;
      },

      damage: function(power) {
        this.life -= power;
        if (this.presence == true && this.life <= 0) this.die();
      },

      die: function() {
        this.tl.removeFromScene();
        this.presence = false;
      }
    });

    var FlyEnemy = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 48, 48);
        this.x = x;
        this.y = y;
        this.frame = 2;
        this.image = core.assets['monster3.gif'];
        this.life = 1;
        this.presence = true;

        core.rootScene.addChild(this);
        this.tl.moveBy(30, 30, 20)
          .moveBy(-30, 30, 10)
          .loop();
      },

      onenterframe: function() {
        // if (this.frame = 3) this.frame = 0;
        // this.frame ++;
        // this.x -= 4;
      },

      damage: function(power) {
        this.life -= power;
        if (this.presence == true && this.life <= 0) this.die();
      },

      die: function() {
        this.tl.removeFromScene();
        this.presence = false;
      }
    });

    // 敵大
    var Boss = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 80, 80);
        this.x = x;
        this.y = y;
        this.frame = 2;
        this.image = core.assets['bigmonster1.gif'];
        this.life = 20;
        this.presence = true;
        this.scale(1.3, 1.3);

        core.rootScene.addChild(this);
        this.tl.moveBy(20, 20, 5)
          .moveBy(-20, -20, 5)
          .loop();
      },

      onenterframe: function() {
        if (this.frame = 10) this.frame = 2;
        this.frame ++;
        this.x -= 6;
      },

      damage: function(power) {
        this.life -= power;
        var frame = this.frame;
        this.frame = 7;
        setTimeout(function(){ this.frame = frame; }, 1000);
        if (this.presence == true && this.life <= 0) this.die();
      },

      die: function() {
        this.frame = 1
        setTimeout(function(){ this.frame = 0; }, 1000);
        this.tl.removeFromScene();
        this.presence = false;
      }
    });

    // 爆弾
    var Bomb = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 16, 16);
        this.x = x;
        this.y = y;
        this.frame = 24;
        this.image = core.assets['icon0.png'];
        this.presence = true;

        core.rootScene.addChild(this);
      },

      onenterframe: function() {
        if (this.y >= 240) {
          this.explode();
        }
        for (i = 0; i < enemies.length; i++) {
          if (this.presence == true && enemies[i].presence == true && this.intersect(enemies[i])) {
            this.explode();
            enemies[i].damage(1);
          }
        }
      },

      explode: function() {
        this.image = core.assets['effect0.png'];
        this.tl.cue({
          0: function() { for (i=0; i<4; i++) this.frame = i; soundBomb.play();},
          3: function() { core.rootScene.removeChild(this); this.presence = false;}
        })
      }

    });

    // 大爆弾
    var BigBomb = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 16, 16);
        this.x = x;
        this.y = y;
        this.frame = 24;
        this.image = core.assets['icon0.png'];
        this.presence = true;
        this.scale(3, 3);

        core.rootScene.addChild(this);
      },

      onenterframe: function() {
        var self = this;
        if (this.y >= 226) {
          setTimeout(function(){self.explode();}, 3000);
        }
      },

      explode: function() {
        this.image = core.assets['effect0.png'];
        soundBigBomb.play();
        this.scale(2.5, 2.5);
        this.tl.cue({
          0: function() {
            for (i=0; i<4; i++) {
              this.frame = i;
              for (i = 0; i < enemies.length; i++) {
                if (this.presence == true && enemies[i].presence == true && this.within(enemies[i], 90)) {
                  enemies[i].damage(3);
                }
                if (this.presence == true && this.within(player, 120)) {
                  player.die();
                }
              }
            }
          },
          3: function() { core.rootScene.removeChild(this); this.presence = false; this.image = core.assets['icon0.png'];}
        })
      }

    });

    var Goal = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 16, 16);
        this.x = x;
        this.y = y;
        this.frame = 31;
        this.image = core.assets['icon0.png'];
        this.scale(3, 4);

        core.rootScene.addChild(this);
      },

      onenterframe: function() {
        if (this.intersect(player)) this.gameClear();
      },

      gameClear: function() {
        bgm.stop();
        soundGameClear.play();
        core.pushScene(gameClearScene);
        core.stop;
      }

    });

    // var player = new Player(10, 229);
    var player = new Player(10, 129);
    var goal = new Goal(280, 220);
    var enemies = [];
    for (i = 0; i < 50; i++) {
      enemies.push(new Enemy(200+(30*i), 224));
    }
    for (i = 0; i < 5; i++) {
      enemies.push(new FlyEnemy(rand(300), 0));
    }
    enemies.push(new Boss(400, 150));
    setInterval(function(){
    for (i = 0; i < 50; i++) {
      enemies.push(new Enemy(400+(30*i), 224));
    }
    for (i = 0; i < 5; i++) {
      enemies.push(new FlyEnemy(rand(300), 0));
    }
    enemies.push(new Boss(400, 150));
    }, 10000);
  }
  core.start();
};

function rand(n) {
  return Math.floor(Math.random() * (n+1));
}

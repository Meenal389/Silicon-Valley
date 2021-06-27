const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
var ground, base, baseI;
var myworld;
var myEngine;
var duck, duck1, flying, starfish, monkey, octopus;
var duckImage, flyingI, starfishI, monkeyI, octopusI, sharkI, mantaI;
var sea, river, jungle, intro, darksea;
var seaI, riverI, jungleI, introI, darkseaI;
var tree, mango, coin;
var treeI, mangoI, coinI;
var animal, a1I, a2I;
var sadmonkey, hangingMonkey;
var sadmonkeyI, hangingMonkeyI;
var intro, introi, invisible;
var obstacle, obstacleGroup, coin, coinGroup, animalGroup;
var intro1, intro2, intro3, lost, win, story;
var intro1I, intro2I, intro3I, lostI, winI, storyI;
var check, die, lostbm, welcome, monkeybm, starfishbm, duckbm, winbm;
var form, reset;
var edges;
var life = 5;
var life2 = 5;
var chance = 6;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var gameState = "1";

function preload() {

  duckImage = loadAnimation('images/duck.png')
  a1I = loadImage('images/snake.png')
  a2I = loadImage('images/croc.png')
  flying = loadAnimation('images/flying.png')
  starfishI = loadImage('images/starfish.png');
  monkeyI = loadImage('images/monkey.png');
  sharkI = loadImage('images/shark.png');
  mantaI = loadImage('images/manta.png');
  seaI = loadImage('images/starfishbg.jpg');
  riverI = loadImage('images/duckbg.jpg');
  jungleI = loadImage('images/monkeybg.jpg');
  introi = loadImage('images/intro.jpeg');
  treeI = loadImage('images/tree.png');
  mangoI = loadImage('images/mango.png');
  coinI = loadImage('images/coin.png');
  sadmonkeyI = loadImage('images/sadMonkey.png');
  hangingMonkeyI = loadImage('images/hangingmonk.png');
  intro1I = loadImage("images/level1.jpg");
  intro2I = loadImage("images/level2.jpg");
  intro3I = loadImage("images/level3.jpg");
  lostI = loadImage("images/lose.jpg");
  winI = loadImage("images/win.jpg");
  storyI = loadImage("images/welcome.jpg");
  check = loadSound("music/Checkpoint.mp3")
  die = loadSound("music/Die.flac")
  lostbm = loadSound("music/Lost.wav")
  welcome = loadSound("music/Intro.wav")
  monkeybm = loadSound("music/Monkey.wav")
  starfishbm = loadSound("music/Starfish.mp3")
  winbm = loadSound("music/Win.mp3")
  duckbm = loadSound("music/Duck.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  form = new Form()
  reset = new Form2()

  //physics engine world
  engine = Engine.create();
  world = engine.world;

  //intros
  intro1 = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro1.addImage(intro1I)
  intro1.visible = false;
  intro1.scale = 1;
  intro1.scale = 0.5;

  intro2 = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro2.addImage(intro2I)
  intro2.visible = false;
  intro2.scale = 1;
  intro2.scale = 0.25;

  intro3 = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  intro3.addImage(intro3I)
  intro3.visible = false;
  intro3.scale = 1;
  intro3.scale = 1;

  lost = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  lost.addImage(lostI)
  lost.visible = false;
  lost.scale = 1;
  lost.scale = 0.25;

  win = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  win.addImage(winI)
  win.visible = false;
  win.scale = 1;
  win.scale = 0.25;

  story = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  story.addImage(storyI)
  story.visible = false;
  story.scale = 0.25;

  //level1(starfish)

  sea = createSprite(displayWidth / 2, displayHeight / 2 - 200, 100, 100)
  sea.addImage(seaI)
  sea.visible = false;
  sea.scale = 1;

  starfish = createSprite(displayWidth / 2, displayHeight / 2, 100, 100)
  starfish.addImage(starfishI)
  starfish.visible = false;
  starfish.scale = 0.18;

  //level2(frog)
  river = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  river.addImage(riverI)
  river.visible = false;
  river.scale = 0.8

  invisible = createSprite(displayWidth / 2, displayHeight / 2 + 150, displayWidth, 20)
  invisible.visible = false;

  duck = createSprite(displayWidth / 2 - 400, displayHeight / 2, 100, 100)
  duck.addAnimation("duck1", duckImage)
  duck.addAnimation("flyingI", flying)
  duck.visible = false;
  duck.scale = 0.25

  //groups
  obstacleGroup = new Group()
  coinGroup = new Group()
  enemyGroup = new Group()
  //thank you and reset

  //level3(monkey)
  jungle = createSprite(displayWidth / 2, displayHeight / 2 - 50, 100, 100)
  jungle.addImage(jungleI)
  jungle.visible = false;
  //jungle.scale = 2.4

  tree = createSprite(displayWidth / 2 + 300, displayHeight / 2 - 30, 450, 450)
  tree.addImage(treeI)
  tree.visible = false;
  tree.scale = 0.7
  m1 = new Mango(displayWidth / 2 + 200, displayHeight / 2 - 200, 30, 50)
  m2 = new Mango(displayWidth / 2 + 300, displayHeight / 2 - 250, 30, 50)
  m3 = new Mango(displayWidth / 2 + 400, displayHeight / 2 - 200, 30, 50)
  m4 = new Mango(displayWidth / 2 + 130, displayHeight / 2 - 90, 30, 50)
  m5 = new Mango(displayWidth / 2 + 300, displayHeight / 2 - 80, 30, 50)
  m6 = new Mango(displayWidth / 2 + 470, displayHeight / 2 - 70, 30, 50)
  ground = new Ground(displayWidth / 2, displayHeight / 2 + 350, displayWidth, 2)
  monkey = new Monkey(10, 10, 100, 200)
  string = new String(monkey.body, { x: 350, y: 250 })
  Engine.run(engine);
  welcome.loop()
}

function draw() {
  background(introi);
  drawSprites();

  if (gameState === "1") {
    form.display()
    reset.display()
    intro3.visible = false;
  }

  //---------------------------------------------------------------------------------------

  if (gameState === "story") {
    clear()
    background(seaI)
    story.visible = true;
    if (keyDown("Space")) {
      gameState = "level1intro"
    }
    reset.display()
    drawSprites()
  }

  if (gameState === "level1intro") {
    clear()
    background(seaI)
    story.visible = false;
    intro1.visible = true;
    if (keyDown("Enter")) {
      gameState = "level1"
      welcome.stop()
      starfishbm.loop()
    }
    reset.display()
    drawSprites()
  }

  //level1
  if (gameState === "level1") {
    clear()
    intro1.visible = false;
    sea.visible = true;
    starfish.visible = true;
    spawnObstacles()
    reset.display()
    drawSprites()

    //life and score display
    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score1, 50, 80)
    text("LIFE LEFT: " + life, 50, 50)
    spawnObstacles()
    spawncoins()
    ground.display()


    //sea movement
    sea.velocityX=-2;

    if(sea.x<displayWidth/2-750){
      sea.x=displayWidth/2+500
    }

    //movement of starfish
    if (keyDown('UP_ARROW')) {
      starfish.y -= 5;
    }

    if (keyDown('DOWN_ARROW')) {
      starfish.y += 5;
    }

    if (keyDown('LEFT_ARROw')) {
      starfish.x -= 5
    }

    if (keyDown('RIGHT_ARROw')) {
      starfish.x += 5
    }

    //rules
    if (starfish.isTouching(obstacleGroup)) {
      life -= 1
    }

    for (var i = 0; i < coinGroup.length; i++) {
      if (coinGroup.get(i).isTouching(starfish)) {
        coinGroup.get(i).destroy()
        score1 = score1 + 1
      }
    }

    for (var i = 0; i < obstacleGroup.length; i++) {
      if (obstacleGroup.get(i).isTouching(starfish)) {
        obstacleGroup.get(i).destroy()
        life = life - 1
        die.play()
      }
    }

    //changing to level2
    if (gameState === "level1" && score1 === 100) {
      clear()
      gameState = "level2intro"

    }

    if (life <= 0) {
      gameState = "lose";
      die.stop()
      lostbm.play()
    }

  }

  if (gameState === "level2intro") {
    clear()
    reset.display()
    sea.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    background(riverI)
    intro2.visible = true;
    if (keyDown("Enter")) {
      gameState = "level2"
      welcome.stop()
      starfishbm.stop()
      duckbm.loop()
    }

    // duckbm.play()
    drawSprites()
  }

  //-----------------------------------------------------------------------------------------------------

  if (gameState === "level2") {
    //removing level1
    intro2.visible = false;
    if (duck.velocityY > 0) {
      duck.changeAnimation("duck1");
    }
    sea.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    reset.display()
    //viewing level2
    drawSprites()
    river.visible = true;
    duck.visible = true;
    spawnEnemies()
    duck.collide(invisible)
    ground.display()


    //making the duck jump
    if (keyDown('UP_ARROW') && duck.y <= 469) {
      duck.velocityY = -10;
      duck.changeAnimation("flyingI");
      duck.scale = 0.35;
      duck.setCollider("rectangle", 0, 0, 500, 500);
    }

    //gravity for duck
    duck.velocityY += 0.9;

    river.velocityX=-2;

    if(river.x<displayWidth/2-350){
      river.x=displayWidth/2
    }
    //score
    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score2, 50, 80)
    text("LIFE LEFT: " + life2, 50, 50)
    spawnObstacles()
    spawncoins()

    //score system
    score2 = score2 + Math.round(getFrameRate() / 60);

    if (score2 % 100 === 0) {
      check.play()
    }

    //destroying the enemy+life 
    for (var i = 0; i < enemyGroup.length; i++) {
      if (enemyGroup.get(i).isTouching(duck)) {
        enemyGroup.get(i).destroy()
        life2 = life2 - 1
        die.play()
      }
    }

    if (life2 <= 0) {
      gameState === "lose"
      lostbm.play()
    }

    if (score2 === 500) {
      gameState = "level3intro";
    }


  }

  if (gameState === "level3intro") {
    clear()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible = false;
    reset.display()
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    background(jungleI)
    intro3.visible = true;
    if (keyDown("Enter")) {
      gameState = "level3"
      welcome.stop()
      duckbm.stop()
      monkeybm.loop()
    }
    drawSprites()
  }

  //-----------------------------------------------------------------------------------------

  //level3

  if (gameState === "level3") {
    clear()
    background(jungleI)
    drawSprites();
    reset.display()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible = false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    tree.visible = true;
    monkey.display()
    m1.display()
    m2.display()
    m3.display()
    m4.display()
    m5.display()
    m6.display()
    string.display()

    fill("Black")
    textSize(26)
    textFont("Times New Roman")
    textStyle("Bold")
    text("SCORE: " + score3, 50, 80)
    text("CHANCES LEFT: " + chance, 50, 50)

    detectCollision(monkey, m1)
    detectCollision(monkey, m2)
    detectCollision(monkey, m3)
    detectCollision(monkey, m4)
    detectCollision(monkey, m5)
    detectCollision(monkey, m6)

    if (chance === 0) {
      gameState = "lose"
    }

    if (score3 >= 3) {
      console.log("score>3");
      gameState = "win"
      winbm.play()
      tree.visible = false;
      welcome.stop()
      monkeybm.stop()
    }

  }

  if (gameState === "win") {
    sea.visible = false;
    story.visible = false;
    reset.display()
    intro1.visible = true;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible = false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    background("black")
    winbm.visible = true;
    win.play()
    drawSprites()
  }

  if (gameState === "lose") {
    clear()
    sea.visible = false;
    story.visible = false;
    intro1.visible = true;
    reset.display()
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    starfish.visible = false;
    obstacleGroup.destroyEach()
    coinGroup.destroyEach()
    intro3.visible = false;
    river.visible = false;
    duck.visible = false;
    enemyGroup.destroyEach()
    background("black")
    welcome.stop()
    monkeybm.stop()
    duckbm.stop()
    starfishbm.stop()
    lost.visible = true;
    drawSprites()
  }
}

function spawnObstacles() {
  if (frameCount % 150 === 0) {
    obstacle = createSprite(0, random(100, 200), 20, 20)
    obstacle.lifetime = 1000
    var ran = Math.round(random(1, 2))
    switch (ran) {
      case 1: obstacle.addImage(sharkI)
        obstacle.y = random(100, displayHeight - 100);
        obstacle.scale = 0.35
        obstacle.velocityX = random(4, 10)
        //obstacle.setCollider("rectangle",0,0,50,200);
        break;

      case 2: obstacle.addImage(mantaI)
        obstacle.scale = 0.35
        obstacle.x = displayWidth + 100
        obstacle.y = random(100, displayHeight - 100);
        obstacle.velocityX -= random(4, 10)
        break;
      default: break;

    }
    obstacleGroup.add(obstacle)
  }
}

function spawncoins() {
  if (frameCount % 20 === 0) {
    coin = createSprite(displayWidth + 100, (random(100, 600)), 200, 100)
    coin.addImage(coinI);
    coin.scale = 0.05;
    coin.velocityX -= 2;
    coin.lifetime = 1000;
    // coin.debug=true;
    coinGroup.add(coin);

  }
}

function spawnEnemies() {
  if (frameCount % 200 === 0) {
    enemy = createSprite(displayWidth + 100, displayHeight / 2 + 120, 20, 20)
    enemy.lifetime = 1000
    enemy.velocityX -= random(4, 10)
    var ran = Math.round(random(1, 2))
    switch (ran) {
      case 1: enemy.addImage(a2I)
        break;

      case 2: enemy.addImage(a1I)
        enemy.scale = 0.4
        break;
      default: break;

    }
    enemyGroup.add(enemy)
  }
}

function mouseDragged() {
  Matter.Body.setPosition(monkey.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  string.fly();
  chance -= 1;
}

function detectCollision(monkey, m) {
  var distance = dist(monkey.body.position.x, monkey.body.position.y, m.body.position.x, m.body.position.y)
  if (distance <= monkey.width + m.width) {
    Matter.Body.setStatic(m.body, false);
    score3 = score3 + 1;
  }
}


function keyPressed() {
  if (keyCode === 32) {
    string.attach(monkey.body);
  }
}
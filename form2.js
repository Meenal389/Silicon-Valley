class Form2 {
    constructor() {
        this.button = createButton("RESTART")
    }
    display() {

        this.button.position(displayWidth - 250, displayHeight / 2 - 370)
        this.button.style('width', '200px');
        this.button.style('height', '47px');
        this.button.style('background', 'yellow');
        this.button.style('font-size', '20px')


        this.button.mousePressed(() => {
            gameState = "1";
            clear()
            starfish.x=displayWidth / 2
            starfish.y= displayHeight / 2
            duck.x=displayWidth / 2 - 400
            duck.y= displayHeight / 2
            welcome.loop()
            duckbm.stop()
            starfishbm.stop()
            monkeybm.stop()
            winbm.stop()
            lostbm.stop()
            life = 5;
            life2 = 5;
            chance = 6;
            score1 = 0;
            score2 = 0;
            score3 = 0;
            sea.visible = false;
            story.visible = false;
            intro1.visible = false;
            obstacleGroup.destroyEach()
            coinGroup.destroyEach()
            starfish.visible = false;
            obstacleGroup.destroyEach()
            coinGroup.destroyEach()
            intro3.visible = false;
            lost.visible = false;
            river.visible = false;
            duck.visible = false;
            enemyGroup.destroyEach()
        })

    }

}
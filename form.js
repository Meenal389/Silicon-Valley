class Form{
    constructor(){
        this.title=createElement('h1')
        this.button=createButton("PLAY")
    }
        display(){
   
            this.title.html("Happy Birthday Martha!")
            this.title.position(displayWidth/2-350,displayHeight/3)
            this.title.style('font-size', '70px');
            this.title.style('color', 'black');
            this.button.position(displayWidth/2-100,displayHeight/2+50)
            this.button.style('width', '200px');
            this.button.style('height', '47px');
            this.button.style('background', 'lightpink');
            this.button.style('font-size','20px')

            if(gameState=="1"){
                this.button.show();
                this.title.show();
            }
   
            this.button.mousePressed(()=>{
                gameState="story"
                this.button.hide()
                this.title.hide()
            })
        }
   
   }
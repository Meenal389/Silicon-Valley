class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:1
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;       
        this.image=loadImage("images/mango.png")                                                    
     World.add(world,this.body);
   }

   display(){
       fill("white");
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y)
       imageMode(CENTER)
       image(this.image,0,0,this.width,this.height)
       pop()
   }
}
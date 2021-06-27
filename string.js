class String{
  constructor(b1,pointB){

  var options={
      bodyA:b1,
      pointB:pointB,
      length:50,
      stiffness:0.04
  }
  this.bodyA=b1;
  this.pointB=pointB;
  this.string=constraint.create(options);
  World.add(world,this.string);
  }

  attach(body){
    this.string.bodyA=body;
  }

  fly(){
    this.string.bodyA=null;
  }

  display(){
    if(this.string.bodyA){
      var posA=this.string.bodyA.position;
      var posB=this.pointB;
      push()
      strokeWeight(2)
      stroke("green")
      line(posA.x,posA.y,posB.x,posB.y);
      pop()
    }
  }
}
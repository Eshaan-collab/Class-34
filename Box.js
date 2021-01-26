class Box {
  constructor(x,y){
    var option={
      restitution:0.3,
      friction:1,
      density:0.05
    }
    this.body=Bodies.rectangle(x,y,70,70,option);
    World.add(world,this.body);
  } 
  display(){
    push();
    rotate(this.body.angle);
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    rect(0,0,70,70);
    pop();
  }
}

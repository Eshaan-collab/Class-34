class Ball {
    constructor(x,y){
      var option={
        restitution:0.3,
        density:1,
        frictionAir:0.05
      }
      this.body=Bodies.circle(x,y,80,option);
      World.add(world,this.body);
    } 
    display(){
      push();
      rotate(this.body.angle);
      translate(this.body.position.x,this.body.position.y);
      ellipseMode(RADIUS);
      ellipse(0,0,80,80);
      pop();
    }
  }
  
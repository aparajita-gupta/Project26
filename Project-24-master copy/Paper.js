class Paper {
    constructor(){
      var options = {
        isStatic: false,  
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      }
      this.image = loadImage("sprites/paperImg.png");
      this.body = Bodies.circle(70,670,70,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("pink");
      ellipse(this.image, 0, 0, 70, 70);
      pop();
    }
  }
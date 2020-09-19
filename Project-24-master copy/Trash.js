class Trash {
    constructor(x,y,width,height){
      var options = {
        isStatic: true,  
        restitution:0.3,
        friction: 0.5,
        density: 1.2
      }
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/trashImg.png");
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      
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
      stroke("red");
      fill("black")
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
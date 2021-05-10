class Ball {
   constructor(x,y,radius) {

    var options = {
    isStatic:false,

    'restitution':0.4,
    'friction':5.5,
    'density':1.5

    }
  
    this.x = x;
    this.y = y;
    this.radius = radius
    this.image = loadImage("paper.png")
    this.body = Bodies.circle(this.x,this.y,this.radius-70/2,options);
   
  
   World.add(world,this.body);
}
 display(){
   
     fill("white");
     image(this.image,this.body.position.x,this.body.position.y,50,50);
 }



}


































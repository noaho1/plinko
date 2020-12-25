class Ball {
constructor(x,y,radius,color,isStatic){

var options = {
'restitution': 1.0,
'friction': 0.9,
'density': 0.5

}

this.body = Matter.Bodies.circle(x,y,radius,options);
this.radius = radius;
this.color = color;
this.isStatic = isStatic;

World.add(world, this.body);
}
display(){
var pos = this.body.position
console.log("hi");
push();
translate(pos.x,pos.y);
Matter.Body.setStatic(this.body, this.isStatic);
//ellipseMode(RADIUS);
fill (this.color);
ellipse(pos.x,pos.y,this.radius,this.radius);
pop();
}

}
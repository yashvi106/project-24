class Paper
{
constructor(x,y,r)
{
var options = {
restitution:0.3,
friction :0,
density:1.2,
isStatic:false
}
this.body = Bodies.circle(x,y,r-20,options)
World.add(world,this.body)
this.r = r
this.image = loadImage("paper.png")
}
display()
{
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipseMode(RADIUS)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)

pop()
}
}
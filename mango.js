class Mango{
    constructor(x, y, r) {

var opt={

  isStatic:true,
  restitution:0,
  friction:1,

}
        this.body = Bodies.circle(x,y,r,opt);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70)
      }
}
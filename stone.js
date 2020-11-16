class Stone{
    constructor(x, y,r) {

var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2

}
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x, y,r,options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);

      }
      display(){

        var paperpos=this.body.position;
        push();
        rotate(this.body.angle);
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70)
        pop();

      }
}
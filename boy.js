class Boy{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,230,510,300,300)
      }
}
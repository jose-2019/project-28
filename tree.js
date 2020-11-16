class Tree{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, 1000, 350, this.width, this.height);
      }
}
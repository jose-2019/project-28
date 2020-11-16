class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 0.1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    fly(){
        this.sling.bodyA=null;
     }

     attach(object1){

this.sling.bodyA=object1;

     }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
        }


    }
}
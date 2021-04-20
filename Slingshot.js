class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //slingshot images
        image(this.image1,200,70,40,150);
        image(this.image2,172,74,40,80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke("rgb(48,22,8)");
            //bird is on the left of the catapult
            if(pointA.x<220){
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+20);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y+15);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);

            }else{
                line(pointA.x+25, pointA.y, pointB.x-20, pointB.y+20);
                line(pointA.x+25, pointA.y, pointB.x+25, pointB.y+15);
                image(this.image3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();

        }
    }
    
}
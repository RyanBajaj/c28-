class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    this.sling = Constraint.create(options);
    this.pointb=pointB
        World.add(world, this.sling);
    }
    fly()
    {
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointb.x, this.pointb.y);
    }
}
    
}
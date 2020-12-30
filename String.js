class string{
    constructor(bodyA, pointB){
        var options = { 
            bodyA: bodyA, 
            pointB: pointB, 
            stiffness: 0.04, 
            length: 1 } 
        
        this.pointB = pointB
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(body){
        this.shot.bodyA = body;
    }
    
    fly(){
        this.shot.bodyA = null;
    }

    display(){
        
        if(this.shot.bodyA){
            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8)
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            
            
            pop();
        }
    }
    
}
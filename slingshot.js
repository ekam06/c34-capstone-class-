class Sling{

    constructor(bodyA,pointB){
    
    var a={
    bodyA:bodyA,
    pointB:pointB,
    length:20,
    stiffness:0.03
    
    
    }
    this.pointB=pointB
    this.c=Constraint.create(a)
    World.add(world,this.c)
    }
    
    display(){
    if(this.c.bodyA){
    var pointA=this.c.bodyA.position
    var pointB=this.pointB
    
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
    }
    
class Rubber{
    constructor(x,y,width){
    var options={
        'restitution':0.9,
        'friction':5,
        'density':1
    };

    this.body=Bodies.circle(x,y,width,options);
    World.add(world,this.body);

    this.width=width;
}

display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    stroke('black');
    fill('purple'); 
    ellipse(0,0,this.width);
    pop();
}
}
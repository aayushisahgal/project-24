class Sand{
    constructor(x,y,width){
    var options={
        'restitution':1.3,
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
    fill('pink'); 
    ellipse(0,0,this.width);
    pop();
}
}
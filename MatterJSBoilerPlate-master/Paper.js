class Paper {
    constructor(x,y,radius  ){
        var optopns = {
            isStatic: false,
            'restitution' :0.3,
            'friction' :0.5,
            'density' :1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.radius = radius

    World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");


        circle(this.body.position.x, this.body.position.y,this.radius);
    }
    };

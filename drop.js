class drop{
    constructor(x,y){
        var options = {
            restitution : 0.1, friction : 0.01

        }
        this.rain = Matter.Bodies.circle(x,y,5,options);
        Matter.World.add(world, this.rain);
    }
    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, 5);
    }
    updateY(){if(this.rain.position.y > 400){
        Matter.Body.setPosition(this.rain, {
            x: random(0,400), y: random(0,400)
        })
    }
    }
}
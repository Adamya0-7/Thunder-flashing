class umbrella{
    constructor(x,y){
        var options = {
            restitution : 0.1, friction : 0.01, isStatic: true

        }
        this.rain = Matter.Bodies.rectangle(x,y,50,50,options);
        Matter.World.add(world, this.rain);
        this.image = loadImage("walking_1.png");
    }
    display(){
        fill("blue");
        imageMode(CENTER);
        image(this.image,this.rain.position.x, this.rain.position.y,200, 200);
    }
}
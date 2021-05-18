var drops = [];

function preload(){
    thunder1image = loadImage("1.png");
    thunder2image = loadImage("2.png");
    thunder3image = loadImage("3.png");
    thunder4image = loadImage("4.png");
    
    
}

function setup(){
   createCanvas(400,400);
   engine = Matter.Engine.create();
   world = engine.world;

   thunder = createSprite(200,50);
   thunder.addImage(thunder1image);

   umbrella1 = new umbrella(200, 300);
   for(var i=0; i<100; i++){
       drops.push(new drop(random(0,400), random(0,400)));
    
}
}
function draw(){
    background("black");
    if(World.frameCount % 50 == 0){
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1 : 
            thunder.addImage(thunder1image);
            break
            case 2 :
                thunder.addImage(thunder2image);
                break
                case 3 : thunder.addImage(thunder3image);
                break
                case 4 : thunder.addImage(thunder4image);
                break  
                default:break;
            }
    }
    Matter.Engine.update(engine);
    umbrella1.display();
    for(var i = 0; i<drops.length; i++){
        drops[i].display();
        drops[i].updateY();
    }
    drawSprites();
}   


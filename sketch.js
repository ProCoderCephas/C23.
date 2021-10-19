//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var myengine,myworld;
var ground, ball;
var box1, box2;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
ground = new Ground(400,400,800,20);

    // Code for red box
  
    box1 = new Box(200,300,200,50)

    // Code for green box
    
    box2 = new Box(500,200,160,50);

    // Code for ball
    var ball_options ={
        isStatic: false,
        restitution: 1
    }

    ball = Bodies.circle(620,100,20, ball_options);
    World.add(myworld,ball);
    

    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
   
    ground.display();
    
    fill("green")
    box1.display();
   
    fill("blue")
    box2.display(); 
    
    fill("magenta")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}

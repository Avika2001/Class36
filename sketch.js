
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var GameState = 0;
var PlayerCount;
var form, player, game;
var database;


function setup() {
	createCanvas(800, 700);

	database=firebase.database();
	game=new Game();
	game.getState();
	game.start();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
}




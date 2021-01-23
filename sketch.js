var player;
var snake, snakeGroup;
var ladder, ladderGroup;

function preload(){

}

function setup(){
    createCanvas(1000,1000);
    player = createSprite(20,980,20,20);
    player.shapeColor="white";

    snakeGroup = new Group();
    ladderGroup = new Group();
}

function draw(){
    background("black");

    fill("yellow");
    text("START",20,995);
    text("END",975,20);

    drawBox();

    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5;
    }
    if(keyDown(UP_ARROW)){
        player.y = player.y-5;
    }
    spawnSnake();
    spawnladder();

    //build the score
    //end the game

    if (snakeGroup.isTouching(player)){
        //Group.setLifetimeEach(-1);
        //cloudsGroup.setLifetimeEach(-1);

         end();
        
    }
    if (player.y===0 && player.x===975){
        fill("yellow");
        text("You have won",500,500);
        end();
    }


    drawSprites();
}
function drawBox(){
    stroke("white");
    for(var i = 0; i<1000; i=i+100){
    line(i,0,i,1000);
    }
    for(var i = 0; i<1000; i=i+100){
        line(0,i,1000,i);
        }
}
function spawnSnake(){
    if(frameCount%30===0){
    snake = createSprite(500,500,200,10);
    snake.x=Math.round(random(0,1000));
    snake.y=Math.round(random(0,1000));
    snake.shapeColor="green";
    snake.velocityX = 3;
    snake.lifeTime = 333;
    snakeGroup.add(snake);
    }
}
function spawnladder(){
    if(frameCount%200===0){
    ladder = createSprite(200,200,20,200);
    ladder.x=Math.round(random(200,800));
    ladder.y=Math.round(random(200,800));
    ladder.shapeColor="brown";
    ladder.velocityX = 3;
    ladder.velocityY = -3;
    ladder.lifeTime = 5;
    ladderGroup.add(ladder);
    }
}
function end(){
    snakesGroup.setVelocityXEach(0);

    ladderGroup.setVelocityXEach(0);
    ladderGroup.setVelocityYEach(0);
    fill("yellow");
    text("Game is over",500,500);
}
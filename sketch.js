var canvas,backgroundImage;
var gameState = "start";
var form,player;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    form = new Form();
}

function draw(){
   background("white");
   form.display();
}
var PLAY=1;
var END=0;
var gamestate=PLAY;


var bluestoneimg,blackstoneimg,greenstoneimg,tanjiroimg,gameoverimg,tan;
var bluestonegroup,blackstonegroup,greenstonegroup;

function preload(){
 bluestoneimg = loadImage("Images/bluestoneimg.png")
 //blackstoneimg = loadImage("images/image-removebg-preview(2).png")
 //greenstoneimg = loadImage("images/image-removebg-preview(3).png")
// tanjiroimg= loadImage("images/tanjiro.png.png")
 //gameoverimg = loadImage("images/image-removebg-preview.png")

}

function setup() {
 createCanvas(900,800)
tan = createSprite(70,580,20,20)
tan.addImage(bluestoneimg)
tan.scale=0.08

bluestonegroup=new Group();
blackstonegroup=new Group();
greenstonegroup=new Group();


}

function draw() {
background("white")

if(gamestate===PLAY){
    background(0);
 //tan.x = World.mouseX;
}

 edges= createEdgeSprites();
  //tan.collide(edges);
 drawSprites() ;
}
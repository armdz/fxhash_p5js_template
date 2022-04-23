var DEFAULT_SIZE = 1080
var WIDTH;
var HEIGHT;
var DIM;
let ctx;

var currentPalette = null;
var saveFrame = false;

fxAddPalette("Test 1",['#32213A','#D6E3F8','#FEF5EF']);
fxAddPalette("Test 2",['#FFF','#0000FF']);
currentPalette=fxRandomPalette();
var shapeName = randomFrom(["Circle","Square","Triangle"]);
var shapeScale = randomd(0.3,0.7);   //  uses  fxrandom,check utils

var features = window.$fxhashFeatures = {
  "Palette":currentPalette.name,
  "Shape":shapeName
}

function setup() { 
    WIDTH = min(window.innerWidth,window.innerHeight);
    WIDTH*=1.0;
    HEIGHT = WIDTH;
    DIM = Math.min(WIDTH, HEIGHT);
    GSCALE = DIM / DEFAULT_SIZE;
    createCanvas(WIDTH,HEIGHT);
    ctx = drawingContext;
    smooth();
    noLoop();
}

function    draw()
{
    background(currentPalette.get());
    var lWidth = width*shapeScale;  //try to work with canvas size
    push();
    translate(width*.5,height/2);
    drawShadow(ctx,lWidth*.25,color(0),randomd(-lWidth*.4,lWidth*.4),randomd(-lWidth*.4,lWidth*.4));
    noStroke();
    fill(currentPalette.get());
    if(shapeName == "Circle")
    {
        circle(0,0,lWidth);
    }else if(shapeName == "Square")
    {
        rect(-lWidth*.5,-lWidth*.5,lWidth,lWidth);
    }else if(shapeName == "Triangle")
    {
        rotate(radians(randomAngleLock(90)));
        translate(-lWidth*.5,-lWidth*.5);
        triangle(0,0,lWidth,lWidth,0,lWidth);
    }
    pop();
    if(saveFrame)
    {
        saveFrame=false;
        save("out_"+width.toString()+"_"+height.toString()+".png")
    }
}


function    setAlpha(_color,_alpha)
{
    return color(red(_color),green(_color),blue(_color),_alpha);
}

function changeB(col,b)
{
  _col = lerpColor(col,color(0),b);
  return _col;
}
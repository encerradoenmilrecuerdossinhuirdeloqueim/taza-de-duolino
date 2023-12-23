
var detector= "";
var status= "";
var objects= [];
function preload()
{
    img=loadImage("miedo.jpg");
}

function setup()
{

    canvas=createCanvas(1500, 700);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", nombre);
    document.getElementById("status").innerHTML="archivo";
} 
function nombre()
{
  console.log("arsivo");
  status=true;
}
function ultfunción(error, results)
{
if (error){
  console.error(error);
}   
else {
console.log(results);
objects=results;
}
}
function draw()
{
image(img, 0, 0, 1500, 700);
if (status!="") 
  { 
  objectDetector.detect(img, ultfunción);
  for (var ol=0; ol<objects.length; ol++)
  {
    fill("red");
    var porcent=floor(objects[ol].confidence * 100);
    text (objects[ol].label+" "+porcent+"%",objects[ol].x+10,objects[ol].y+15);
    noFill(); stroke(255, 0, 0); rect(objects[ol].x, objects[ol].y, objects[ol].width, objects[ol].height);
  }
}
}


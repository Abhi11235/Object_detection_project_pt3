img="";
Status="";
objects=  [];

function preload(){
img=loadImage("Flower_Vase.jpg");
}


function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML= "status: Detecting Objects"; 
}



function modelLoaded() {
    console.log("Model Loaded!");
     Status=true;
     objectDetector.detect(video, gotResults);
}



function gotResults(error,results){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw() {
    image(video,0,0,380,380);
    fill("yellow");
    text("Flower Vase",45,75);
    noFill();
    stroke("yellow");
    rect(30,60,450,350);

    
   
    
    
    if(Status !="")
    {
        objectDetector.detect(video, gotResults);
        r= random(255);
       g= random(255);
        b=random(255);
    for (i=0; i < objects.legnth; i++)
    {
        document.getElementById("status").innerHTML = "Status: Object detected";
        document.getElementById("Number of Objects").innerHTML = "Number of objects detected are:"
        +objects.length;
    }

   
}
}



    
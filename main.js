var noseX=0;
var noseY=0;

function preload(){
    mostache=loadImage('https://i.postimg.cc/BnR0mMdY/m.png');
}
function setup(){
    canvas=createCanvas(600,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,550);
    image(mostache,noseX-80,noseY+30,125,75);
}
function take_snapshot(){
    setTimeout(function(){
        for(var i=0;i<5;i++){
            var name="My Image "+i+".PNG";
            save(name);
            console.log("Image Taken, Name: "+name);
        }
    });
}
function modelLoaded(){
    console.log("PoseNet model has been loaded!!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }  
}
lipstick_x="";
lipstick_y="";

function preload(){
    lipstick=loadImage("lipstick.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modalloaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);

    image(lipstick,lipstick_x,lipstick_y,120,120);
}

function take_snapshot(){
    save("my_picture.png");
}

function modalloaded(){
    console.log("Modal is loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);

        lipstick_x=results[0].pose.nose.x-190;
        lipstick_y=results[0].pose.nose.y-60;
    }
}
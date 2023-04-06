user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "! " +"     "  +  "    THIS APP IS FONT MANIPULATOR APP        "  + "           (also click to go back)"  ;


function d(){
    window.location = "hi.html";
}

function note(){
window.alert("Get Your Left And Right Wrist Closer To Each other To Reduce The Font size And To Increase The Font Size Keep Your Left And Right Wrist Far From Each Other.");
}

    function setup(){
        video = createCapture(VIDEO);
        video.size(400,400);
        video.position(10,90);
    
        canvas = createCanvas(600,380);
        canvas.position(680,130);
    
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
    }




function draw(){
    document.getElementById("square_side").innerHTML = "Font-size of the Text will be = " + difference + " px";


    background("#9996e3");
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text('EKAM', 50, 400);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

difference = 0;
rightWristX = 0;
leftWristX = 0;




function gotPoses(results){
    if(results.length > 0){
        console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference)

    }
}


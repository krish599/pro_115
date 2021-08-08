mustache_X=0;
mustache_Y=0;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(200 , 170);
  video = createCapture(VIDEO);
  video.size(200 , 170);
  video.hide();
  
  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
  console.log('PoseNet is stared')
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    mustache_X = results[0].pose.nose.x+35;
    mustache_Y = results[0].pose.nose.y+90;
    
  }
}
function take_snapshot(){
  save('Mustache_image.png')
}

  function preload(){
   mustache = loadImage('https://i.postimg.cc/g0n8ht7t/mustache-1.png');
}
function draw() {
  image(video, 0 , 0 , 300 , 300 );
image(mustache, mustache_X , mustache_Y , 30 , 30);
}
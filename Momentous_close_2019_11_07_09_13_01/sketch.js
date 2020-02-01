function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);
}
function draw() {
	ellipse(250, 50, 100, 100);
  	line(250, 100, 250, 300);
line(250, 300, 350, 400);
  line(250, 300, 150, 400)
  if(frameCount%2 == 0) {
		//left hand
		line(250, 150, 150, 50);
		//right hand
		line(250, 150, 350, 250);
	
		}
	else {
		//left hand
		line(250, 150, 150, 250);
		//right hand
		line(250, 150, 350, 50);
		}
}
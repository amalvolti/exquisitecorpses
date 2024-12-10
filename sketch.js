function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  rotateY(frameCount * 0.01);

  noStroke();
  fill('white');
  triangle(30, 75, 58, 20, 86, 75);
  circle(200,200,30);
  square(100,200,30)
  square(200,200,30)
  square(300,200,30)


  fill(255,150,0);
  ellipse(200,100,150,100);

  //draw lines, 50px apart

  stroke(10)
 line(10,0,10,400);
 line(60,0,60,400);
 line(110,0,110,400);



}


let weight = 10;
let squares_x = [275, 275, 300, 300, 325, 325, 350, 350];
let squares_y = [5, 30, 5, 30, 5, 30, 5, 30];
let d1 = 0;
let d2 = 0;
let dS = 0;
let color1 = ["red", "blue", "orange", "indigo", "yellow", "purple", "green", "black"];
let color = 0;
let boolean, i = 1;
let word; //for the special effect word draw
let button, input;

function setup() {
  createCanvas(400, 400);
  background(255);
  input = createInput () //This is the part of the program that takes the user's input to be used for the "draw words" function of the program
  input.position(180, 20) //where the box to type the word will appear
  input.size(50)
  button = createButton ('S') //clicking this button sets the program into draw mode
  button.position(240,20)
  button.mousePressed (draw1)
}

function draw1() {
  word = input.value() //button
  i=i*-1
}

function draw() {
  noStroke();
  //control area
  fill(200, 170, 200);
  rect(0, 0, 400, 55);
  
  //draw area
  d1 = dist(20, 15, mouseX, mouseY); //keeps track of the user's distance from the circle buttons
  d2 = dist(20, 40, mouseX, mouseY);
  dS = dist(250, 25, mouseX, mouseY);
  
  fill("black");
  ellipse(20, 15, 20, 20); // d1 //circle buttons add subtract pen weight
  ellipse(20, 40, 20, 20); // d2
  
  textSize(13) //text weight text for user
  text(weight, 35, 15);
  text ("Hold SHIFT to erase", 35, 35) 
  text ("Alt key: Clear   R key: Reset brush size", 35, 50);
  
  stroke("white"); //button design + -
  strokeWeight(3);
  line(15, 15, 25, 15);
  line(20, 10, 20, 20);
  line(15, 40, 25, 40);


  for (x = 0; x < 8; x++) { // color box- this does not change the color of the brush for user
    noStroke(); 
    fill(color1[x]);
    rect(squares_x[x], squares_y[x], 20, 20);

    if (mouseIsPressed && mouseY > 50) { //so u dont draw in the control area
      if (keyIsPressed && keyCode === SHIFT) { //for erasing
        stroke(255);
        } 
        
      else {
        stroke(color);
        }

      if(i==1){ //for the brush 
        strokeWeight(weight);
        line(mouseX, mouseY, pmouseX, pmouseY);
        }

      if (i == -1 && frameCount%10 == 0){
        strokeWeight(1)
        fill(color)
        textSize(weight)
        text(word,mouseX,mouseY)
        }
    }
  
  } //ends for loop
}

function keyPressed() { 
  if (keyCode === 18 && i == 1) {
    //clear canvas when alt key is pressed
    //67=c 18=alt
    background(255);
  }
  
  if (keyCode === 82 && i == 1) {
    //reset brush size when r key is pressed
    //82=r
    weight = 10;
  }
}

function mouseClicked() {
  //circle increase button
  if (d1 < 10) {
    weight = weight + 1;
  }
  
  if (d2 < 10 && weight > 1) {
    //circle decrease button
    weight = weight - 1;
  }
  
  for (x = 0; x <= 8; x++) { //what makes the color change
    if ( mouseX >= squares_x[x] && mouseX <= squares_x[x] + 20 && mouseY >= squares_y[x] && mouseY <= squares_y[x] + 20) {
      color = color1[x]; 
      }
    }  
}

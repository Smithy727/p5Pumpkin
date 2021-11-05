/* ---- Drawing a 2D pumpkin exercise ---

Complete my drawing so that it looks like a Halloween pumpkin:

1. Add another central orange circle on top of the existing one, using the same lighting technique as for the main one - to create that "pumpkin" shape.

2. Add the right eye, and the right yellow iris. 

3. Add a green stem at the top, using the same light/dark overlapping colour for a nice effect. 

Keep these values dynamic. Consider the ordering of the shapes. Explore how the size variables affect other components. 

*/

//Global Variables
var pumpkinX,pumpkinY,pumpkinHeight,pumpkinWidth,pEyeSize,pIrisSize;

function setup() {
  createCanvas(600, 600);
  
  //initialising variables that affect all of the drawn shapes
  //x,y poisition:
  pumpkinX= width/2;
  pumpkinY= height/2;
  
  //height and width of circles
  pumpkinWidth=180;
  pumpkinHeight=pumpkinWidth-60;
  
  //variables that affect eye size 
  pEyeSize= pumpkinHeight-80;
  pIrisSize= pEyeSize-30;
}

function draw() {
    
    background(215);


    //PUMPKIN
  
    //Create a stem with dark and light overlapping shapes
    fill(0,65,0);
    triangle(pumpkinX-15, pumpkinY-80, pumpkinX, pumpkinY-40, pumpkinX+15, pumpkinY-80);

    //inner stem
    fill(0,100,0);
    triangle(pumpkinX-12, pumpkinY-77, pumpkinX, pumpkinY-55, pumpkinX+12, pumpkinY-77);
  
    //back ellipse dark orange
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);
    
    //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
  
    //Create another dark orange middle ellipse to make it look more pumpkin-y

     //back ellipse dark orange inner
     noStroke();
     fill(180, 52, 37);
     ellipse(pumpkinX,pumpkinY,pumpkinWidth-45,pumpkinHeight+10);
     
     //back ellipse light inner
     noStroke();
     fill(240, 90, 40);
     ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-55,pumpkinHeight);


    //Create another light orange middle ellipse to make it look more pumpkin-y

  
    //nose
	fill(150,25,0);
  	triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);
  
    //left eye - add a right eye here
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);

  
    //eye pupils - add a left pupil here
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);

        //Right eye - 
	noStroke();
    fill(0, 0, 0);
    ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);

  
    //Right eye pupils 
	noStroke();
    fill(248, 239, 47);
    ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);



  
    
}
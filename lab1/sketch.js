/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 145, 230); //fill the sky blue

	noStroke();
	fill(255, 211, 115);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	ellipse(210, 135,75,75);
    ellipse(245, 105,65,65);
    ellipse(250, 150,60,60);
    ellipse(280, 140,50,50);
    ellipse(300, 130,60,40);
    ellipse(280, 120,50,50);
    

	//2. a mountain in the distance
	//... add your code here

    strokeWeight(2);
	stroke(191, 113, 48);
	fill(255, 190, 115);
    rect(450, 391, 200, 40);
    rect(475, 351, 150, 40);
    rect(500, 311, 100, 40);
    rect(525, 271, 50, 40);

	//3. a tree
	//... add your code here

	stroke(24, 138, 0);
	fill(61, 160, 40);
    rect(900, 351, 20, 80);
    arc(910, 352,20,30, PI, TWO_PI);
    stroke(0);
    line(900,411,895,411);
    line(900,391,895,391);
    line(900,371,895,371);
    line(900,351,895,351);
    line(920,401,925,401);
    line(920,381,925,381);
    line(920,361,925,361);
    line(920,421,925,421);
    
	
	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
    fill(191, 127, 48);
    rect(149, 432, 92, 120);
    fill(149, 149, 149)
    stroke(100);
    triangle(151,551,179,551,165,523)
    triangle(181,551,209,551,195,523)
    triangle(211,551,239,551,225,523)

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	stroke(166, 111, 0);
	fill(255, 235, 20);
    ellipse(195,350,25,35);
    ellipse(550,210,25,35);
    ellipse(910,280,25,35);
    fill(235, 195, 0);
    ellipse(195,350,12,20);
    ellipse(550,210,12,20);
    ellipse(910,280,12,20);
    
    noStroke();  
    fill(255, 235, 20);
    ellipse(1024,0,120,120);
    stroke(255, 235, 20);
    line(1024,0,924,100);
    line(1024,0,974,130);
    line(1024,0,894,50);
    
}

let p;
let speed;
let range;
let path1;
let path2;
let x1;
let x2;
let y1;
let y2;
let rand1;
let rand2;

function setup() 
{    
     p=1;
     createCanvas(800,800);
     rand1 = random([-1,1]);
     rand2 = random([-1,1]);
     speed=2;
     range=100;
     path1=random(-range,range);
     path2=random(-range,range);
     x1 = width*1/2+path1;
     x2 = width*1/2+path2;
     y1 = height*1/4;
     y2 = height*3/4;
}

function draw()
{
     background(155,200,200);
     if (path2<range && -range<path2)
     {
          path2=path2+rand2*speed;
          if(rand2<0)
          {
               nloLeft();
          }
          else
          {
               nloRight();
          }
          x2=x2+rand2*speed;
     }
     else
     {
          rand2=-rand2;
          path2=path2+rand2*speed;
          if(rand2<0)
          {
               nloLeft();
          }
          else
          {
               nloRight();
          }
     }
     if (path1<range && -range<path1)
     {
          path1=path1+rand1*speed;
          coin();
          x1=x1+rand1*speed;
     }
     else
     {
          rand1=-rand1;
          path1=path1+rand1*speed;
          coin();
     }  
}

function coin() //монетка
{
     stroke(166, 111, 0);
     fill('#FFEB14');
     ellipse(x1,y1,25,35);
     fill('#EBC300');
     ellipse(x1,y1,12,20); 
}

function nloLeft() //нло движется влево
{
     strokeWeight(p);
     background(155,200,200);
     stroke(20,140,10);
     fill(70,220,50);
     quad(x2-5*p,y2,x2+5*p,y2,x2+15*p,y2+35*p,x2-15*p,y2+35*p);
     stroke(0);
     fill(150);
     ellipse(x2,y2,50*p,25*p);
     fill(200,200,230);
     arc(x2, y2,20*p,30*p, PI, TWO_PI);
     arc(x2, y2,20*p,10*p, TWO_PI, PI);
     noStroke();
     fill(255);
     ellipse(x2+4*p,y2-7*p,3*p,5*p);
     stroke(0);
     line(x2,y2-15*p,x2+7*p,y2-30*p);
     fill(250,250,120);
     circle(x2+7*p,y2-30*p,5*p);
}

function nloRight() //нло движется вправо
{
     strokeWeight(p);
     background(155,200,200);
     stroke(20,140,10);
     fill(70,220,50);
     quad(x2-5*p,y2,x2+5*p,y2,x2+15*p,y2+35*p,x2-15*p,y2+35*p);
     stroke(0);
     fill(150);
     ellipse(x2,y2,50*p,25*p);
     fill(200,200,230);
     arc(x2, y2,20*p,30*p, PI, TWO_PI);
     arc(x2, y2,20*p,10*p, TWO_PI, PI);
     noStroke();
     fill(255);
     ellipse(x2-4*p,y2-7*p,3*p,5*p);
     stroke(0);
     line(x2,y2-15*p,x2-7*p,y2-30*p);
     fill(250,250,120);
     circle(x2-7*p,y2-30*p,5*p);
}
let color='#964b00';
let k=2;
let eye=2*k;
let x;
let y;
let xSpecial;

let telo=
{
    height: 30*k,
    width: 100*k
};

let golova=
{
    height: 18*k,
    width: 30*k
};

let noga=
{
    height: 35*k,
    width: 10*k
};

let hvost=
{
    height: 25*k,
    width: 7*k
};


function setup() 
{
    createCanvas(400*k,400*k);
    x = width*1/2 - (telo.height*1/2);
    y = height*1/2 - (telo.height*1/2);
    xSpecial = x+telo.height-telo.width;
}

function draw()
{
    background(155,200,200);

    //Прыжок влево
    if (keyIsDown(87) === true &&
        keyIsDown(65) === true &&
        keyIsDown(68) === false){
    fill(color);
    rect(x,
         y,
         telo.width,
         telo.height); //тело
    rect((x-noga.height+noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //передняя нога
    rect((x+telo.width-noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //задняя нога
    rect((x-(golova.width*2/3)),
         (y-golova.height),
         golova.width,
         golova.height); //голова
    triangle((x+(golova.width*1/3)),
             (y-golova.height),
             (x+(golova.width*1/6)),
             (y-golova.height),
             (x+(golova.width*2/9)),
             (y-(golova.height)/2)); //ухо
    rect((x+telo.width),
         y,
         hvost.height,
         hvost.width); //хвост
    fill(0);
    ellipse(x,
            (y-(golova.height*3/4)),
            eye,
            eye);} //глаз
    
    //Прыжок вправо
    else if (keyIsDown(68) === true &&
             keyIsDown(87) === true &&
             keyIsDown(65) === false){
    fill(color);
    rect(xSpecial,
         y,
         telo.width,
         telo.height); //тело
    rect((xSpecial-noga.height+noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //задняя нога
    rect((xSpecial+telo.width-noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //передняя нога
    rect((xSpecial+telo.width-(golova.width*1/3)),
         (y-golova.height),
         golova.width,
         golova.height); //голова
    triangle((xSpecial+telo.width-(golova.width*1/3)),
             (y-golova.height),
             (xSpecial+telo.width-(golova.width*1/6)),
             (y-golova.height),
             (xSpecial+telo.width-(golova.width*2/9)),
             (y-(golova.height)/2)); //ухо
    rect((xSpecial-hvost.height),
         y,
         hvost.height,
         hvost.width); //хвост
    fill(0);
    ellipse((xSpecial+telo.width),
            (y-(golova.height*3/4)),
            eye,
            eye);} //глаз
     
    //Движение вправо
    else if (keyIsDown(68) === true &&
             keyIsDown(87) === false &&
             keyIsDown(65) === false){
    fill(color);
    rect(xSpecial,
         y,
         telo.width,
         telo.height); //тело
    rect(xSpecial,
         (y+telo.height),
         noga.width,
         noga.height); //задняя нога
    rect((xSpecial+telo.width-noga.width),
         (y+telo.height),
         noga.width,
         noga.height); //передняя нога
    rect((xSpecial+telo.width-(golova.width*1/3)),
         (y-golova.height),
         golova.width,
         golova.height); //голова
    triangle((xSpecial+telo.width-(golova.width*1/3)),
             (y-golova.height),
             (xSpecial+telo.width-(golova.width*1/6)),
             (y-golova.height),
             (xSpecial+telo.width-(golova.width*2/9)),
             (y-(golova.height)/2)); //ухо
    rect((xSpecial-hvost.width),
         y,
         hvost.width,
         hvost.height); //хвост
    fill(0);
    ellipse((xSpecial+telo.width),
            (y-(golova.height*3/4)),
            eye,
            eye);} //глаз
        
    //Движение влево
    else if (keyIsDown(65) === true &&
             keyIsDown(87) === false &&
             keyIsDown(68) === false){
    fill(color);
    rect(x,
         y,
         telo.width,
         telo.height); //тело
    rect(x,
         (y+telo.height),
         noga.width,noga.height); //передняя нога
    rect((x+telo.width-noga.width),
         (y+telo.height),
         noga.width,
         noga.height); //задняя нога
    rect((x-(golova.width*2/3)),
         (y-golova.height),
         golova.width,
         golova.height); //голова
    triangle((x+(golova.width*1/3)),
             (y-golova.height),
             (x+(golova.width*1/6)),
             (y-golova.height),
             (x+(golova.width*2/9)),
             (y-(golova.height)/2)); //ухо
    rect((x+telo.width),y,hvost.width,hvost.height); //хвост
    fill(0);
    ellipse(x,(y-(golova.height*3/4)),eye,eye);} //глаз
    
    //Прыжок на месте
    else if ((keyIsDown(87) === true && 
              keyIsDown(68) === false &&
              keyIsDown(65) === false) ||
              keyIsDown(87)+keyIsDown(65)+keyIsDown(68)==3){
    fill(color);
    rect(x,
         y,
         telo.height,
         telo.height); //тело
    rect((x-noga.height+noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //левая нога
    rect((x+telo.height-noga.width),
         (y+telo.height),
         noga.height,
         noga.width); //правая нога
    rect((x+(telo.height*1/2)-(golova.height*1/2)),
         (y-golova.height),
         golova.height,
         golova.height); //голова
    rect((x+(telo.height*1/2)-(golova.height*3/4)),
         (y-golova.height),
         (golova.height*1/4),
         (golova.height*1/2)); //левое ухо
    rect((x+(telo.height*1/2)+(golova.height*1/2)),
         (y-golova.height),
         (golova.height*1/4),
         (golova.height*1/2)); //правое ухо
    fill(0);
    ellipse((x+(telo.height*1/2)-(golova.height*1/4)),
            (y-(golova.height*3/4)),
            eye,
            eye); //левый глаз   
    ellipse((x+(telo.height*1/2)+(golova.height*1/4)),
            (y-(golova.height*3/4)),
            eye,
            eye);} //правый глаз 
     
    //Стоячее положение
    else if (keyIsDown(87)+keyIsDown(65)+keyIsDown(68)==0 ||
            keyIsDown(65)+keyIsDown(68)==2){
    fill(color);
    rect(x,
         y,
         telo.height,
         telo.height); //тело
    rect(x,
         (y+telo.height),
         noga.width,
         noga.height); //левая нога
    rect((x+telo.height-noga.width),
         (y+telo.height),
         noga.width,
         noga.height); //правая нога
    rect((x+(telo.height*1/2)-(golova.height*1/2)),
         (y-golova.height),
         golova.height,golova.height); //голова
    rect((x+(telo.height*1/2)-(golova.height*3/4)),
         (y-golova.height),
         (golova.height*1/4),
         (golova.height*1/2)); //левое ухо
    rect((x+(telo.height*1/2)+(golova.height*1/2)),
         (y-golova.height),
         (golova.height*1/4),
         (golova.height*1/2)); //правое ухо
    fill(0);
    ellipse((x+(telo.height*1/2)-(golova.height*1/4)),
            (y-(golova.height*3/4)),
            eye,
            eye); //левый глаз   
    ellipse((x+(telo.height*1/2)+(golova.height*1/4)),
            (y-(golova.height*3/4)),
            eye,
            eye);} //правый глаз 
}
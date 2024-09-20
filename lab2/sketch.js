let color='#964b00';
let k=2;
let eye=2*k

let telo=
{
    height: 30*k,
    width: 100*k,
};

let golova=
{
    height: 18*k,
    width: 30*k,
};

let noga=
{
    height: 35*k,
    width: 10*k,
};

let hvost=
{
    height: 25*k,
    width: 7*k,
};

let goR=
{
    x: 200,
    y: 200,
};

let goL=
{
    x: 600,
    y: 200,
};
let jumpR=
{
    x: 1000,
    y: 200,
};

let jumpL=
{
    x: 200,
    y: 600,
};

let stand=
{
    x: 600,
    y: 600,
};

let jump=
{
    x: 1000,
    y: 600,
};

function setup()
{
    createCanvas(2000,2000);
}

function draw()
{
    //Движение вправо
    let x = goR.x-(telo.width*1/2);
    let y = goR.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.width,telo.height); //тело
    rect(x,(y+telo.height),noga.width,noga.height); //задняя нога
    rect((x+telo.width-noga.width),(y+telo.height),noga.width,noga.height); //передняя нога
    rect((x+telo.width-(golova.width*1/3)),(y-golova.height),golova.width,golova.height); //голова
    triangle((x+telo.width-(golova.width*1/3)),(y-golova.height),(x+telo.width-(golova.width*1/6)),
    (y-golova.height),(x+telo.width-(golova.width*2/9)),(y-(golova.height)/2)); //ухо
    rect((x-hvost.width),y,hvost.width,hvost.height); //хвост
    fill(0);
    ellipse((x+telo.width),(y-(golova.height*3/4)),eye,eye); //глаз

    //Движение влево
    x = goL.x-(telo.width*1/2);
    y = goL.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.width,telo.height); //тело
    rect(x,(y+telo.height),noga.width,noga.height); //передняя нога
    rect((x+telo.width-noga.width),(y+telo.height),noga.width,noga.height); //задняя нога
    rect((x-(golova.width*2/3)),(y-golova.height),golova.width,golova.height); //голова
    triangle((x+(golova.width*1/3)),(y-golova.height),(x+(golova.width*1/6)),
    (y-golova.height),(x+(golova.width*2/9)),(y-(golova.height)/2)); //ухо
    rect((x+telo.width),y,hvost.width,hvost.height); //хвост
    fill(0);
    ellipse(x,(y-(golova.height*3/4)),eye,eye); //глаз

    //Прыжок вправо
    x = jumpR.x-(telo.width*1/2);
    y = jumpR.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.width,telo.height); //тело
    rect((x-noga.height+noga.width),(y+telo.height),noga.height,noga.width); //задняя нога
    rect((x+telo.width-noga.width),(y+telo.height),noga.height,noga.width); //передняя нога
    rect((x+telo.width-(golova.width*1/3)),(y-golova.height),golova.width,golova.height); //голова
    triangle((x+telo.width-(golova.width*1/3)),(y-golova.height),(x+telo.width-(golova.width*1/6)),
    (y-golova.height),(x+telo.width-(golova.width*2/9)),(y-(golova.height)/2)); //ухо
    rect((x-hvost.height),y,hvost.height,hvost.width); //хвост
    fill(0);
    ellipse((x+telo.width),(y-(golova.height*3/4)),eye,eye); //глаз

    //Прыжок влево
    x = jumpL.x-(telo.width*1/2);
    y = jumpL.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.width,telo.height); //тело
    rect((x-noga.height+noga.width),(y+telo.height),noga.height,noga.width); //передняя нога
    rect((x+telo.width-noga.width),(y+telo.height),noga.height,noga.width); //задняя нога
    rect((x-(golova.width*2/3)),(y-golova.height),golova.width,golova.height); //голова
    triangle((x+(golova.width*1/3)),(y-golova.height),(x+(golova.width*1/6)),
    (y-golova.height),(x+(golova.width*2/9)),(y-(golova.height)/2)); //ухо
    rect((x+telo.width),y,hvost.height,hvost.width); //хвост
    fill(0);
    ellipse(x,(y-(golova.height*3/4)),eye,eye); //глаз

    //Стоячее положение
    x = stand.x-(telo.height*1/2);
    y = stand.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.height,telo.height); //тело
    rect(x,(y+telo.height),noga.width,noga.height); //левая нога
    rect((x+telo.height-noga.width),(y+telo.height),noga.width,noga.height); //правая нога
    rect((x+(telo.height*1/2)-(golova.height*1/2)),(y-golova.height),golova.height,golova.height); //голова
    rect((x+(telo.height*1/2)-(golova.height*6/8)),(y-golova.height),
    (golova.height*2/8),(golova.height*1/2)); //левое ухо
    rect((x+(telo.height*1/2)+(golova.height*1/2)),
    (y-golova.height),(golova.height*2/8),(golova.height*1/2)); //правое ухо
    fill(0);
    ellipse((x+(telo.height*1/2)-(golova.height*1/4)),(y-(golova.height*3/4)),eye,eye); //левый глаз   
    ellipse((x+(telo.height*1/2)+(golova.height*1/4)),(y-(golova.height*3/4)),eye,eye); //правый глаз 

    //Прыжок на месте
    x = jump.x-(telo.height*1/2);
    y = jump.y-(telo.height*1/2);
    fill(color);
    rect(x,y,telo.height,telo.height); //тело
    rect((x-noga.height+noga.width),(y+telo.height),noga.height,noga.width); //левая нога
    rect((x+telo.height-noga.width),(y+telo.height),noga.height,noga.width); //правая нога
    rect((x+(telo.height*1/2)-(golova.height*1/2)),(y-golova.height),golova.height,golova.height); //голова
    rect((x+(telo.height*1/2)-(golova.height*6/8)),(y-golova.height),
    (golova.height*2/8),(golova.height*1/2)); //левое ухо
    rect((x+(telo.height*1/2)+(golova.height*1/2)),
    (y-golova.height),(golova.height*2/8),(golova.height*1/2)); //правое ухо
    fill(0);
    ellipse((x+(telo.height*1/2)-(golova.height*1/4)),(y-(golova.height*3/4)),eye,eye); //левый глаз   
    ellipse((x+(telo.height*1/2)+(golova.height*1/4)),(y-(golova.height*3/4)),eye,eye); //правый глаз 
}
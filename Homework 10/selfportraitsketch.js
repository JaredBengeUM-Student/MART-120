var headX = 300;
var headY = 125;
var headDirection = 1;

var bodyX = 260;
var bodyY = 190;
var bodyDirection = 3;

var armX = 340
var armY = 25
var armDirection = 4

var legX = 260
var legY = 340
var legDirection = 5

var thermX = 300
var thermY = 130
var thermDirection = 6

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() 
    {
        createCanvas (600,600);
    }
    function draw() 
    {
        background(75,200,100);
        textSize(25);
        fill(51);
        text("The COVID-19 NFT", 200, 50);

        fill(0, 150, 255);
        circle(headX,headY,125);
        headX+=headDirection;
        if(headX >= 418 || headX <= 82)
        {
        headDirection *= -1;
        }

        strokeWeight(5);
        fill(0);
        point(275,110);
        point(325,110);

        point (300,130);

        ellipse (300, 155, 10, 15);

        line(300,65,250,80);
        line(300,65,350,80);

        fill(150, 15, 100,);
        rect(260,bodyY,80,150);
        bodyY += bodyDirection;
        if(bodyY <= 0 || bodyY >= 450 )
        {
        bodyDirection *= -1;
        }

        fill(255);
        triangle(thermX,155,330,140,340,thermY)
        thermX += thermDirection;
        if(thermX>=418 || thermX<=82)
        {
            thermDirection *=-1
        }
        thermY += thermDirection
        if(thermY<= 0 || thermY >=450)
        {
        thermDirection *=-1
        }
        fill(10, 24, 120);
        rect(armX,190,armY,115);
        armX+=armDirection;
        if(armX>=418 || armX<=82)
        {
            armDirection *=-1;
        }

        rect(235,190,25,115);

        rect(260,legY,25,100);
        legY += legDirection;
        if(legY <= 0 || legY >= 405)
        {
        legDirection *= -1;
        }

        rect(315,340,25,100);

        fill(51);
        textSize(size);
        size+= sizeDirection;
        count++;
        if(count > 5)
        {
        sizeDirection *=-1;
        count = 0;
        }
        text("- Jared Benge",225,500)
    }


  
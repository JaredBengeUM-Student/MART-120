var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 50;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(700,700);
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(300);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(650,25);
}

function draw() {
    background(0,0,255);
    stroke(0);
    fill(0);

    createBorders (5);

    textSize(16);
    text("EXIT", width-50,height-50);

    drawCharacter();
    characterMovement (); 

    fill(0,150,300);
    for (var i = 2; i < shapeXs.length; i++) {
        square(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
        shapeXs[i] = 1.5;
        }
        if (shapeXs[i] < 1.5) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 1.5;
        }
        if (shapeYs[i] < 1.5) {
            shapeYs[i] = height;
        }
    }
    fill(100,400,150);
    for (var i = 2; i < shapeXs.length; i++) {
        circle(shapeXs[i] - 150, shapeYs[i] - 350, diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
        shapeXs[i] = 1.5;
        }
        if (shapeXs[i] < 1.5) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 1.5;
        }
        if (shapeYs[i] < 1.5) {
            shapeYs[i] = height;
        }
    }
    fill(200,50,450);
    for (var i = 3; i < shapeXs.length; i++) {
        ellipse(shapeXs[i] - 250, shapeYs[i] + 450, diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
        shapeXs[i] = 2.5;
        }
        if (shapeXs[i] < 2.5) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 2.5;
        }
        if (shapeYs[i] < 2.5) {
            shapeYs[i] = height;
        }
    }
    fill(300,50,150);
    for (var i = 1; i < shapeXs.length; i++) {
        square(shapeXs[i] - 350, shapeYs[i] - 150, diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
        shapeXs[i] = 0.5;
        }
        if (shapeXs[i] < 0.5) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0.5;
        }
        if (shapeYs[i] < 0.5) {
            shapeYs[i] = height;
        }
    }
    fill(300,200,250);
    for (var i = 2; i < shapeXs.length; i++) {
        circle(shapeXs[i] - 500, shapeYs[i] - 650, diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2.5)) + 1);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
        shapeXs[i] = 1.5;
        }
        if (shapeXs[i] < 1.5) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 1.5;
        }
        if (shapeYs[i] < 1.5) {
            shapeYs[i] = height;
        }
    }
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
    fill (120,130,140);
    circle (mouseShapeX, mouseShapeY, 25);
}
function createCharacter(x,y) {
    characterX = x;
    characterY = y;
}
function drawCharacter() {
    fill('rgba(20,20,60,60)');
    circle(characterX,characterY,25);
}
function characterMovement() {
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}
function createBorders (thickness) {
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0,height-thickness,width,thickness);
    rect(width-thickness,0,thickness,height-50);
}
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
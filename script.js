// for debugging
const LIMIT = 500;  //anzahl der schritte die die schlange macht
let run_count=0;
let interval_id;
let speed = 200;

let gamescreen = document.getElementById('gamescreen');
//var x = 250;
//var y = 250;
let snakeSpawnX = 600;
let snakeSpawnY = 600;
const step = 10;
let direction;
let apple_position_x;
let apple_position_y;
let size = 1;
let appleCounter = 0;
let snake = new Array();
let deathReason;

let gamescreen_height = gamescreen.height;
let gamescreen_width = gamescreen.width;
let ctx = gamescreen.getContext('2d');

const SEGMENT_WIDTH = 10;
const SEGMENT_HEIGHT = 10;

function isWallCollision() {
    if(snake[0].x < gamescreen.getBoundingClientRect().left
        || gamescreen_width - snake[0].x < step
        || snake[0].y < gamescreen.getBoundingClientRect().top
        || gamescreen_height - snake[0].y < step) {
        console.log(gamescreen_width - snake[0].x);
        deathReason = 'tot durch kollision mit da wand'
        return true;
    }
    return false;
}

function isSelfCollision() {
    const head = snake[0];
    rectSnake(head.x, head.y, SEGMENT_WIDTH, SEGMENT_HEIGHT);  //function
    let tail = snake.slice(1,snake.length);
    for(i=0;i<tail.length;i++) {
        if(tail[i].x === head.x && tail[i].y === head.y) {
            deathReason = 'tot durch schlange';
            return true;
        }
    }
    return false;
}

function gameOver() {
    clearInterval(interval_id);
    console.log('You is dead! Size: ' + size);
    console.log(gamescreen.getBoundingClientRect().left, "this is the gamesreen Bounding left") //variante zum debuggen des centered divs
    window.alert('You Lost! You ate "' + appleCounter + '" Apples.\nThe size of your snake was: ' + size); //+ deathReason );
}

function isAppleEaten() {
    if (snakeSpawnX === apple_position_x && snakeSpawnY === apple_position_y) {
        return true;
    }
    return false;
}

function moveSnake() {
    snake.forEach(function(segment) {
        rectSnake(segment.x,segment.y,SEGMENT_WIDTH,SEGMENT_HEIGHT); //function
    });

    if(isAppleEaten()) {
        size++;
        appleCounter++;
        speed--;
        console.log(speed);
        init_apple();
    } else {
        snake.pop();
    }
}

function init_apple() {
    apple_position_x = getRandomInt(10,gamescreen_width-10);  //x position des apfels wird generiert durch nen randomgenerator
    apple_position_y = getRandomInt(10,gamescreen_height-10); //y position des apfels wird generiert durch nen randomgenerator
}

function checkDirection() { //GLAUBE: deklaration der richtungen
    switch(direction) {
        case 'left':
            snakeSpawnX -= step;
            break;
        case 'up':
            snakeSpawnY -= step;
            break;
        case 'right':
            snakeSpawnX += step;
            break;
        case 'down':
            snakeSpawnY += step;
            break;
        default:
            direction = 'up';   //Wohin er standardmäßig hinläuft
            snakeSpawnY -= step;
    }
}

function onKeyDown(evt) { //funktion schaut ob tasten gedrückt werden
    switch(evt.keyCode) {
        // left
        case 37:
            if(direction === 'right') break;
            direction = 'left';
            break;
        // up
        case 38:
            if(direction === 'down') break;
            direction = 'up';
            break;
        // right
        case 39:
            if(direction === 'left') return;
            direction = 'right';
            break;
        // down
        case 40:
            if(direction === 'up') break;
            direction = 'down';
            break;
    }
}

function clear() {
    ctx.clearRect(-1,-1,gamescreen_width,gamescreen_height);
}

function rectApple(x,y,width,height) {
    drawBox(x, y, width, height, "red");
}

function rectSnake(x,y,width,height) {
    drawBox(x, y, width, height, "green");
}

function drawBox(x,y,width,height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.fill();
}



function draw() {   //draw funktion beinhaltet alles was "gezeichnet" wird -- like apfelposition
    run_count++;
    if(LIMIT !== 0 && run_count > LIMIT) {
        clearInterval(interval_id);
    }
    checkDirection()    //richtung wird geprüft
    snake.unshift({'x': snakeSpawnX,'y': snakeSpawnY});
    if(isSelfCollision() || isWallCollision()) {    //bedingungen für ein game over
        gameOver();
    }
    clear();
    moveSnake();
    rectApple(apple_position_x,apple_position_y,SEGMENT_WIDTH,SEGMENT_HEIGHT); //hier ist der apfel selbst //funktion
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min +1)) + min)/10)*10;
}

function init() {
    init_apple();
    interval_id = setInterval(draw, speed);  //draw ist das zeichenevent, die zahl ist die geschwindigkeit in millisekunden --!10 milisekunden sind viel zu schnell -- 100 milisekunden auf dauer zu schnell!
}

document.addEventListener('keydown', onKeyDown);  //eventlistener überstetzt den analogen tastendruck als digitales signal

init();
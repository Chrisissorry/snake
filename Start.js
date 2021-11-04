let startingX = 300;
let startingY = 300;
let step = 10;
let direction;
let applePositionX;
let applePositionY;
let size = 1;
let snake = [];
let timeout;
let difficulty;

let startscreen = document.getElementById("startscreen");
let gamescreen;
let gamescreenHeight;
let gamescreenWidth;
let ctx;

let SegmentWidth = 10;
let SegmentHeight = 10;

document.getElementById("easy").addEventListener("click", function(){startGame(250, 1)})
document.getElementById("medium").addEventListener("click", function(){startGame(200, 2)})
document.getElementById("hard").addEventListener("click", function(){startGame(150, 3)})

function startGame (time, difficult) {
    timeout = time;
    difficulty = difficult;
    startscreen.remove();
    loadCanvas();
    gamescreen = document.getElementById("gamescreen");
    gamescreenHeight = gamescreen.height;
    gamescreenWidth = gamescreen.width;
    ctx = gamescreen.getContext("2d");
    init_apple();
    draw();
}

function has_Game_Ended() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    const hitLeftWall = startingX < 0;
    const hitRightWall = startingX > gamescreenWidth - 10;
    const hitTopWall = startingY < 0;
    const hitBottomWall = startingY > gamescreenHeight - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

function gameOver() {
    document.location.reload();
    alert ('You is dead! Size: ' + size);
}

function adjustSpeedBySize() {

    switch (difficulty) {
        //easy
        case 1: {
            if (timeout > 150) {
                --timeout
                return timeout;
            }
            break;
        }
        //medium
        case 2: {
            if (timeout > 100) {
                --timeout;
                return timeout;
            }
            break;
        }
        //hard
        case 3: {
            if (timeout > 50) {
                --timeout
                return timeout;
            }
            break;
        }
    }
}

function isAppleEaten() {
    return startingX === applePositionX && startingY === applePositionY
}

function moveSnake() {
    snake.forEach(function(segment) {
        rect(segment.x,segment.y,SegmentWidth,SegmentHeight);
    });

    if(isAppleEaten()) {
        size++;
        init_apple();
        adjustSpeedBySize();
    } else {
        snake.pop();
    }
}

function init_apple() {
    applePositionX = getRandomInt(0,gamescreenWidth);
    applePositionY = getRandomInt(0,gamescreenHeight);
}

function checkDirection() {
    switch(direction) {
        case 'left':
            startingX -= step;
            break;
        case 'up':
            startingY -= step;
            break;
        case 'right':
            startingX += step;
            break;
        case 'down':
            startingY += step;
            break;
        default:
            direction = 'up';
            startingY -= step;
    }
}

function onKeyDown(evt) {
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
    ctx.clearRect(0,0,gamescreenWidth,gamescreenHeight);
}

function rect(x,y,width,height) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.closePath();
    ctx.fill();
}

function draw() {
    if (has_Game_Ended()) {
        gameOver();
    }

    setTimeout(function onTick() {
        document.addEventListener('keydown', onKeyDown);
        checkDirection()
        snake.unshift({'x': startingX, 'y': startingY});
        clear();
        moveSnake();
        rect(applePositionX, applePositionY, SegmentWidth, SegmentHeight);
        draw();
    }, timeout)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min +1)) + min)/10)*10;
}

function loadCanvas() {
    let canvas = document.createElement("canvas");
    let div = document.getElementById("canvascontainer");
    canvas.id = "gamescreen";
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    div.appendChild(canvas);
}



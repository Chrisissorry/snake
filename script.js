// for debugging
const LIMIT = 500;
let run_count=0;
let interval_id;
let speed = 1000;

let gamescreen = document.getElementById('gamescreen');
const leftWall = 0;
const topWall = 0;
let snakeSpawnX = 550;
let snakeSpawnY = 550;
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

let gameDifficultyEasy =document.getElementById('difficultyEasy');
let gameDifficultyMedium = document.getElementById('difficultyMedium');
let gameDifficultyHard = document.getElementById('difficultyHard');

let gamemodeStrength;

let modal = document.getElementById("endModal");
let modalCloseButton = document.getElementById("closeButton");
let modalResetButton = document.getElementById("resetButton");
let modalText = document.getElementById("modalText");

let screenHeight = document.getElementById("snakeGameField");

let timeToReplay = 6;

if (gameDifficultyEasy) {
    gameDifficultyEasy.addEventListener('click', setGamemodeEasy, false)
}
if (gameDifficultyMedium) {
    gameDifficultyMedium.addEventListener('click', setGamemodeMedium, false)
}
if (gameDifficultyHard) {
    gameDifficultyHard.addEventListener('click', setGamemodeHard, false)
}

function setGamemodeEasy() {
    gamemodeStrength = 1;
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
    init();
}

function setGamemodeMedium() {
    gamemodeStrength = 2;
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
    init();
}

function setGamemodeHard() {
    gamemodeStrength = 3;
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
    init();
}


function setStartingSpeed() {
    if(gamemodeStrength===1) {
        speed = 500;
        console.log(speed);
        interval_id = setInterval(draw, speed);
    }
    if(gamemodeStrength===2) {
        speed = 350;
        console.log(speed);
        interval_id = setInterval(draw, speed);
    }
    if(gamemodeStrength===3) {
        speed = 250;
        console.log(speed);
        interval_id = setInterval(draw, speed);
    }
}

function isWallCollision() {
    if(snake[0].x < leftWall
        || gamescreen_width - snake[0].x < step
        || snake[0].y < topWall
        || gamescreen_height - snake[0].y < step) {
        deathReason = 'You have collided with the wall.';
        return true;
    }
    return false;
}
function isSelfCollision() {
    const head = snake[0];
    rectSnake(head.x, head.y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
    let tail = snake.slice(1,snake.length);
    for(i=0;i<tail.length;i++) {
        if(tail[i].x === head.x && tail[i].y === head.y) {
            deathReason = 'You bit your own tail.';
            return true;
        }
    }
    return false;
}

function changeScreenHeightBigger() {
    screenHeight.style.height = "107%";
}

function changeScreenHeightSmaller() {
    screenHeight.style.height = "100%";
}

function replayTimer() {
    setTimeout(function () {
        timeToReplay--;
        if (timeToReplay > 0) {
            modalText.innerHTML = "Time befor Reset: " + timeToReplay;
            replayTimer();
        }
        if (timeToReplay === 0) {
            window.location.reload();
        }
    }, 1000)
}


function gameOver() {
    clearInterval(interval_id);
    console.log('You is dead! Size: ' + size);
    modalAppearanceGameOver();
}

function modalAppearanceGameOver() {
    changeScreenHeightBigger();
    modal.style.display = "flex";
    modalText.innerHTML = "You Lost! You ate " + appleCounter + " Apples. <br> The size of your snake was: " + size + ".<br> You died because of: " + deathReason;
    modalCloseButton.onclick = function () {
        changeScreenHeightSmaller();
        modal.style.display = "none";
    }
    modalResetButton.onclick = function () {
        replayTimer();
    }
}

function modalAppearanceToManySteps() {
    changeScreenHeightBigger();
    modal.style.display = "flex";
    modalText.innerHTML = "You made too many steps :( <br>if this Error occures again after reload, <br>PLEASE inform the creator about it and tell him this step number: " + run_count;
    modalCloseButton.onclick = function () {
        changeScreenHeightSmaller();
        modal.style.display = "none";
    }
    modalResetButton.onclick = function () {
        replayTimer();
    }
}

function isAppleEaten() {
    if (snakeSpawnX === apple_position_x && snakeSpawnY === apple_position_y) {
        clearInterval(interval_id);
        speed = speed - 2;
        interval_id = setInterval(draw, speed);
        if (speed === 50) {
            speed = 50;
        }
        return true;
    }
    return false;
}

function moveSnake() {
    snake.forEach(function(segment) {
        rectSnake(segment.x,segment.y,SEGMENT_WIDTH,SEGMENT_HEIGHT);
    });

    if(isAppleEaten()) {
        size++;
        appleCounter++;
        console.log(speed);
        init_apple();
    } else {
        snake.pop();
    }
}

function init_apple() {
    apple_position_x = getRandomInt(0,gamescreen_width);
    apple_position_y = getRandomInt(0,gamescreen_height);
}

function checkDirection() {
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
            direction = 'up';
            snakeSpawnY -= step;
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



function draw() {
    run_count++;
    if (run_count===450) {
        run_count = 0;
    }
    if(LIMIT !== 0 && run_count > LIMIT) {
        modalAppearanceToManySteps();
        clearInterval(interval_id);
    }
    checkDirection()
    snake.unshift({'x': snakeSpawnX,'y': snakeSpawnY});
    if(isSelfCollision() || isWallCollision()) {
        gameOver();
    } else {
        clear();
        console.log(speed);
        moveSnake();
        rectApple(apple_position_x, apple_position_y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min +1)) + min)/10)*10;
}

function init() {
    init_apple();
    setStartingSpeed();
}

document.addEventListener('keydown', onKeyDown);

init();
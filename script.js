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
let snake = [];
let deathReason;

let gamescreen_height = gamescreen.height;
let gamescreen_width = gamescreen.width;
let ctx = gamescreen.getContext('2d');

const SEGMENT_WIDTH = 10;
const SEGMENT_HEIGHT = 10;

let gameDifficultyEasy = document.getElementById('difficultyEasy');
let gameDifficultyMedium = document.getElementById('difficultyMedium');
let gameDifficultyHard = document.getElementById('difficultyHard');

let modal = document.getElementById("endModal");
let modalCloseButton = document.getElementById("closeButton");
let modalResetButton = document.getElementById("resetButton");
let modalText = document.getElementById("modalText");

let screenHeight = document.getElementById("fullScreen");

let counterTimer = 5;

gameDifficultyEasy.addEventListener('click', () => startGame('easy'), false);

gameDifficultyMedium.addEventListener('click', () => startGame('medium'), false);

gameDifficultyHard.addEventListener('click', () => startGame('hard'), false);

function startGame(difficulty) {
    switch (difficulty) {
        case 'easy':
            speed = 200;
            break;
        case 'medium':
            speed = 130;
            break;
        case 'hard':
            speed = 60;
            break;
    }
    lockButtons();
    init();
}

function lockButtons() {
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
}

function isWallCollision() {
    if (snake[0].x < leftWall
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
    let tail = snake.slice(1, snake.length);
    for (let i = 0; i < tail.length; i++) {
        if (tail[i].x === head.x && tail[i].y === head.y) {
            deathReason = 'You bit your own tail.';
            return true;
        }
    }
    return false;
}

function changeScreenHeightBigger() {
    screenHeight.style.height = "108%";
}

function changeScreenHeightSmaller() {
    screenHeight.style.height = "100%";
}

function replayTimer() {
    while (counterTimer > 0) {
        (function (counterTimer) {
            let timeToReplay = 5;
            setTimeout(function () {
                let resultTimer = timeToReplay - counterTimer;
                modalText.innerHTML = "Time before reset: " + resultTimer;
            }, 1000 * counterTimer)
        })(counterTimer--)
    }
}

function gameOver() {
    clearInterval(interval_id);
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
        setTimeout(function () {
            window.location.reload();
        }, 5000)
    }
}

function isAppleEaten() {
    if (snakeSpawnX === apple_position_x && snakeSpawnY === apple_position_y) {
        clearInterval(interval_id);
        speed = speed - 2;
        interval_id = setInterval(draw, speed);
        if (speed <= 30) {
            speed = 30;
        }
        return true;
    }
    return false;
}

function moveSnake() {
    snake.forEach(function (segment) {
        rectSnake(segment.x, segment.y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
    });

    if (isAppleEaten()) {
        size++;
        appleCounter++;
        init_apple();
        return;
    }
    snake.pop();
}

function init_apple() {
    apple_position_x = getRandomInt(0, gamescreen_width);
    apple_position_y = getRandomInt(0, gamescreen_height);
}

function checkDirection() {
    switch (direction) {
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
    switch (evt.keyCode) {
        // left
        case 37:
            if (direction === 'right') break;
            direction = 'left';
            break;
        // up
        case 38:
            if (direction === 'down') break;
            direction = 'up';
            break;
        // right
        case 39:
            if (direction === 'left') return;
            direction = 'right';
            break;
        // down
        case 40:
            if (direction === 'up') break;
            direction = 'down';
            break;
    }
}

function clear() {
    ctx.clearRect(-1, -1, gamescreen_width, gamescreen_height);
}

function rectApple(x, y, width, height) {
    drawBox(x, y, width, height, "red");
}

function rectSnake(x, y, width, height) {
    drawBox(x, y, width, height, "green");
}

function drawBox(x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.fill();
}

function draw() {
    checkDirection()
    snake.unshift({'x': snakeSpawnX, 'y': snakeSpawnY});
    if (isSelfCollision() || isWallCollision()) {
        gameOver();
    }
    clear();
    moveSnake();
    rectApple(apple_position_x, apple_position_y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
}

function init() {
    init_apple();
    interval_id = setInterval(draw, speed);
}

document.addEventListener('keydown', onKeyDown);
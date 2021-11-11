import {
    timeout,
    adjustSpeedBySize,
} from "../Start.js";

import {
    applePositionY,
    applePositionX,
    isAppleEaten,
    initApple,
    rect,
} from "./Apple.js";

import {
    hasGameEnded,
    gameOver,
    clear,
} from "./Finish.js";

export let step = 10;
export let direction;
export let SegmentWidth = 10;
export let SegmentHeight = 10;
export let startingX = 300;
export let startingY = 300;
export let size = 1;
export let snake = [];

export function moveSnake() {
    snake.forEach(function(segment) {
        rect(segment.x,segment.y,SegmentWidth,SegmentHeight);
    });

    if(isAppleEaten()) {
        size++;
        initApple();
        adjustSpeedBySize();
    } else {
        snake.pop();
    }
}

export function checkDirection() {
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

export function onKeyDown(evt) {
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

export function draw() {
    if (hasGameEnded()) {
        gameOver();
    }

    setTimeout(function onTick() {
        document.addEventListener('keydown', onKeyDown);
        checkDirection();
        snake.unshift({'x': startingX, 'y': startingY});
        clear();
        moveSnake();
        rect(applePositionX, applePositionY, SegmentWidth, SegmentHeight);
        draw();
    }, timeout);
}

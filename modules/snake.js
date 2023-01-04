import * as config from "./config.js"
import {drawBox, clear} from "../javascript/utils.js";
import {apple, applePositionX, applePositionY} from "./apple.js";

export function snake() {
    let snakeSpawnX = 500;
    let snakeSpawnY = 500;
    let snake = [];
    let snakeSize = 1;
    let appleCounter = 0;
    let direction;
    let step = 10;
    let intervalID;
    let speed = 150;

    function spawnSnake() {
        drawBox(
            snakeSpawnX,
            snakeSpawnY,
            config.SIZE,
            config.SIZE,
            "green"
        );
    }

    spawnSnake();

    function move() {
        snake.forEach(function (segment) {
            drawBox(
                segment.x,
                segment.y,
                config.SIZE,
                config.SIZE,
                "green"
            );
        });

        if(isAppleEaten(applePositionX, applePositionY)) {
            snakeSize++;
            appleCounter++;
            apple();
            return;
        }
        snake.pop();
    }

    function isAppleEaten(appleX, appleY) {
        if(snakeSpawnX === appleX && snakeSpawnY === appleY) {
            clearInterval(intervalID);
            speed = speed - 2;
            intervalID = setInterval(snakeExecution, speed);
            if(speed <= 30) {
                speed = 30;
            }
            return true;
        }
        return false;
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

    function showApple(appleX, appleY) {
        drawBox(
            appleX,
            appleY,
            config.SIZE,
            config.SIZE,
            "red"
        )
    }

    function snakeExecution() {
        checkDirection();
        snake.unshift({'x' : snakeSpawnX, 'y' : snakeSpawnY});
        clear();
        move();
        showApple(applePositionX, applePositionY);
    }

    function init() {
        intervalID = setInterval(snakeExecution, speed);
    }

    init();

    document.addEventListener('keydown', onKeyDown);

    isAppleEaten(applePositionX, applePositionY);
}
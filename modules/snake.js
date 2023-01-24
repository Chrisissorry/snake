import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";

export default class Snake {
    constructor() {
        this.snakeSpawnX = 500;
        this.snakeSpawnY = 500;
        this.snake = [];
        this.snakeSize = 1;
        this.appleCounter = 0;
        this.step = 10;
        this.intervalID;
        this.speed = 150;   
    }

    spawn() {
        drawBox(
            this.snakeSpawnX,
            this.snakeSpawnY,
            config.SIZE,
            config.SIZE,
            "green"
        );
    }

     move() {
        this.snake.forEach(function (segment) {
            drawBox(
                segment.x,
                segment.y,
                config.SIZE,
                config.SIZE,
                "green"
            );
        });

        //eatAppleFunction
        snake.pop();
    }
}
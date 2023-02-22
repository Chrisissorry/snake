import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";
import Apple from "./apple.js";
import {draw} from "../game.js";
import Stats from "./stats.js";

let valueSize = 1, valueCounter = 0;

export default class Snake {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.snakeBody = [];
        this.step = 10;
        this.intervalID = undefined;
        this.speed = 250;
    }

    spawn(spawnX, spawnY) {
        drawBox(
            this.positionX = spawnX,
            this.positionY = spawnY,
            config.SIZE,
            config.SIZE,
            "green"
        );
    }

    move(applePositionX, applePositionY) {
        const apple = new Apple();

        this.snakeBody.forEach(function (segment) {
            drawBox(
                segment.x,
                segment.y,
                config.SIZE,
                config.SIZE,
                "green"
            );
        });
        if (this.eat(applePositionX, applePositionY) === true){
            apple.spawn();
            return
        }
        this.snakeBody.pop();
    }

    eat(applePositionX, applePositionY) {
        if (this.positionX === applePositionX && this.positionY === applePositionY) {
            const stats = new Stats();
            valueSize++;
            valueCounter++;
            stats.calculation(valueSize, valueCounter);
            clearInterval(this.intervalID);
            this.speed = this.speed - 2;
            this.intervalID = setInterval(draw, this.speed);
            if (this.speed <= 50) {
                this.speed = 50;
            }
            return true;
        }
        return false;
    }
}
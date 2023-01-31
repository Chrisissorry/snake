import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";
import Apple from "./apple.js";
import {draw} from "../game.js";

const apple = new Apple();

export default class Snake {
    constructor() {
        this.positionX = 500;
        this.positionY = 500;
        this.snakeBody = [];
        this.size = 1;
        this.appleCounter = 0;
        this.step = 10;
        this.intervalID = undefined;
        this.speed = 250;
    }

    spawn() {
        drawBox(
            this.positionX,
            this.positionY,
            config.SIZE,
            config.SIZE,
            "green"
        );
    }

     move(applePositionX, applePositionY) {
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
            this.size++;
            this.appleCounter++;
            apple.spawn();
            return
        }
        this.snakeBody.pop();
    }

    eat(applePositionX, applePositionY) {
        if (this.positionX === applePositionX && this.positionY === applePositionY) {
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
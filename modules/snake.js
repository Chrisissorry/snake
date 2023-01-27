import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";
import Apple from "./apple.js";
import {draw} from "../game.js";

const apple = new Apple();

export default class Snake {
    constructor() {
        this.spawnX = 500;
        this.spawnY = 500;
        this.body = [];
        this.size = 1;
        this.appleCounter = 0;
        this.step = 10;
        this.intervalID = undefined;
        this.speed = 500;
    }

    spawn() {
        drawBox(
            this.spawnX,
            this.spawnY,
            config.SIZE,
            config.SIZE,
            "green"
        );
    }

     move() {
        this.body.forEach(function (segment) {
            drawBox(
                segment.x,
                segment.y,
                config.SIZE,
                config.SIZE,
                "green"
            );
        });
        if (this.eat() === true){
            this.size++;
            this.appleCounter++;
            apple.spawn();
        }
        this.body.pop();
    }

    eat() {
        if (this.spawnX === apple.positionX && this.spawnY === apple.positionY) {
            clearInterval(this.intervalID);
            this.speed = this.speed - 5;
            this.intervalID = setInterval(draw, this.speed);
            if (this.speed <= 30) {
                this.speed = 30;
            }
            return true;
        }
        return false;
    }
}
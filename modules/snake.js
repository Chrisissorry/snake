import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";

export default class Snake {
    constructor() {
        this.spawnX = 500;
        this.spawnY = 500;
        this.body = [];
        this.snakeSize = 1;
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

        //TODO add eat apple function
        this.body.pop();
    }
}
import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";

export default class Apple {
    constructor() {
        this.maxPositionX = 1000;
        this.maxPositionY = 1000;
        this.positionX = 0;
        this.positionY = 0;
    }
    spawn() {
        drawBox(
            this.positionX = this.getRandomInt(0, this.maxPositionX),
            this.positionY = this.getRandomInt(0, this.maxPositionY),
            config.SIZE,
            config.SIZE,
            "red"
        );
    }

    getApplePosition() {
        return {
            x: this.positionX,
            y: this.positionY
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }
}
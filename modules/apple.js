import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";

export default class Apple {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
    }
    spawn(maxPositionX, maxPositionY) {
        drawBox(
            this.positionX = this.getRandomInt(0, maxPositionX),
            this.positionY = this.getRandomInt(0, maxPositionY),
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
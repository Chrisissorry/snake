import * as config from "./config.js"
import {drawBox} from "../utils/utils.js";

let showPositionX;
let showPositionY;

export default class Apple {
    constructor() {
        this.maxPositionX = 1000;
        this.maxPositionY = 1000;
        this.positionX = 0;
        this.positionY = 0;
    }
    spawn() {
        showPositionX = this.getRandomInt(0, this.maxPositionX)
        showPositionY = this.getRandomInt(0, this.maxPositionY)
    }

    getApplePosition() {
        drawBox(
            this.positionX = showPositionX,
            this.positionY = showPositionY,
            config.SIZE,
            config.SIZE,
            "red"
        )
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }
}
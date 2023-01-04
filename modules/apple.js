import * as config from "./config.js"
import {drawBox} from "../javascript/utils.js";
import {gameScreenWidth, gameScreenHeight} from "../script.js";

export let applePositionX;
export let applePositionY;

export function apple() {
    function spawnApple(maxPositionX, maxPositionY) {
        drawBox(
            applePositionX = getRandomInt(0, maxPositionX),
            applePositionY = getRandomInt(0, maxPositionY),
            config.SIZE,
            config.SIZE,
            "red"
        );
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }

    spawnApple(gameScreenWidth, gameScreenHeight);
}
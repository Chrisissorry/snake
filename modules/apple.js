import {clear, drawBox} from "../javascript/utils.js";
import {gameScreenWidth, gameScreenHeight} from "../script.js";

export function apple() {
    const SIZE = 10;
    clear();

    function spawn(maxPositionX, maxPositionY) {
        drawBox(
            getRandomInt(0, maxPositionX),
            getRandomInt(0, maxPositionY),
            SIZE,
            SIZE,
            "red"
        );
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }

    spawn(gameScreenWidth, gameScreenHeight);
}


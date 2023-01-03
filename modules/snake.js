import {drawBox} from "../javascript/utils.js";
//import {apple} from "./apple.js";
//      BEWEG DICH

//      SCHLUCK DAT DING

export function snake() {
    const SIZE = 10;
    let snakeSpawnX = 500;
    let snakeSpawnY = 500;
    let snake = [];
    let size = 0;

    function spawnSnake() {
        drawBox(
            snakeSpawnX,
            snakeSpawnY,
            SIZE,
            SIZE,
            "green"
        );
    }

    spawnSnake();
}
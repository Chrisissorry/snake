import {
    size,
    startingX,
    startingY,
    snake,
} from "./Snake.js";

import {
    ctx,
    gameScreenHeight,
    gameScreenWidth,
} from "../Start.js";

export function hasGameEnded() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    const hitLeftWall = startingX < 0;
    const hitRightWall = startingX > gameScreenWidth - 10;
    const hitTopWall = startingY < 0;
    const hitBottomWall = startingY > gameScreenHeight - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

export function gameOver() {
    document.location.reload();
    alert ('You is dead! Size: ' + size);
}

export function clear() {
    ctx.clearRect(0,0,gameScreenWidth,gameScreenHeight);
}
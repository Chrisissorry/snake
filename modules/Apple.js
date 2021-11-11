import {
    startingX, 
    startingY,
} from "./Snake.js";

import {
    ctx,
    gameScreenHeight,
    gameScreenWidth,
} from "../Start.js";

export let applePositionX;
export let applePositionY;

export function isAppleEaten() {
    return startingX === applePositionX && startingY === applePositionY;
}

export function initApple() {
    applePositionX = getRandomInt(0,gameScreenWidth);
    applePositionY = getRandomInt(0,gameScreenHeight);
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min +1)) + min)/10)*10;
}

export function rect(x,y,width,height) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.closePath();
    ctx.fill();
}
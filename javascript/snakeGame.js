import {applesEaten, snakeSize, deathReason} from "./moduleSnake.js";

export let hidingDifficultyLevels = document.getElementById("difficulties");
let gamescreen = document.getElementById('gamescreen');
export let gamescreen_height = gamescreen.height;
export let gamescreen_width = gamescreen.width;
let ctx = gamescreen.getContext('2d');

let modal = document.getElementById("endModal");
let modalCloseButton = document.getElementById("closeButton");
let modalResetButton = document.getElementById("resetButton");
let modalText = document.getElementById("modalText");
let counterTimer = 5;

export const leftWall = 0;
export const topWall = 0;
export const step = 10;
export const SEGMENT_WIDTH = 10;
export const SEGMENT_HEIGHT = 10;

export function modalAppearanceGameOver() {
    modal.style.display = "inline-flex";
    modalText.innerHTML = "You Lost! You ate " + applesEaten + " Apples. <br> The size of your snake was: " + snakeSize + ".<br> You died because of: " + deathReason;
    modalCloseButton.onclick = function () {
        modal.style.display = "none";
    }
    modalResetButton.onclick = function () {
        replayTimer();
        setTimeout(function () {
            window.location.reload();
        }, 5000)
    }
}

function replayTimer() {
    while (counterTimer > 0) {
        (function (counterTimer) {
            let timeToReplay = 5;
            setTimeout(function () {
                let resultTimer = timeToReplay - counterTimer;
                modalText.innerHTML = "Time before reset: " + resultTimer;
            }, 1000 * counterTimer)
        })(counterTimer--)
    }
}
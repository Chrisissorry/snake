import {apple} from "./modules/apple.js";

let gameScreen = document.getElementById('gamescreen');
export let gameScreenHeight = gameScreen.height;
export let gameScreenWidth = gameScreen.width;
export let ctx = gameScreen.getContext('2d');

let difficultyArea = document.getElementById('difficulties');
let interactionButton = document.getElementById('interactionButton');

difficultyArea.style.display = 'none';

interactionButton.addEventListener('click', executeInteraction, false);

function executeInteraction() {
    apple();
}
import * as config from "./modules/config.js";
import {getDarkMode} from "./modules/darkTheme.js";
import {init} from "./utils/utils.js";

let difficultyArea = document.getElementById('difficulties');

difficultyArea.style.display = 'none';

config.interactionButton.addEventListener('click', executeInteraction, false);

config.darkModeButton.addEventListener('click', getDarkMode, false);


function executeInteraction() {
    lockButtons();
    init();
}

function lockButtons() {
    config.interactionButton.setAttribute('disabled', 'disabled');
}
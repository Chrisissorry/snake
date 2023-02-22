import * as config from "./config.js";

let darkMode = localStorage.getItem("dark-mode");

if (darkMode === null) {
    localStorage.setItem("dark-mode", "disabled");
}

const enableDarkMode = () => {
    config.gameScreen.style.backgroundColor = '#535252';
    document.body.style.backgroundColor = '#838282';
    config.darkModeChanger.setAttribute('src', 'images/lightmode.png');
    localStorage.setItem("dark-mode", "enabled");
};


const disableDarkMode = () => {
    config.gameScreen.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    config.darkModeChanger.setAttribute('src', 'images/nightmode.png');
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

export function getDarkMode () {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
        return
    }
    if (darkMode === "enabled") {
        disableDarkMode();
    }
}

let interval_id;
let speed = 1000;

let gamescreen = document.getElementById('gamescreen');
const leftWall = 0;
const topWall = 0;
let snakeSpawnX = 550;
let snakeSpawnY = 550;
const step = 10;
let direction;
let apple_position_x;
let apple_position_y;
let size = 1;
let appleCounter = 0;
let snake = [];
let deathReason;

let gamescreen_height = gamescreen.height;
let gamescreen_width = gamescreen.width;
let ctx = gamescreen.getContext('2d');

const SEGMENT_WIDTH = 10;
const SEGMENT_HEIGHT = 10;

let gameDifficultyEasy = document.getElementById('difficultyEasy');
let gameDifficultyMedium = document.getElementById('difficultyMedium');
let gameDifficultyHard = document.getElementById('difficultyHard');

let modal = document.getElementById("endModal");
let modalCloseButton = document.getElementById("closeButton");
let modalResetButton = document.getElementById("resetButton");
let modalText = document.getElementById("modalText");

let screenHeight = document.getElementById("fullScreen");

let counterTimer = 5;
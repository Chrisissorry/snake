gameDifficultyEasy.addEventListener('click', () => startGame('easy'), false);

gameDifficultyMedium.addEventListener('click', () => startGame('medium'), false);

gameDifficultyHard.addEventListener('click', () => startGame('hard'), false);

function startGame(difficulty) {
    switch (difficulty) {
        case 'easy':
            speed = 200;
            break;
        case 'medium':
            speed = 130;
            break;
        case 'hard':
            speed = 60;
            break;
    }
    lockButtons();
    init_apple();
    interval_id = setInterval(draw, speed);
}

function lockButtons() {
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
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
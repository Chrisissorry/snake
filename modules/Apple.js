export class Apple {
    constructor(maxPositionX, maxPositionY, snakeBody) {
        this.positionX = 0;
        this.positionY = 0;
        this.maxPositionX = maxPositionX;
        this.maxPositionY = maxPositionY;
        this.initApple(snakeBody);
    }

    initApple(snakeBody) {
        do {
            this.positionX = this.getRandomInt(0, this.maxPositionX);
            this.positionY = this.getRandomInt(0, this.maxPositionY);
            this.onSnake(snakeBody);
        } while (this.onSnake(snakeBody))
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }

    onSnake(body) {
        body.forEach(segment => {
            if (segment.x === this.positionX && segment.y === this.positionY) {
                return true;
            }

            return false;
        });
    }
}

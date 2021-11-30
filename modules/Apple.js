export class Apple {

    constructor(maxPositionX, maxPositionY, body) {
        this.positionX = maxPositionX;
        this.positionY = maxPositionY;
        this.body = body;
    }

    initApple() {
        this.applePositionX = this.getRandomInt(0, this.positionX);
        this.applePositionY = this.getRandomInt(0, this.positionY);
        if (this.body.x === this.applePositionX && this.body.y === this.applePositionY) {
            return this.initApple();
        }
        return [this.applePositionX, this.applePositionY];
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }
}

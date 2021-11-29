export class Apple {

    constructor(maxPositionX, maxPositionY) {
        this.positionX = maxPositionX;
        this.positionY = maxPositionY;
    }

    initApple() {
        this.applePositionX = this.getRandomInt(0, this.positionX);
        this.applePositionY = this.getRandomInt(0, this.positionY);
        return [this.applePositionX, this.applePositionY];
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
    }
}

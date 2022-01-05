export class Apple {
  constructor(maxPositionX, maxPositionY, body) {
    this.positionX = maxPositionX;
    this.positionY = maxPositionY;
    this.body = body;
  }

  initApple() {
    do {
      this.onSnakeSegment = false;
      this.applePositionX = this.getRandomInt(0, this.positionX);
      this.applePositionY = this.getRandomInt(0, this.positionY);
      this.onSnake();
    } while (this.onSnakeSegment);
    return [this.applePositionX, this.applePositionY];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(((Math.random() * (max - min + 1)) + min) / 10) * 10;
  }

  onSnake() {
    this.applePosition = { x: this.applePositionX, y: this.applePositionY };
    this.i = this.body.length + 1;
    for (this.i; this.i > 0; this.i--) {
      this.segment = this.body.shift();
      if (this.segment.x === this.applePosition.x && this.segment.y === this.applePosition.y) {
        this.onSnakeSegment = true;
        this.body.push(this.segment);
        break;
      }
      this.body.push(this.segment);
    }
  }
}

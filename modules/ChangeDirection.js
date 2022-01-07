export default class ChangeDirection {
  constructor(keyCode, direction) {
    this.keyCode = keyCode;
    this.direction = direction;
  }

  changeDirection() {
    switch (this.keyCode) {
      // left
      case 37:
        if (this.direction === 'right') break;
        this.direction = 'left';
        break;
        // up
      case 38:
        if (this.direction === 'down') break;
        this.direction = 'up';
        break;
        // right
      case 39:
        if (this.direction === 'left') break;
        this.direction = 'right';
        break;
        // down
      case 40:
        if (this.direction === 'up') break;
        this.direction = 'down';
        break;
      default:
        break;
    }
  }
}

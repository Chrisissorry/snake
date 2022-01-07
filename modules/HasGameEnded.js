export default class HasGameEnded {
  constructor(body, gameScreenWidth, gameScreenHeight) {
    this.body = body;
    this.gameScreenWidth = gameScreenWidth;
    this.gameScreenHeight = gameScreenHeight;
  }

  hasGameEnded() {
    for (let i = 1; i < this.body.length; i += 1) {
      if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y) return true;
    }
    const hitLeftWall = this.body[0].x < 0;
    const hitRightWall = this.body[0].x > this.gameScreenWidth - 10;
    const hitTopWall = this.body[0].y < 0;
    const hitBottomWall = this.body[0].y > this.gameScreenHeight - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
  }
}

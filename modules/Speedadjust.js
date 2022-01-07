export default class SpeedAdjust {
  constructor(difficulty, timeout) {
    this.difficulty = difficulty;
    this.timeout = timeout;
  }

  adjustSpeedBySize() {
    switch (this.difficulty) {
      // easy
      case 1: {
        if (this.timeout > 150) {
          this.timeout -= 5;
        }
        break;
      }
      // medium
      case 2: {
        if (this.timeout > 100) {
          this.timeout -= 5;
        }
        break;
      }
      // hard
      case 3: {
        if (this.timeout > 50) {
          this.timeout -= 5;
        }
        break;
      }
      default:
        break;
    }
  }
}

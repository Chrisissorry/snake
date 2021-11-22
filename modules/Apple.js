import {Snake} from "./Snake";

const snake = new Snake()

export class Apple {
    constructor() {
        this.randomApple = 90;
    }
    randomFood(min, max) {
        this.randomApple = Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }

   /* genFood() {
        this.food_x = this.randomFood(0, snakeboard.width - 10);
        this.food_y = this.randomFood(0, snakeboard.height - 10);
        snake.body.forEach(function has_snake_eaten_food(part) {
            this.hasEaten = part.x === this.food_x && part.y === this.food_y;
            
            
        });
    }*/
}

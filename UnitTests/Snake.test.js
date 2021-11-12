import {Snake} from "../modules/Snake";

test("Initialize Snake", () => {
    const snake = new Snake();
    expect(snake).toBeTruthy();
})

test("Snake is drawn", () => {
    const snake = new Snake();
    snake.draw();
})
import {Snake} from "../modules/Snake";

describe("Constructor", () => {
    
    test("Initialize Constructor", () => {
        const snake = new Snake();
        expect(snake.constructor).toBeTruthy();
    });
});

describe("Snake body", () => {
    
    test("Initialize Snake", () => {
        const snake = new Snake();
        expect(snake).toBeTruthy();
    });

    test("Snake is initializing with three segments", () => {
        const snake = new Snake();
        expect(snake.length).toBe(3);
    });

    test("Initialize Snake Head", () => {
        const snake = new Snake();
        expect(snake.head).toBeTruthy();
    })
});

describe("Function checkDirection", () => {
    
    test("Initialize CheckDirection", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        expect(snake.checkDirection).toBeTruthy();
    });

    test("CheckDirection is called", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.checkDirection();
        expect(snake.checkDirection).toHaveBeenCalled();
    })

    test("CheckDirection case right", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = 0;
        snake.dy = 10;
        snake.checkDirection(37);
        expect(snake.dx).toBe(10);
    })
    test("CheckDirection case down", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = -10;
        snake.dy = 0;
        snake.checkDirection(38);
        expect(snake.dx).toBe(0);
    })

    test("CheckDirection case left", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = 0;
        snake.dy = 10;
        snake.checkDirection(39);
        expect(snake.dy).toBe(0);
    })

    test("CheckDirection case up", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = 10;
        snake.dy = 0;
        snake.checkDirection(40);
        expect(snake.dy).toBe(-10);
    })

    test("Changing_direction calls back", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = 0;
        snake.dy = 10;
        snake.checkDirection(37);
        expect(snake.changing_direction).toBeTruthy();
    })

    test("Changing_direction works", () => {
        const snake = new Snake();
        jest.spyOn(snake, "checkDirection");
        snake.dx = 0;
        snake.dy = 10;
        snake.checkDirection(37);
        expect(snake.changing_direction).toBeTruthy();
    })

    test("Snake cant revert", () => {
        const snake = new Snake();
        snake.dx = 0;
        snake.dy = 10;
        snake.checkDirection(40);
        expect(snake.dy).toBe(10);
    })
})

describe("Function move", () => {
    
    test("Initialize move", () => {
        const snake = new Snake();
        expect(snake.move).toBeTruthy();
    })

    test("move returns the Head", () => {
        const snake = new Snake();
        snake.move();
        expect(snake.head).toBeDefined();
    })
})
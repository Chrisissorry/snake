import {Apple} from "../modules/Apple";

describe("Function Init Apple", () => {

    test("Position is in the game field", () => {
        const apple = new Apple(600, 600, [
            {x: 200, y: 200},
            {x: 190, y: 200},
            {x: 180, y: 200},
            {x: 170, y: 200},
            {x: 160, y: 200}]);

        expect(apple.applePositionX).toBeGreaterThanOrEqual(0);
        expect(apple.applePositionX).toBeLessThanOrEqual(600);
        expect(apple.applePositionY).toBeGreaterThanOrEqual(0);
        expect(apple.applePositionY).toBeLessThanOrEqual(600);
    });

    test("position is not above the game field", () => {
        const apple = new Apple(600, 600, [
            {x: 200, y: 200},
            {x: 190, y: 200},
            {x: 180, y: 200},
            {x: 170, y: 200},
            {x: 160, y: 200}]);

        expect(apple.applePositionX).not.toBeGreaterThan(600);
        expect(apple.applePositionX).not.toBeLessThan(0);
        expect(apple.applePositionY).not.toBeGreaterThan(600);
        expect(apple.applePositionY).not.toBeLessThan(0);
    });

    test("Apple will generate only on free segment", () => {
        const apple = new Apple(20, 20, [
            {x: 0, y: 0},
            {x: 10, y: 10},
            {x: 20, y: 0},
            {x: 0, y: 10},
            {x: 20, y: 10},
            {x: 0, y: 20},
            {x: 10, y: 20},
            {x: 20, y: 20},]);

        expect(apple.applePositionX).toBe(10);
        expect(apple.applePositionY).toBe(10);
    })

});

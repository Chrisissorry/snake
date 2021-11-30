import {Apple} from "../modules/Apple";

describe("Function Init Apple", () => {
    
    const apple = new Apple(600, 600);
    jest.retryTimes(20)
    
    test("Position is in the game field", () => {
        
        apple.initApple();
        expect(apple.applePositionX).toBeGreaterThanOrEqual(0);
        expect(apple.applePositionX).toBeLessThanOrEqual(600);
        expect(apple.applePositionY).toBeGreaterThanOrEqual(0);
        expect(apple.applePositionY).toBeLessThanOrEqual(600);
    });
    
    test("position is not above the game field", () => {
        
        apple.initApple();
        expect(apple.applePositionX).not.toBeGreaterThan(600);
        expect(apple.applePositionX).not.toBeLessThan(0);
        expect(apple.applePositionY).not.toBeGreaterThan(600);
        expect(apple.applePositionY).not.toBeLessThan(0);
    });
});
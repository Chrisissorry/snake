import {Apple} from "../modules/Apple";

describe("Function randomFood", () => {
    
    const apple = new Apple();
    
    test("Init random Apple", () => {
        expect(apple.randomFood).toBeTruthy();
    })
    
    test("randomFood returns something", () => {
        jest.spyOn(apple, "randomFood");
        apple.randomFood(100, 200);
        expect(apple.randomFood).toReturn();
    })
    
    test("randomFood is between min and max", () => {
        jest.retryTimes(100);
        jest.spyOn(apple, "randomFood")
        apple.randomFood(100, 200);
        expect(apple.randomApple).toBeGreaterThanOrEqual(100)
        expect(apple.randomApple).toBeLessThanOrEqual(200)
    })
})
import Snake from '../modules/Snake';

describe('function checkDirection', () => {
  test('checkDirection right is working', () => {
    const snake = new Snake('right', 0, -10);
    snake.checkDirection();
    expect(snake.dx).toBe(10);
    expect(snake.dy).toBe(0);
  });

  test('checkDirection left is working', () => {
    const snake = new Snake('left', 0, -10);
    snake.checkDirection();
    expect(snake.dx).toBe(-10);
    expect(snake.dy).toBe(0);
  });

  test('checkDirection down is working', () => {
    const snake = new Snake('down', -10, 0);
    snake.checkDirection();
    expect(snake.dx).toBe(0);
    expect(snake.dy).toBe(10);
  });

  test('checkDirection up is working', () => {
    const snake = new Snake('up', -10, 0);
    snake.checkDirection();
    expect(snake.dx).toBe(0);
    expect(snake.dy).toBe(-10);
  });

  test('checkDirection move reverse to right is not working', () => {
    const snake = new Snake('right', -10, 0);
    snake.checkDirection();
    expect(snake.dx).toBe(-10);
    expect(snake.dy).toBe(0);
  });

  test('checkDirection move reverse to left is not working', () => {
    const snake = new Snake('left', 10, 0);
    snake.checkDirection();
    expect(snake.dx).toBe(10);
    expect(snake.dy).toBe(0);
  });

  test('checkDirection move reverse to up is not working', () => {
    const snake = new Snake('up', 0, 10);
    snake.checkDirection();
    expect(snake.dx).toBe(0);
    expect(snake.dy).toBe(10);
  });

  test('checkDirection move reverse to down is not working', () => {
    const snake = new Snake('down', 0, -10);
    snake.checkDirection();
    expect(snake.dx).toBe(0);
    expect(snake.dy).toBe(-10);
  });
});

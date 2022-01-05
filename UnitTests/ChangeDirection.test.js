import { ChangeDirection } from '../modules/ChangeDirection';

describe('Function changeDirection', () => {
  test('left is working', () => {
    const changeDirection = new ChangeDirection(37, 'up');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('left');
  });

  test('up is working', () => {
    const changeDirection = new ChangeDirection(38, 'right');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('up');
  });

  test('right is working', () => {
    const changeDirection = new ChangeDirection(39, 'up');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('right');
  });

  test('left is working', () => {
    const changeDirection = new ChangeDirection(40, 'right');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('down');
  });

  test('cant revert from left', () => {
    const changeDirection = new ChangeDirection(39, 'left');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('left');
  });

  test('cant revert from up', () => {
    const changeDirection = new ChangeDirection(40, 'up');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('up');
  });

  test('cant revert from right', () => {
    const changeDirection = new ChangeDirection(37, 'right');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('right');
  });

  test('cant revert from down', () => {
    const changeDirection = new ChangeDirection(38, 'down');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('down');
  });

  test('other Keycode doesnt do anything', () => {
    const changeDirection = new ChangeDirection(52, 'down');
    changeDirection.changeDirection();
    expect(changeDirection.direction).toBe('down');
  });
});

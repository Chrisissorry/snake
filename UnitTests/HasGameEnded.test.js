import { HasGameEnded } from '../modules/HasGameEnded';

describe('function hasGameEnded', () => {
  test('hasGameEnded is not returning anything', () => {
    const hasGameEnded = new HasGameEnded([
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeFalsy();
  });

  test('hitLeftWall is working', () => {
    const hasGameEnded = new HasGameEnded([
      { x: -10, y: 200 },
      { x: 0, y: 200 },
      { x: 10, y: 200 },
      { x: 20, y: 200 },
      { x: 30, y: 200 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeTruthy();
  });

  test('hitRightWall is working', () => {
    const hasGameEnded = new HasGameEnded([
      { x: 600, y: 200 },
      { x: 590, y: 200 },
      { x: 580, y: 200 },
      { x: 570, y: 200 },
      { x: 560, y: 200 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeTruthy();
  });

  test('hitTopWall is working', () => {
    const hasGameEnded = new HasGameEnded([
      { x: 600, y: 0 },
      { x: 590, y: 10 },
      { x: 580, y: 20 },
      { x: 570, y: 30 },
      { x: 560, y: 40 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeTruthy();
  });

  test('hitBottomWall is working', () => {
    const hasGameEnded = new HasGameEnded([
      { x: 600, y: 560 },
      { x: 590, y: 570 },
      { x: 580, y: 580 },
      { x: 570, y: 590 },
      { x: 560, y: 600 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeTruthy();
  });

  test('self Collision is working', () => {
    const hasGameEnded = new HasGameEnded([
      { x: 230, y: 220 },
      { x: 240, y: 220 },
      { x: 240, y: 230 },
      { x: 230, y: 230 },
      { x: 230, y: 220 },
    ], 600, 600);
    hasGameEnded.hasGameEnded();
    expect(hasGameEnded.hasGameEnded()).toBeTruthy();
  });
});

import { SpeedAdjust } from '../modules/Speedadjust';

describe('Function SpeedAdjust', () => {
  test('timeout is reduce case 1', () => {
    const speedAdjust = new SpeedAdjust(1, 200);
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(199);
  });

  test('timeout is reduce case 2', () => {
    const speedAdjust = new SpeedAdjust(2, 200);
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(199);
  });

  test('timeout is reduce case 3', () => {
    const speedAdjust = new SpeedAdjust(3, 200);
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(199);
  });

  test('timeout is not reduce case 4', () => {
    const speedAdjust = new SpeedAdjust(4, 200);
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(200);
  });

  test('timeout is reduce to right worth case 1', () => {
    const speedAdjust = new SpeedAdjust(1, 151);
    speedAdjust.adjustSpeedBySize();
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(150);
  });

  test('timeout is reduce to right worth case 2', () => {
    const speedAdjust = new SpeedAdjust(2, 101);
    speedAdjust.adjustSpeedBySize();
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(100);
  });

  test('timeout is reduce to right worth case 3', () => {
    const speedAdjust = new SpeedAdjust(3, 51);
    speedAdjust.adjustSpeedBySize();
    speedAdjust.adjustSpeedBySize();
    expect(speedAdjust.timeout).toBe(50);
  });
});

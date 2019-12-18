import Daemon from './daemon';
import Magician from './magician';

test('Magician attack, stoned = false', () => {
  const magician = new Magician(10, 40, false);
  expect(magician.attack(2)).toBe(0);
});

test('Daemon attack, stoned = true (result < 0)', () => {
  const daemon = new Daemon(10, 40, true);
  expect(daemon.attack(2)).toBe(0);
});

test('Daemon attack, stoned = true (result > 0)', () => {
  const daemon = new Daemon(50, 40, true);
  expect(daemon.attack(2)).toBe(35);
});

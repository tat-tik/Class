import Character from '../Character';
import Daemon from '../daemon';

test('Daemon', () => {
  const received = new Daemon('Демон', 'Daemon');
  const expected = {
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('name Daemon', () => {
  expect(() => new Character('X', 'Daemon')).toThrow();
});

test('type Daemon', () => {
  expect(() => new Daemon('Демон', 'Bowman')).toThrow();
});
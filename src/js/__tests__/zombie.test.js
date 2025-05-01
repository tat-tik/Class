import Character from '../Character';
import Zombie from '../zombie';

test('Zombie', () => {
  const received = new Zombie('Зомби', 'Zombie');
  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('name Zombie', () => {
  expect(() => new Character('X', 'Zombie')).toThrow();
});

test('type Zombie', () => {
  expect(() => new Zombie('Зомби', 'Bowman')).toThrow();
});
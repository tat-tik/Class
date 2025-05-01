import Character from '../Character';
import Swordsman from '../swordsman';

test('Swordsman', () => {
  const received = new Swordsman('Воин', 'Swordsman');
  const expected = {
    name: 'Воин',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('name Swordsman', () => {
  expect(() => new Character('X', 'Swordsman')).toThrow();
});

test('type Swordsman', () => {
  expect(() => new Swordsman('Воин', 'Bowman')).toThrow();
});
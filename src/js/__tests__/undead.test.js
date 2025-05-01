import Character from '../Character';
import Undead from '../undead';

test('Undead', () => {
  const received = new Undead('Безсмертный', 'Undead');
  const expected = {
    name: 'Безсмертный',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('name Undead', () => {
  expect(() => new Character('X', 'Undead')).toThrow();
});

test('type Undead', () => {
  expect(() => new Undead('Безсмертный', 'Bowman')).toThrow();
});

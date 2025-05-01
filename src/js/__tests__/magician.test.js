import Character from '../Character';
import Magician from '../magician';

test('Magician', () => {
  const received = new Magician('Волшебник', 'Magician');
  const expected = {
    name: 'Волшебник',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('name Magician', () => {
  expect(() => new Character('X', 'Magician')).toThrow();
});

test('type Magician', () => {
  expect(() => new Magician('Волшебник', 'Bowman')).toThrow();
});
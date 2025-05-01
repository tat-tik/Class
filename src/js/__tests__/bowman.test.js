import Character from '../Character';
import Bowman from '../bowman';

test('Bowman', () => {
  const received = new Bowman('Стрелок', 'Bowman');
  const expected = {
    name: 'Стрелок',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('name Bowman', () => {
  expect(() => new Character('X', 'Bowman')).toThrow();
});

test('type Bowman', () => {
  expect(() => new Bowman('Стрелок', 'daemon')).toThrow();
});
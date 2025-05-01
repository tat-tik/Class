
import Undead from '../undead';

test('Undead', () => {
  const received = new Undead('Вампир', 'undead');
  const expected = {
    name: 'Вампир',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});


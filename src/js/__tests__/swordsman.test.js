import Character from '../Character';
import Swordsman from '../swordsman';

test('Swordsman', () => {
  const received = new Swordsman('Воин', 'swordsman');
  const expected = {
    name: 'Воин',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});


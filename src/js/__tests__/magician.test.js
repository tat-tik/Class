import Character from '../Character';
import Magician from '../magician';

test('Magician', () => {
  const received = new Magician('Волшебник', 'magician');
  const expected = {
    name: 'Волшебник',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});


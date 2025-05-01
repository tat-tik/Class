import Character from '../Character';
import Zombie from '../zombie';

test('Zombie', () => {
  const received = new Zombie('Зомби', 'zombie');
  const expected = {
    name: 'Зомби',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});


import Character from '../Character';
import Daemon from '../daemon';

test('Daemon', () => {
  const received = new Daemon('Демон', 'daemon');
  const expected = {
    name: 'Демон',
    type: 'daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});


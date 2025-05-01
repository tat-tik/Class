import Bowman from '../bowman';

test('Bowman', () => {
  const received = new Bowman('Стрелок', 'bowman');
  const expected = {
    name: 'Стрелок',
    type: 'bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});


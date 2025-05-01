import Character from '../Character';

test('Имя должно быть больше 2 символов', () => {
  expect(() => new Character('X', 'zombie')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('Имя должно быть меньше 10 символов', () => {
  expect(() => new Character('Xxxxxxxxxxxxxx', 'zombie')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('Некорректный тип', () => {
  expect(() => new Character('Зомби', 'bowerman')).toThrow(new Error('Ошибка! Некорректный тип персонажа!'));
});
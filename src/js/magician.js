import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    if (type !== 'magician') {
      throw new Error('Ошибка. Некорректный тип персонажа');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

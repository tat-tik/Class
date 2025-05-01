import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    if (type !== 'swordsman') {
      throw new Error('Ошибка. Некорректный тип персонажа');
    }
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

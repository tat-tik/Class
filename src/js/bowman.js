import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type) {
    if (type !== 'bowman') {
      throw new Error('Ошибка. Некорректный тип персонажа');
    }
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}


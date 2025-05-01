import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    if (type !== 'daemon') {
      throw new Error('Ошибка. Некорректный тип персонажа');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
              throw new Error('Ошибка. Некорректное имя персонажа');
          } else {
              this.name = name;
          }
          if (!Character.types.includes(type)) {
              throw new Error('Ошибка. Некорректный тип персонажа');
          } else {
              this.type = type;
          }
          this.health = 100;
          this.level = 1;
      }
    }


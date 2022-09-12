export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Daemon', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('неверное имя');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('неверный тип');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}

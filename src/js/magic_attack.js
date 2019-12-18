export default class MagicAttack {
  constructor(attack, defence, stoned) {
    this.att = attack;
    this.def = defence;
    this.st = stoned;
  }

  get stoned() {
    return this.st;
  }

  set stoned(stoned) {
    this.st = stoned;
  }

  get attack() {
    return (x) => {
      let result = this.att - (x - 1) * 10;
      if (this.st === true) {
        result -= Math.log2(x) * 5;
      }
      if (result < 0) {
        result = 0;
      }
      return result;
    };
  }

  set attack(attack) {
    this.att = attack;
  }
}

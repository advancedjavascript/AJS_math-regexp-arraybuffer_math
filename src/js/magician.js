import MagicAttack from './magic_attack';

export default class Magician extends MagicAttack {
  constructor(attack, defence, stoned) {
    super(attack, defence, stoned);
    this.type = 'Magician';
  }
}

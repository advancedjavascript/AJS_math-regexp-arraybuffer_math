import MagicAttack from './magic_attack';

export default class Daemon extends MagicAttack {
  constructor(attack, defence, stoned) {
    super(attack, defence, stoned);
    this.type = 'Daemon';
  }
}

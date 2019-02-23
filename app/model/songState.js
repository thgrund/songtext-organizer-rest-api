/**
 * Driver Entity (ES6 Class)
 */

class SongState {
  constructor(id, state, order) {
    this.id = id;
    this.state = state;
    this.order = order;
  }
}

module.exports = SongState;
const assert = require('chai').assert;

describe('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player('Test Player');
  });

  describe('playCard()', function() {
    it('should remove and return the first card in the player\'s hand', function() {
      player.hand = [new Card('2', 'hearts'), new Card('3', 'diamonds')];
      assert.deepEqual(player.playCard(), new Card('2', 'hearts'));
      assert.deepEqual(player.hand, [new Card('3', 'diamonds')]);
    });
  });
});

const should = require('should');
const assert = require('chai').assert;
const Game = require('../src/game');
const { DemoPlayer } = require('../src/player');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(new DemoPlayer(), new DemoPlayer());
  });

  it('create a new instance', (done) => {
    should.exist(game);
    done();
  });

  it('calling referee method', (done) => {
    should.equal(game.referee(1, 2), 1);
    should.equal(game.referee(2, 3), 1);
    should.equal(game.referee(3, 1), 1);

    should.equal(game.referee(2, 1), 2);
    should.equal(game.referee(3, 2), 2);
    should.equal(game.referee(1, 3), 2);

    should.equal(game.referee(2, 2), 0);
    should.equal(game.referee(3, 3), 0);
    should.equal(game.referee(1, 1), 0);
    done();
  });

  it('calling play method', (done) => {
    game.playRound().then((values) => {
      assert.isAbove(values[0].throw, 0);
      assert.isBelow(values[0].throw, 4);
      assert.isAbove(values[1].throw, 0);
      assert.isBelow(values[1].throw, 4);
      done();
    });
  });
});

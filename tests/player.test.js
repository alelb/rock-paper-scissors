const should = require('should');
const assert = require('chai').assert;
const { BasePlayer, DemoPlayer, Player } = require('../src/player');
const bddStdin = require('bdd-stdin');

describe('BasePlayer', () => {
  let basePlayer;

  beforeEach(() => {
    basePlayer = new BasePlayer();
  });

  it('create a new instance', (done) => {
    should.exist(basePlayer);
    done();
  });

  it('calling play method thow an error', (done) => {
    (() => {
      basePlayer.play();
    }).should.throw();
    done();
  });
});

describe('DemoPlayer', () => {
  let demoPlayer;

  beforeEach(() => {
    demoPlayer = new DemoPlayer();
  });

  it('create a new instance', (done) => {
    should.exist(demoPlayer);
    done();
  });

  it('calling play method returns a valid value', (done) => {
    demoPlayer.play().then((value) => {
      assert.isAbove(value.throw, 0);
      assert.isBelow(value.throw, 4);
      done();
    });
  });
});

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('create a new instance', (done) => {
    should.exist(player);
    done();
  });

  it('calling play method returns a valid value', (done) => {
    bddStdin(bddStdin.keys.down, bddStdin.keys.down, '\n');

    player.play().then((value) => {
      assert.equal(value.throw, '1');
      done();
    });
  });
});


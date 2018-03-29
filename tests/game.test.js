const should = require('should')
const assert = require('chai').assert
const suite = require('mocha').suite
const { Game } = require('../src/game')
const { DemoPlayer } = require('../src/player')

suite('Game', () => {
    let game

    beforeEach(() => {
        game = new Game(new DemoPlayer(), new DemoPlayer())
    })

    it('create a new instance', (done) => {
        should.exist(game)
        done()
    })

    it('calling referee method', (done) => {
        should.equal(game.referee(1,2), 1)
        should.equal(game.referee(2,3), 1)
        should.equal(game.referee(3,1), 1)

        should.equal(game.referee(2,1), 2)
        should.equal(game.referee(3,2), 2)
        should.equal(game.referee(1,3), 2)

        should.equal(game.referee(2,2), 0)
        should.equal(game.referee(3,3), 0)
        should.equal(game.referee(1,1), 0)
        done()
    })

    it('calling play method', (done) => {
        let value = game.count()
        let score = game.score

        if (value === 0) {
            assert.isTrue(score.player1 === score.player2)            
        } else if (value === 1) {
            assert.isAbove(score.player1, score.player2)
        } else {
            assert.isBelow(score.player1, score.player2)
        }
        done()
    })
})

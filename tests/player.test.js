const should = require('should')
const assert = require('chai').assert
const suite = require('mocha').suite
const { BasePlayer, DemoPlayer, Player } = require('../src/player')


suite('BasePlayer', () => {
    var basePlayer

    beforeEach(() =>  {
        basePlayer = new BasePlayer();
    })

    it('create a new instance', (done) => {
        should.exist(basePlayer)
        done()
    })

    it('calling play method thow an error', (done) => {
        (() => {
            basePlayer.play()
        }).should.throw()
        done()
    })
})

suite('DemoPlayer', () => {
    var demoPlayer

    beforeEach(function () {
        demoPlayer = new DemoPlayer();
    })

    it('create a new instance', (done) => {
        should.exist(demoPlayer)
        done()
    })

    it('calling play method returns a valid value', (done) => {
        var value = demoPlayer.play()
        
        assert.isAbove(value, 0)
        assert.isBelow(value, 4)

        done()
    })
})
const should = require('should')
const suite = require('mocha').suite
const { BasePlayer, DemoPlayer, Player } = require('../src/player')


suite('BasePlayer', () => {
    var basePlayer

    beforeEach(function () {
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
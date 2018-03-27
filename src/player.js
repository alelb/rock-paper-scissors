class BasePlayer {

    constructor(name) {
        this.name = name
    }

    play() {
        throw new Error('You have to implement the method play!');
    }
}


class DemoPlayer extends BasePlayer {

    // Generate a random int in the range [1-3]
    play() {
        return Math.floor(Math.random() * 3) + 1;
    }


}

class Player extends BasePlayer {

    play() {
        throw new Error('You have to implement the method play!');
    }

}


module.exports = { BasePlayer, DemoPlayer, Player}
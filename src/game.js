const ROCK = 3
const SCISSORS = 1
const PAPER = 2

class Game {

    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.scorePlayer1 = 0
        this.scorePlayer2 = 0
    }

    count() {
        //Promise.all([this.player1.play(), this.player2.play()]).then(values => {    
        var result = this.referee(this.player1.play(), this.player2.play())
        switch(result){
            case 0:
                break
            case 1:
                this.scorePlayer1++
                break
            case 2:
                this.scorePlayer2++
                break
            default:
                break
        }
        return result
        //})
    }

    referee(choise1, choise2) {

        var x = choise1-choise2

        if(x === -1 || x === 2) {
            return 1
        } else if (x === 1 || x === -2) {
            return 2
        } else return 0

    }

    get score() {
        return {
            "player1": this.scorePlayer1,
            "player2": this.scorePlayer2
        }
    }
}

module.exports = { Game }
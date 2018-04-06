/*
const ROCK = 3;
const SCISSORS = 1;
const PAPER = 2;
 */

class Game {
  constructor(player1, player2, score1 = 0, score2 = 0) {
    this.player1 = player1;
    this.player2 = player2;
    this.scorePlayer1 = score1;
    this.scorePlayer2 = score2;
  }

  playRound() {
    return Promise.all([this.player1.play(), this.player2.play()]);
  }

  referee(choise1, choise2) {
    const x = choise1 - choise2;
    let result = 0;
    if (x === -1 || x === 2) {
      result = 1;
    } else if (x === 1 || x === -2) {
      result = 2;
    } else result = 0;

    this.incr(result);

    return result;
  }

  get score() {
    return {
      player1: {
        name: this.player1.name,
        score: this.scorePlayer1,
      },
      player2: {
        name: this.player2.name,
        score: this.scorePlayer2,
      },
    };
  }

  incr(result) {
    switch (result) {
      case 0:
        break;
      case 1:
        this.scorePlayer1 += 1;
        break;
      case 2:
        this.scorePlayer2 += 1;
        break;
      default:
        break;
    }
  }
}

module.exports = Game;

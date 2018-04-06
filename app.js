
const Game = require('./src/game.js');
const { DemoPlayer, Player } = require('./src/player.js');
const configuration = require('./src/configurator.js');
const {
  printScore,
  printWinner,
  printThrows,
  printStartGame,
  printFinalWinner,
  waitCountdown,
} = require('./src/util.js');

function isTheEnd(score, bestof) {
  if (score.player1.score === score.player2.score) {
    return false;
  }
  return (score.player1.score === parseInt(bestof, 10) ||
  score.player2.score === parseInt(bestof, 10));
}

configuration.then((answers) => {
  printStartGame();

  let player1;
  let player2;

  // Instantiate players
  if (answers.mode === 'Challenge') {
    player1 = new Player(answers.name);
    player2 = new DemoPlayer('Computer');
  } else {
    answers.bestof = '1';
    player1 = new DemoPlayer('Computer1');
    player2 = new DemoPlayer('Computer2');
  }

  // Instantiate game
  const game = new Game(player1, player2);

  const recursivePlayRound = () => {
    const p = new Promise((resolve) => {
      game.playRound().then((values) => {
        printThrows(player1.name, player2.name, values[0].throw, values[1].throw);
        const result = game.referee(values[0].throw, values[1].throw);
        printWinner(player1.name, player2.name, result);
        resolve();
      });
    });

    p.then(() => {
      if (!isTheEnd(game.score, answers.bestof)) {
        printScore(game.score);

        const cb = () => {
          if (!isTheEnd(game.score, answers.bestof)) {
            recursivePlayRound();
          }
        };

        waitCountdown(cb);
      } else {
        printFinalWinner(game.score);
        printScore(game.score);
      }
    });
  };

  recursivePlayRound();
});

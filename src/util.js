const chalk = require('chalk');
const { mapperReverse } = require('./mapper.js');
const cli = require('clui');

const Spinner = cli.Spinner;


function printScore(score) {
  console.log('Results:');
  console.log(`${chalk.red.bold(score.player1.name)} ${score.player1.score}`);
  console.log(`${chalk.blue.bold(score.player2.name)} ${score.player2.score}`);
}

function printWinner(name1, name2, result) {
  switch (result) {
    case 1:
      console.log(`${chalk.red.bold(name1)} WINS!\n`);
      break;
    case 2:
      console.log(`${chalk.blue.bold(name2)} WINS!\n`);
      break;
    case 0:
      console.log('TIE!\n');
      break;
    default:
      break;
  }
}

function printFinalWinner(score) {
  const winner = score.player1.score > score.player2.score ?
    score.player1.name : score.player2.name;
  console.log(chalk.green.bold.underline(`${winner} WINS THE GAME!`));
}

function printThrows(name1, name2, value1, value2) {
  console.log(`\n${chalk.red.bold(name1)} threw ${mapperReverse(value1)}`);
  console.log(`${chalk.blue.bold(name2)} threw ${mapperReverse(value2)}`);
}

function printStartGame() {
  console.log(chalk.red.bold("Let's play\n"));
}

function waitCountdown(cb) {
  const countdown = new Spinner('Ready in 3 seconds...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
  countdown.start();

  let number = 3;
  const timeout = setInterval(() => {
    number -= 1;
    countdown.message(`Ready in ${number} seconds... `);
    if (number === 0) {
      countdown.stop();
      clearInterval(timeout);
      number = 3;
      cb();
    }
  }, 1000);
}

module.exports = {
  printScore,
  printWinner,
  printFinalWinner,
  printThrows,
  printStartGame,
  waitCountdown,
};

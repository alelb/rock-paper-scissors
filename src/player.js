const inquirer = require('inquirer');
const { mapper } = require('./mapper.js');

class BasePlayer {
  constructor(n) {
    this.xname = n;
  }

  play() {
    throw new Error('You have to implement the method play!');
  }


  get name() {
    return this.xname;
  }

  set name(newName) {
    this.xname = newName;
  }
}


class DemoPlayer extends BasePlayer {
  // Generate a random int in the range [1-3]
  play() {
    return new Promise((resolve) => {
      resolve({
        throw: Math.floor(Math.random() * 3) + 1,
      });
    });
  }
}

class Player extends BasePlayer {
  play() {
    return inquirer.prompt([
      {
        name: 'throw',
        message: "Let's throw!",
        type: 'list',
        choices: ['Rock', 'Paper', 'Scissors'],
        filter: choise => mapper(choise.toLowerCase()),
      },
    ]);
  }
}


module.exports = { BasePlayer, DemoPlayer, Player };

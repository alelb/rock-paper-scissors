const inquirer = require('inquirer');

const questions = [{
  name: 'mode',
  message: 'Choose the game mode',
  type: 'list',
  choices: ['Demo', 'Challenge'],
}, {
  name: 'name',
  message: "What's your name?",
  type: 'input',
  validate: (value) => {
    const pass = value.match(/^(\w+\S+)$/);
    if (pass) {
      return true;
    }
    return 'Please enter a valid name';
  },
  when: answers => answers.mode === 'Challenge',
}, {
  name: 'bestof',
  message: 'Best of?',
  type: 'list',
  choices: ['1', '3', '5'],
  when: answers => answers.mode === 'Challenge',

},
];


const configuration = new Promise((resolve) => {
  inquirer.prompt(questions).then((answers) => {
    resolve(answers);
  });
});

module.exports = configuration;

const mapper = (choise) => {
  let value = 0;
  switch (choise) {
    case 'rock':
      value = 3;
      break;
    case 'scissors':
      value = 1;
      break;
    case 'paper':
      value = 2;
      break;
    default:
      break;
  }
  return value;
};

const mapperReverse = (choise) => {
  let value = 0;
  switch (choise) {
    case 3:
      value = 'Rock';
      break;
    case 1:
      value = 'Scissors';
      break;
    case 2:
      value = 'Paper';
      break;
    default:
      break;
  }
  return value;
};

module.exports = { mapper, mapperReverse };

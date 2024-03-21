const numberToReversedDigits = number => {
  let result = 0;
  let savedNumber = number;
  while (savedNumber > 0) {
    result *= 10;
    result += savedNumber % 10;
    savedNumber = (savedNumber - (savedNumber % 10)) / 10;
  }
  return result;
};

module.exports = numberToReversedDigits;

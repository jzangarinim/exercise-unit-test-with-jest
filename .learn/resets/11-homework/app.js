// this is my function that sums two numbers
function sum(a, b) {
  return a + b;
}

let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

function fromEuroToDollar(euro) {
  let dollar = euro * oneEuroIs.USD;
  return dollar;
}

function fromDollarToYen(dollar) {
  let yen = fromEuroToDollar();
}

function fromYenToPound(yen) {
  let pound = fromDollarToYen();
}

// export the function to be used on other files
// (similar to the keyword `export` when using webpack)
module.exports = {
  sum,
  fromEuroToDollar,
};

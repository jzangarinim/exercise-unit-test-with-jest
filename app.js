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
  let yen = (dollar * oneEuroIs.JPY) / oneEuroIs.USD;
  let round = yen.toFixed(3);
  return Number(round);
}

function fromYenToPound(yen) {
  let pound = (yen * oneEuroIs.GBP) / oneEuroIs.JPY;
  let round = pound.toFixed(3);
  return Number(round);
}

console.log(fromYenToPound(200));
// export the function to be used on other files
// (similar to the keyword `export` when using webpack)
module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};

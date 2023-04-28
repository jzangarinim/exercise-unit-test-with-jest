// app.js file content
function sum(a, b) {
  return a + b;
}
console.log(sum(7, 3));

// one euro is:
let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

function fromEuroToDollar(euro) {
  return euro * oneEuroIs.USD;
}

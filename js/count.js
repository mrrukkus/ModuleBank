var input = document.querySelector('#number');
var sum = document.querySelector('.order-result__count');

var changeInputHandler = function () {
  var inputSum = parseInt(input.value, 10);
  var convertToPlus = function (negativeNum) {
    positiveNum = negativeNum * -1;
    return positiveNum;
  }
  var extractFraction = function () {
    if (Math.sign(input.value) == -1) {
      return (input.value % inputSum * 100) * -1;
    } else {
      return input.value % inputSum * 100;
    }
  }
  var leadZeroFraction = function () {
    var roundFraction = Math.round(extractFraction());
    if (roundFraction < 10) {
      return "0" + roundFraction;
    } else {
      return roundFraction;
    }
  }
  var formatSum = function (sumToConvert) {
    var newSum = sumToConvert.toString().split();
    newSum[0] = newSum[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    if (inputSum < 0) {
      sum.innerText = "– " + newSum[0] + "," + leadZeroFraction();
    } else {
      sum.innerText = newSum[0] + "," + leadZeroFraction();
    }
  }
  if (inputSum < 0) {
    var convertedNum = convertToPlus(inputSum);
    formatSum(convertedNum);
  } else {
    formatSum(inputSum);
  }
}

input.addEventListener('change', changeInputHandler);

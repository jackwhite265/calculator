let num1 = "";
let num2 = "";
let switcher = true;
let ans = 0;
let operator = "";
let equationString = "";

function numberSelect(digit) {
  if (switcher == false && digit != "enter") {
    console.log(digit);
    if (digit == "+" || digit == "-" || digit == "*" || digit == "/") {
      switcher == true;
      console.log(switcher);
      equationString += digit;
      num1 = parseFloat(num1);
      operator = digit;
      flipOperatorAccess();
    }
    else {
      num1 += digit;
      equationString += digit;
    }
  }

  else {

    num2 += digit;
    equationString += digit;
  }

  updateframe();
}

function backspace() {
  if (equationString[equationString.length - 1] == "+" || equationString[equationString.length - 1] == "-" || equationString[equationString.length - 1] == "*" || equationString[equationString.length - 1] == "/") {
    operator = "";
    switcher = false;
    num2 = "";
    equationString = equationString.substring(0, equationString.length - 1);
  } else {
    if (switcher == true) {
      num2 = num2.substring(0, num2.length - 1);
    } else {
      num1 = num1.substring(0, num1.length - 1);
    }
  }

  equationString = equationString.substring(0, equationString.length - 1);

  updateframe();
}
function updateframe() {
  document.getElementById("display").innerHTML = equationString;
}

function enter(var1) {
  if (var1 == 'halo') {
    return true;
  } else {
    return false;
  }
}

function flipOperatorAccess() {
  console.log("hello world");
  let operators = document.getElementsByClassName("operator");
  let numbers = document.getElementsByClassName("number");
  if (operators[0].disabled == false) {
    for (let index = 0; index < operators.length; index++) {
      operators[index].disabled = true;
    }
    for (let index = 0; index < numbers.length; index++) {
      numbers[index].disabled = false;
    }
  }
  else {
    if (operators[0].disabled == true) {
      for (let index = 0; index < operators.length; index++) {
        operators[index].disabled = false;
      }
      for (let index = 0; index < numbers.length; index++) {
        numbers[index].disabled = true;
      }
    }
  }


}

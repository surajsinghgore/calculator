let dialBox = document.getElementById("dialBox");
dialBox.innerHTML = 0;
var arr = [];
let result = document.getElementById("result");
result.style.display = "none";

const removeAll = () => {
  dialBox.innerHTML = "0";
  arr = [];
  result.style.display = "none";
};
const percentage = () => {
  dialBox.innerHTML += "<span>%</span>";
};
const removeOne = () => {
  let str = dialBox.innerText;

  let lastCharacter = str.charAt(str.length - 1);

  if (
    lastCharacter == "/" ||
    lastCharacter == "*" ||
    lastCharacter == "-" ||
    lastCharacter == "+" ||
    lastCharacter == "%"
  ) {
    let menu = document.getElementById("dialBox");
    menu.removeChild(menu.lastElementChild);
  } else {
    str = str.substring(0, str.length - 1);
    if (str == "") {
      dialBox.innerHTML = "0";
    } else {
      let newStr="";
      for (let index = 0; index < str.length; index++) {
        if (
          str[index] == "/" ||
          str[index] == "*" ||
          str[index] == "-" ||
          str[index] == "+" ||
          str[index] == "%"
        ) {
            newStr+="<span>"+str[index]+"</span>"
        } else {
          newStr += str[index];
        }
    }
    
        dialBox.innerHTML = newStr;
    }
  }
};
const divide = () => {
  dialBox.innerHTML += "<span>/</span>";
};
const multiple = () => {
  dialBox.innerHTML += "<span>*</span>";
};
const minus = () => {
  dialBox.innerHTML += "<span>-</span>";
};
const plus = () => {
  dialBox.innerHTML += "<span>+</span>";
};

// result calculate
const equal = () => {
  result.style.display = "block";
  let calcResult = eval(dialBox.innerText);
  result.innerText = calcResult;
};

const seven = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "7";
  } else {
    dialBox.innerHTML += "7";
  }
};
const eight = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "8";
  } else {
    dialBox.innerHTML += "8";
  }
};
const nine = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "9";
  } else {
    dialBox.innerHTML += "9";
  }
};
const four = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "4";
  } else {
    dialBox.innerHTML += "4";
  }
};
const five = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "5";
  } else {
    dialBox.innerHTML += "5";
  }
};
const six = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "6";
  } else {
    dialBox.innerHTML += "6";
  }
};
const one = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "1";
  } else {
    dialBox.innerHTML += "1";
  }
};
const two = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "2";
  } else {
    dialBox.innerHTML += "2";
  }
};
const three = () => {
  if (dialBox.innerText == "0") {
    dialBox.innerHTML = "3";
  } else {
    dialBox.innerHTML += "3";
  }
};
const zeroZero = () => {
  dialBox.innerHTML += "00";
};
const zero = () => {
  dialBox.innerHTML += "0";
};
const dot = () => {
  dialBox.innerHTML += ".";
};

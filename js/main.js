finalText = "Abel Paz!";

// declare all characters

const characters =
  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

iterations = finalText.length + 20;
function randomstr() {
  numberStr = Math.random();
  numberStr *= characters.length;
  numberStr = Math.floor(numberStr); //valor redondeado mas bajo
  outNumber = characters[numberStr];
  return outNumber;
}

var arrayText = [];

for (i = 0; i < finalText.length; i++) {
  arraySwp = [];
  arrayText.push(arraySwp);
}

for (i = 0; i < finalText.length; i++) {
  arraySwp = arrayText[i];
  for (j = 0; j < iterations - 20 * Math.random(); j++) {
    arraySwp.push(randomstr());
  }
  arraySwp.push(finalText[i]);
}

// here we have ready arrays of random characters ending in expected letter///
counter = 0;

const elementOut = document.getElementById("output");

for (i = 0; i < finalText.length; i++) {
  const outputPart = document.createElement("div");
  outputPart.classList.add("letters");
  elementOut.appendChild(outputPart);
  ouputList = document.getElementsByClassName("letters");
}

function change() {
  for (i = 0; i < finalText.length; i++) {
    arrayNumber = arrayText[i];
    if (counter < arrayNumber.length) {
      ouputList[i].innerHTML = arrayNumber[counter];
    } else {
      ouputList[i].innerHTML = arrayNumber[arrayNumber.length - 1];
    }
  }

  counter++;
}

const inst = setInterval(change, 100);

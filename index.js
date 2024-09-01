// TODO: this file! :)
/*
const addNumber = document.getElementById("Adding");

addNumber.addEventListener("click", function(event){
    event.preventDefault()
    console.log (document.getElementById("number").value)

})
const number = parseFloat(inputValue);
if (!notV(number)) {
    const listItem = document.createElement("li");
    listItem.textContent = number;
    numberBankOutput.appendChild(listItem);

    document.getElementById("number").value = "";
};



const sortOneBtn = document.getElementById("sortOne");
const sortAllBtn = document.getElementById("sortAll");
const oddsOutput = document.getElementById("#odds output");
const evensOutput = document.querySelector("#evens output");


let oddNumbers = [];
let evenNumbers = [];
sortOneBtn.addEventListener("click", function () {
  const firstNumberBankItem = numberBankOutput.querySelector("li");
  if (firstNumberBankItem) {
    const number = parseFloat(firstNumberBankItem.textContent);
    if (!isNaN(number)) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
        evensOutput.textContent = evenNumbers.join(", ");
      } else {
        oddNumbers.push(number);
        oddsOutput.textContent = oddNumbers.join(", ");
      }
      numberBankOutput.removeChild(firstNumberBankItem);
    }
  }
});

sortAllBtn.addEventListener("click", function () {
  const numberBankItems = numberBankOutput.querySelectorAll("li");
  numberBankItems.forEach(function (item) {
    const number = parseFloat(item.textContent);
    if (!isNaN(number)) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      } else {
        oddNumbers.push(number);
      }
      numberBankOutput.removeChild(item);
    }
  });
  evensOutput.textContent = evenNumbers.join(", ");
  oddsOutput.textContent = oddNumbers.join(", ");
});
 */
document.addEventListener("DOMContentLoaded", function () {
  const addNumber = document.getElementById("Adding");
  const numberBankOutput = document.getElementById("numberBankOutput");
  const oddsOutput = document.getElementById("odds");
  const evensOutput = document.getElementById("evens");

  let oddNumbers = [];
  let evenNumbers = [];

  if (addNumber && numberBankOutput && oddsOutput && evensOutput) {
    addNumber.addEventListener("click", function (event) {
      event.preventDefault();
      const inputValue = document.getElementById("number").value;
      const number = parseFloat(inputValue);
      if (!isNaN(number)) {
        const listItem = document.createElement("li");
        listItem.textContent = number;
        numberBankOutput.appendChild(listItem); // Ensure numberBankOutput exists//Add Item to list

        //Clear Input Field

        document.getElementById("number").value = "";

        //update the odd/even arrays displays

        if (number % 2 === 0) {
          evenNumbers.push(number);
          evensOutput.textContent = evenNumbers.join(", ");
        } else {
          oddNumbers.push(number);
          oddsOutput.textContent = oddNumbers.join(", ");
        }
      }
    });
  }

  const sortOneBtn = document.getElementById("sortOne");
  const sortAllBtn = document.getElementById("sortAll");

  if (sortOneBtn && numberBankOutput && oddsOutput && evensOutput) {
    sortOneBtn.addEventListener("click", function () {
      const firstNumberBankItem = numberBankOutput.querySelector("li");
      if (firstNumberBankItem) {
        const number = parseFloat(firstNumberBankItem.textContent);
        if (!isNaN(number)) {
          if (number % 2 === 0) {
            evenNumbers.push(number);
            evensOutput.textContent = evenNumbers.join(", ");
          } else {
            oddNumbers.push(number);
            oddsOutput.textContent = oddNumbers.join(", ");
          }
          firstNumberBankItem.remove();
        }
      }
    });
  }

  if (sortAllBtn && numberBankOutput && oddsOutput && evensOutput) {
    sortAllBtn.addEventListener("click", function () {
      const numberBankItems = numberBankOutput.querySelectorAll("li");
      numberBankItems.forEach(function (item) {
        const number = parseFloat(item.textContent);
        if (!isNaN(number)) {
          if (number % 2 === 0) {
            evenNumbers.push(number);
          } else {
            oddNumbers.push(number);
          }
          item.remove();
        }
      });
      evensOutput.textContent = evenNumbers.join(", ");
      oddsOutput.textContent = oddNumbers.join(", ");
    });
  }
});

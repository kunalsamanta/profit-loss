const ipInput = document.querySelector("#initialPrice");
const quantityInput = document.querySelector("#quantity");
const cpInput = document.querySelector("#currentPrice");
const outputBox = document.querySelector("#result");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var initialPrice = Number(ipInput.value);
  var currentPrice = Number(cpInput.value);
  var dogeCount = Number(quantityInput.value);
  // console.log(initialPrice, currentPrice, dogeCount);
  calculateProfitOrLoss(initialPrice, dogeCount, currentPrice);
}

function calculateProfitOrLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / (initial * quantity)) * 100;
    // console.log(loss, lossPercentage);
    outputBox.style.color = "red";
    outputBox.innerHTML = `My Love for Elon Just Died!! Your loss is ${loss} and loss percentage is ${lossPercentage}% 📉`;
  } else if (initial < current) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / (initial * quantity)) * 100;
    // console.log(profit, profitPercentage);
    outputBox.style.color = "green";
    outputBox.innerHTML = `Elon is the real MVP!! Your Profit is ${profit.toFixed(
      2
    )} and profit percentage is ${profitPercentage.toFixed(2)}% 🚀`;
  } else {
    outputBox.style.color = "white";
    outputBox.innerHTML = `No pain No gain, and no gain no pain :)`;
  }
}
function calculate() {
  const mode = document.getElementById("mode").value;
  const price = parseFloat(document.getElementById("price").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const karat = parseFloat(document.getElementById("karat").value);
  const resultDiv = document.getElementById("result");

  if (!price || !rate || !karat) {
    resultDiv.innerHTML = "Please fill all fields!";
    resultDiv.style.color = "red";
    return;
  }

  const purity = karat / 24;

  if (mode === "weight") {
    const pureGoldRate = rate * purity;
    const weight = price / pureGoldRate;
    resultDiv.innerHTML = `Gold Weight: ${weight.toFixed(2)} grams`;
  } else if (mode === "making") {
    const pureGoldRate = rate * purity;
    const weight = price / pureGoldRate;
    const makingPerGram = (price - (pureGoldRate * weight)) / weight;
    resultDiv.innerHTML = `Making Charge: ₹${makingPerGram.toFixed(2)} per gram`;
  } else {
    resultDiv.innerHTML = "Invalid mode selected.";
  }

  resultDiv.style.color = "green";
}

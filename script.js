function calculate() {
  const mode = document.getElementById('mode').value;
  const price = parseFloat(document.getElementById('price').value);
  const final = parseFloat(document.getElementById('final').value);
  const karat = parseFloat(document.getElementById('karat').value);
  const resultBox = document.getElementById('result');

  if (isNaN(price) || isNaN(final) || isNaN(karat)) {
    resultBox.innerHTML = "Please enter valid numbers.";
    return;
  }

  if (mode === 'making') {
    const diff = final - price;
    const makingPerGram = (diff / karat).toFixed(2);
    resultBox.innerHTML = `Making Charge per Gram: ₹${makingPerGram}`;
  } else if (mode === 'weight') {
    const diff = final - price;
    const weight = (diff / karat).toFixed(2);
    resultBox.innerHTML = `Gold Weight: ${weight} g`;
  }
}

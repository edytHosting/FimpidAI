const jsonInput = document.getElementById('jsonInput');
const jsonOutput = document.getElementById('jsonOutput');

jsonInput.addEventListener('input', () => {
  try {
    const jsonData = JSON.parse(jsonInput.value);
    const formattedJson = JSON.stringify(jsonData, null, 2);
    jsonOutput.textContent = formattedJson;
    jsonOutput.style.color = 'black';
  } catch (error) {
    jsonOutput.textContent = 'Invalid JSON';
    jsonOutput.style.color = 'red';
  }
});
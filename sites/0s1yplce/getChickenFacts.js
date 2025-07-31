async function getChickenFact() {
  try {
    const response = await fetch('https://some-random-api.ml/animal/chicken');
    const data = await response.json();
    return data.fact;
  } catch (error) {
    console.error('Error fetching chicken fact:', error);
    return 'Sorry, unable to fetch a chicken fact at this time.';
  }
}

// Example usage
getChickenFact()
  .then((fact) => {
    console.log(fact);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
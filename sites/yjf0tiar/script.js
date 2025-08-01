const factList = document.getElementById('fact-list');
const breedList = document.getElementById('breed-list');
const imageGallery = document.getElementById('image-gallery');

// Fetch and display cow facts (replace with your API or data source)
fetch('https://raw.githubusercontent.com/jessedc/cow-facts/master/cow-facts.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(fact => {
      const listItem = document.createElement('li');
      listItem.textContent = fact;
      factList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching cow facts:', error));

// Sample cow breeds (replace with your data)
const cowBreeds = ['Holstein Friesian', 'Angus', 'Jersey', 'Guernsey', 'Simmental'];
cowBreeds.forEach(breed => {
  const listItem = document.createElement('li');
  listItem.textContent = breed;
  breedList.appendChild(listItem);
});

// Sample cow images (replace with your image URLs)
const cowImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Cow_in_the_meadow.jpg/1280px-Cow_in_the_meadow.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Brown_cow_in_a_green_field.jpg/1280px-Brown_cow_in_a_green_field.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Holstein_Friesian_cow_%282%29.jpg/1280px-Holstein_Friesian_cow_%282%29.jpg'
];
cowImages.forEach(imageUrl => {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Cow Image';
  imageGallery.appendChild(img);
});
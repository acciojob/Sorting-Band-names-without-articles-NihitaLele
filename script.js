const touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to strip articles from the beginning
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array ignoring articles
const sortedSpots = touristSpots.sort((a, b) => {
  const nameA = stripArticle(a);
  const nameB = stripArticle(b);
  return nameA.localeCompare(nameB);
});

// Inject into DOM
const bandList = document.getElementById('band');

sortedSpots.forEach(spot => {
  const li = document.createElement('li');
  li.textContent = spot;
  bandList.appendChild(li);
});


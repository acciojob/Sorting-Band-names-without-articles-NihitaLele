const touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedSpots = touristSpots.sort((a, b) => {
  const nameA = stripArticle(a);
  const nameB = stripArticle(b);
  return nameA.localeCompare(nameB);
});


const bandList = document.getElementById('band');

sortedSpots.forEach(spot => {
  const li = document.createElement('li');
  li.textContent = spot;
  bandList.appendChild(li);
});


// Simple in-memory array to store ads
let ads = [
    { title: "Laptop for sale", description: "A gently used laptop in good condition", price: 500 },
    { title: "Books", description: "Engineering textbooks for sale", price: 50 },
    { title: "Bike", description: "Second-hand bicycle in great condition", price: 100 },
    { title: "Furniture", description: "Used study table and chair", price: 75 }
];

// Handle form submission on Post Ad page
const form = document.getElementById('ad-form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        const newAd = { title, description, price };
        ads.push(newAd);

        alert('Ad posted successfully!');
        form.reset();
    });
}

// Function to display ads
function displayAds(filteredAds) {
    const adList = document.getElementById('ad-list');
    adList.innerHTML = '';  // Clear the current list
    filteredAds.forEach((ad) => {
        const adItem = document.createElement('div');
        adItem.classList.add('ad-item');
        adItem.innerHTML = `
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
        <p>Price: $${ad.price}</p>
      `;
        adList.appendChild(adItem);
    });
}

// Initial display of ads
if (document.getElementById('ad-list')) {
    displayAds(ads);
}

// Search functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAds = ads.filter(ad =>
            ad.title.toLowerCase().includes(searchTerm) ||
            ad.description.toLowerCase().includes(searchTerm)
        );
        displayAds(filteredAds);
    });
}
// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

// Get all the listing cards
const listingCards = document.querySelectorAll('.listing-card');

// Function to filter listings based on search input
function filterListings() {
    const query = searchInput.value.toLowerCase();

    listingCards.forEach(card => {
        // Get the title and description of the current listing card
        const title = card.getAttribute('data-title').toLowerCase();
        const description = card.getAttribute('data-description').toLowerCase();

        // Check if the query matches either the title or description
        if (title.includes(query) || description.includes(query)) {
            card.style.display = 'block';  // Show the card if it matches
        } else {
            card.style.display = 'none';   // Hide the card if it doesn't match
        }
    });
}

// Add an event listener to the search button
searchButton.addEventListener('click', filterListings);

// Optionally: Allow pressing Enter to search
searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        filterListings();
    }
});

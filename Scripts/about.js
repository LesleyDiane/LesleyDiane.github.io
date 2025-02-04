const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const indexes = document.querySelectorAll('.index');

let currentIndex = 0;

// Function to update active index
function updateActiveIndex() {
  indexes.forEach((index, i) => {
    if (i === currentIndex) {
      index.classList.add('active');
    } else {
      index.classList.remove('active');
    }
  });
}

carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const cardWidth = cards[0].offsetWidth;

    // Calculate currentIndex with a floor operation and adjust for the last card
    currentIndex = Math.floor(scrollLeft / cardWidth);
    if (scrollLeft >= (cards.length - 1) * cardWidth) {
      currentIndex = cards.length - 1;
    }

    updateActiveIndex();
  });
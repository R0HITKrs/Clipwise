// JavaScript to handle image carousel functionality
const images = document.querySelectorAll('.image');  // Get all images
const dots = document.querySelectorAll('.dot');      // Get all dots
const prevBtn = document.querySelector('.prev');     // Left arrow button
const nextBtn = document.querySelector('.next');     // Right arrow button

let currentIndex = 0;

// Function to set active image and dot based on index
function setActive(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Function to show the next image
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    setActive(currentIndex);
}

// Function to show the previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setActive(currentIndex);
}

// Arrow button click event listeners
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Dot click event listeners
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        setActive(currentIndex);
    });
});

// Initial state
setActive(currentIndex);

const dropdownHeader = document.querySelector('.dropdown-header');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownHeader.addEventListener('click', () => {
    dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
});

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownHeader.querySelector('span').textContent = item.textContent; // Update selected text
        dropdownList.style.display = 'none'; // Hide dropdown
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdownHeader.contains(event.target)) {
        dropdownList.style.display = 'none';
    }
});

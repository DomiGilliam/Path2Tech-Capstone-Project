// hscripts.js

let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const offset = -currentIndex * 100;

    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Automatic carousel movement every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Button actions
function button1Action() {
    alert('Redirecting to IOS!');
}

function button2Action() {
    alert('Redirectiing to Play STORE!');
}


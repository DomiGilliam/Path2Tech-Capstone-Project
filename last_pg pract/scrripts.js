document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Review Image" style="max-width: 100%; height: auto;"/>`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '';
    }
});

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

// Handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;
    const location = document.getElementById('location').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
    const image = document.getElementById('imageUpload').files[0];

    // Review item
    const reviewItem = document.createElement('li');
    let reviewContent = `
        <strong>${name}</strong> rated <em>${food}</em> ${rating}/5<br>
        ${comments}
    `;

    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            reviewContent += `<img src="${e.target.result}" alt="Review Image" style="max-width: 100%; height: auto;"/>`;
            reviewItem.innerHTML = reviewContent;
            document.getElementById('reviewList').appendChild(reviewItem);
        };
        reader.readAsDataURL(image);
    } else {
        reviewItem.innerHTML = reviewContent;
        document.getElementById('reviewList').appendChild(reviewItem);
    }

    // Clear form
    document.getElementById('reviewForm').reset();
    document.getElementById('imagePreview').innerHTML = '';
});

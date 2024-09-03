document.addEventListener('DOMContentLoaded', function() {
    const setupCards = document.querySelectorAll('.setup-card');
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');

    setupCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const imageUrl = this.getAttribute('data-image');
                showFullImage(imageUrl);
            }
        });
    });
});

function showFullImage(imageUrl) {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');

    fullImage.src = imageUrl;
    fullImageOverlay.style.display = 'flex';
}

function closeFullImage() {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    fullImageOverlay.style.display = 'none';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullImage();
    }
});

const fullImageOverlay = document.getElementById('fullImageOverlay');
if (fullImageOverlay) {
    fullImageOverlay.addEventListener('click', function(e) {
        if (e.target === fullImageOverlay) {
            closeFullImage();
        }
    });
}
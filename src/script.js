let currentIndex = 0;
const images = document.querySelectorAll('#imageContainer img');
const totalImages = images.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    images[currentIndex].classList.remove('visible');
    images[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.remove('hidden');
    images[currentIndex].classList.add('visible');
});

document.getElementById('prevBtn').addEventListener('click', () => {
    images[currentIndex].classList.remove('visible');
    images[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images[currentIndex].classList.remove('hidden');
    images[currentIndex].classList.add('visible');
});
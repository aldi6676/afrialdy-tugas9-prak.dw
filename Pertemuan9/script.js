window.addEventListener('DOMContentLoaded', (event) => {
    let current = 0;
    const images = document.querySelectorAll('#slider img');
    const controls = document.querySelectorAll('.slider-control');
    const totalImages = images.length;
    let autoSlideTimeout;

    const showImage = (index) => {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        controls.forEach(control => control.classList.remove('active'));
        controls[index].classList.add('active');
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideTimeout = setInterval(() => {
            current = (current + 1) % totalImages;
            showImage(current);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearTimeout(autoSlideTimeout);
    };

    controls.forEach(control => {
        control.addEventListener('click', (e) => {
            current = parseInt(e.target.getAttribute('data-index'));
            showImage(current);
            startAutoSlide();
        });
    });

    startAutoSlide();
});

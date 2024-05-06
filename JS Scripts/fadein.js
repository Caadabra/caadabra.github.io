// Code for fade in
window.addEventListener('scroll', function() {
    var scrollSection = document.querySelector('.scroll-section');
    var scrollSectionPosition = scrollSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if ((scrollSectionPosition+400) < screenHeight) {
        scrollSection.classList.add('visible');
    } else {
        scrollSection.classList.remove('visible');
    }
});
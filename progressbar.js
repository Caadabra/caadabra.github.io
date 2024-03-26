function updateProgressBar() {
    const progressBar = document.getElementById('myProgressBar');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = progress + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);
window.addEventListener('load', updateProgressBar);

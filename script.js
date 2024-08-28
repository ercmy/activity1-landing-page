document.getElementById('toggle-about').addEventListener('click', function() {
    var aboutSection = document.querySelector('.about-meaning');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
        this.textContent = 'Hide Description';
    } else {
        aboutSection.style.display = 'none';
        this.textContent = 'Show Description';
    }
});

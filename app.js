function toggleMenu(visible) {
    document.querySelector('.side-navbar').classList.toggle('active', visible)
}

document.querySelector('.burger').addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenu()
});
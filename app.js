// funkcja nadania klasy active
function toggleMenu(visible) {
    document.querySelector('.side-navbar').classList.toggle('active', visible)

}
// listener na burgera
document.querySelector('.burger').addEventListener('click', function(event) {
    event.preventDefault();
    // animacja burgera
    document.querySelector('.burger').classList.toggle('toggle');

    toggleMenu();
});
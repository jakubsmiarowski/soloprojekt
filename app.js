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


// modal

function closeModal() {
    document.getElementById('overlay').classList.remove('show')
};

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    })
});

document.querySelector('#overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        closeModal();
    }
});

function openModal(modal) {
    document.getElementById('quit').forEach(function(modal) {
        modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
};
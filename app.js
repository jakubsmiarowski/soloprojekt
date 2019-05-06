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

// funkcja na otwarcie modala
function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
};
openModal('#myModal');
console.log(openModal());

document.getElementById('userOpenModal').addEventListener('click', openModal());

// funkcja na zamkniecie modala
function closeModal() {
    overlay.classList.remove('show');
};

// przyciski na zamykanie modala

// przyciski
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    })
});

// tlo
document.querySelector('#overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
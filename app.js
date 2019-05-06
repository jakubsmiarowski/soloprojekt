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


// wykresy

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: true,
            }
        ]
    },
});
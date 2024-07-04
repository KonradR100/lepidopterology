document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let valid = true;
        form.querySelectorAll('input, select, textarea').forEach(function(input) {
            if (!input.checkValidity()) {
                valid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        if (!valid) {
            event.preventDefault();
            alert('Proszę wypełnić wszystkie wymagane pola.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const regions = [
        'Dolnośląskie', 'Kujawsko-pomorskie', 'Lubelskie', 'Lubuskie', 'Łódzkie',
        'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie',
        'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-mazurskie', 'Wielkopolskie',
        'Zachodniopomorskie'
    ];

    const regionSelect = document.getElementById('region');

    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // Walidacja formularza
    const form = document.getElementById('surveyForm');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});
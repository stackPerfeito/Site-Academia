document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        let found = false; // Variável para rastrear se o endereço foi encontrado

        cards.forEach(card => {
            const address = card.getAttribute('data-address').toLowerCase();
            const display = address.includes(query) ? 'block' : 'none';
            card.style.display = display;

            if (address.includes(query)) {
                found = true; // Define como true se encontrar o endereço
            }
        });

        // Exibe o popup de erro se o endereço não for encontrado
        if (!found) {
            openPopup();
        }
    });
});


function openPopup() {
    document.getElementById('errorPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('errorPopup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona animação de crescimento aos elementos principais
    const mainElements = document.querySelectorAll('header, .info-section img, .card, footer p, nav ul li a, h1, h2');
    mainElements.forEach(el => {
        el.classList.add('hover-animate', 'hover-animate-grow');
    });

    // Adiciona animação de fade aos elementos específicos
    const fadeElements = document.querySelectorAll('header img, .card-body p, .btn, footer p');
    fadeElements.forEach(el => {
        el.classList.add('hover-animate', 'hover-animate-fade');
    });
});

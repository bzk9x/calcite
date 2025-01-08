document.getElementById('circle').addEventListener('click', function(event) {
    const menu = document.getElementById('circle-menu');
    menu.classList.toggle('circle-menu-visible');

    event.stopPropagation();
});

document.getElementById('circle-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('click', function() {
    const menu = document.getElementById('circle-menu');
    if (menu.classList.contains('circle-menu-visible')) {
        menu.classList.remove('circle-menu-visible');
    }
});
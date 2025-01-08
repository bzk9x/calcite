document.getElementById('create-file-btn').addEventListener('click', function(event) {
    const menu = document.getElementById('create-file-popup');
    menu.classList.toggle('visible');

    event.stopPropagation();
});

document.getElementById('create-file-popup').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('click', function() {
    const menu = document.getElementById('create-file-popup');
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
});
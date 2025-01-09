document.getElementById('create-file-btn').addEventListener('click', function(event) {
    const menu = document.getElementById('create-file-popup');
    menu.classList.toggle('visible');
    document.getElementById('create-file-popup-error-message').textContent = "";
    document.getElementById('file-name').value = '';

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
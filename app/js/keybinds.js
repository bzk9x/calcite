document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();

        const popup = document.getElementById('create-file-popup');
        if (!popup.classList.contains('visible')) {
            popup.classList.add('visible');
            document.getElementById('create-file-popup-error-message').textContent = "";
            document.getElementById('file-name').value = '';
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey &&event.key === 's') {
        event.preventDefault();

        document.getElementById('searchbar').focus();
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
        event.preventDefault();
    }
})
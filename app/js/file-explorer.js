document.querySelectorAll('.file').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.file').forEach(el => {
            el.classList.remove('selected-file');
        });
        item.classList.add('selected-file');
    });
});
document.getElementById('create-file-btn-cancel').addEventListener('click', function() {
    document.getElementById('create-file-popup').classList.remove('visible');
});

document.getElementById('close-create-file-popup').addEventListener('click', function() {
    document.getElementById('create-file-popup').classList.remove('visible');
});

const createFileButton = document.getElementById('create-file-btn-ok');
const fileNameInput = document.getElementById('file-name');

const fileNameRegex = /^[^<>:"/\\|?*\x00-\x1F][^<>:"/\\|?*\x00-\x1F]*$/

function createFile() {
    const fileName = fileNameInput.value;
        if (fileName.trim() === '') {
            document.getElementById('create-file-popup-error-message').textContent = "A file name is required";
            window.electronAPI.playErrorSound();
        } else if (fileNameRegex.test(fileName)) {
            console.log('good file name');
        } else {
            document.getElementById('create-file-popup-error-message').textContent = "File name can't contain: < > : / \ | ? *";
            window.electronAPI.playErrorSound();
        };
};

createFileButton.addEventListener('click', function() {
    createFile()
});

const createFilePopup = document.getElementById('create-file-popup');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement !== document.getElementById('data-format-select')) {
        if (createFilePopup.classList.contains('visible')) {
            createFile();
        };
    };
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (createFilePopup.classList.contains('visible')) {
            document.getElementById('create-file-popup').classList.remove('visible');
        }
    }
})
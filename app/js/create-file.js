document.getElementById('create-file-btn-cancel').addEventListener('click', function() {
    document.getElementById('create-file-popup').classList.remove('visible');
});

document.getElementById('close-create-file-popup').addEventListener('click', function() {
    document.getElementById('create-file-popup').classList.remove('visible');
});

const createFileButton = document.getElementById('create-file-btn-ok');
const fileNameInput = document.getElementById('file-name');

const fileNameRegex = /^[^<>:"/\\|?*\x00-\x1F][^<>:"/\\|?*\x00-\x1F]*$/

createFileButton.addEventListener('click', function() {
    const fileName = fileNameInput.value;
    if (fileNameRegex.test(fileName)) {
        console.log('good file name');
    } else {
        document.getElementById('create-file-popup-error-message').textContent = "File name can't contain: < > : / \ | ? *";
        window.electronAPI.playErrorSound();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const minimizeButton = document.getElementById('minimize');
    const maximizeButton = document.getElementById('maximize')
    const closeButton = document.getElementById('close');

    const altMinimizeButton = document.getElementById('altMinimize');
    const altMaximizeButton = document.getElementById('altMaximize')
    const altCloseButton = document.getElementById('altClose');

    minimizeButton.addEventListener('click', () => {
        window.electronAPI.minimizeWindow();
    });

    maximizeButton.addEventListener('click', () => {
        window.electronAPI.maximizeWindow();
    });

    closeButton.addEventListener('click', () => {
        window.electronAPI.closeWindow();
    });

    altMinimizeButton.addEventListener('click', () => {
        window.electronAPI.minimizeWindow();
        document.getElementById('circle-menu').classList.remove('circle-menu-visible');
    });

    altMaximizeButton.addEventListener('click', () => {
        window.electronAPI.maximizeWindow();
        document.getElementById('circle-menu').classList.remove('circle-menu-visible');
    });

    altCloseButton.addEventListener('click', () => {
        window.electronAPI.closeWindow();
        document.getElementById('circle-menu').classList.remove('circle-menu-visible');
    });
});
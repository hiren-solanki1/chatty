const toggleButton = document.getElementById('toggleDarkMode');
toggleButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
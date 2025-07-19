// Add floating gold circles to .animated-bg
// This script is loaded after DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
    const bg = document.querySelector('.animated-bg');
    if (bg) {
        for (let i = 1; i <= 5; i++) {
            const span = document.createElement('span');
            bg.appendChild(span);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let progressText = document.getElementById('progress-text');
    let smoothWrapper = document.getElementById('smooth-wrapper');

    let progress = 0;
    let interval = setInterval(function () {
        progress += 10;
        progressText.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('preloader').style.display = 'none';
            smoothWrapper.style.display = 'block';
        }
    }, 100);
});
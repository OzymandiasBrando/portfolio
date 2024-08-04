document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});
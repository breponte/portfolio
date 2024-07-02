document.addEventListener('DOMContentLoaded', init);

function init() {
    animateScroll();
}

/**
 * Implement scrolling animation when scrolling between sections
 */
function animateScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    });

    const hiddenSections = document.querySelectorAll('.hidden');
    hiddenSections.forEach((element) => observer.observe(element));
}
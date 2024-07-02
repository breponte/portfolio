document.addEventListener('DOMContentLoaded', init);

function init() {
    const experienceGallery = document.querySelector('#experience-gallery');
    const projectsGallery = document.querySelector('#projects-gallery');
    
    animateScroll();
    handleScroll(experienceGallery);
    handleScroll(projectsGallery);
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

function handleScroll() {
    window.addEventListener('scroll', onScroll);
}

function handleScroll(container) {
    container.addEventListener('wheel', (event) => {
        if (!event.deltaY) {
            return;
        }
        event.currentTarget.scrollLeft += event.deltaY/2 + event.deltaX;
        event.preventDefault();
    });
}
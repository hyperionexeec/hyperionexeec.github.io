function animateContent() {
    gsap.from('.content', { 
        opacity: 0, 
        y: 50, 
        duration: 0.8, 
        ease: 'power3.out'
    });
}

function animateTitle() {
    gsap.from('.title', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        delay: 0.2, 
        ease: 'power3.out'
    });
}

function animateShowcaseItems() {
    gsap.from('.showcase-item', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.showcase-grid',
            start: 'top 80%'
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateContent();
    animateTitle();
    animateShowcaseItems();
});
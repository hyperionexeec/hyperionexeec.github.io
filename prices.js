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

function animateSubtitle() {
    gsap.from('.subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        delay: 0.4, 
        ease: 'power3.out'
    });
}

function animatePricingCards() {
    gsap.from('.pricing-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 80%'
        }
    });
}

function animateFAQItems() {
    gsap.from('.faq-item', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 80%'
        }
    });
}

function setupPlanSelection() {
    const planButtons = document.querySelectorAll('.pricing-card .cta-button');
    planButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planName = button.closest('.pricing-card').querySelector('h2').textContent;
            alert(`not here yet bozo`);
        });
    });
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    animateContent();
    animateTitle();
    animateSubtitle();
    


    setupPlanSelection();
});
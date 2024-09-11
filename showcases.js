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

function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById("myDropdown").classList.toggle("show");
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("myDropdown");
    const dropbtn = document.querySelector('.dropbtn');
    
    if (dropdown && dropbtn) {
        if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    animateContent();
    animateTitle();
    animateShowcaseItems();

    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) {
        dropBtn.addEventListener('click', toggleDropdown);
    }
});
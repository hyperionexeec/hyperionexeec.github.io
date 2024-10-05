const devInfo = {
    cherry: {
        name: "Cherry",
        role: "Lead Developer and Owner",
        bio: "Cherry is the leader behind Hyperion, having over a decade of exploiting experience.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/334467683896524800" },
        ]
    },
    aurora: {
        name: "aurora",
        role: "Bypass Developer",
        bio: "Aurora is the Bypass Developer. With years of experience in programming she is assistant in keeping Hyperion undetected.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/658096702741282836" },
        ]
    },
    anilsa: {
        name: "anilsa",
        role: "Security and Decompiling",
        bio: "Anilsa is our security, ensuring Hyperion remains safe and undetectable.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/1014984974065205290" },
        ]
    },
    danmark3110: {
        name: "danmark3110",
        role: "retarded",
        bio: "Best coder fr",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/696398306430943272" },
        ]
    },
    xiel: {
        name: "Xiel",
        role: "idfk",
        bio: "this dude just here honestly.",
        links: [
            { name: "Discord", url: "https://discordapp.com/users/1041361197355761795" },
        ]
    }
};

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

function animateKeyFeatures() {
    gsap.from('.key-features li', { 
        opacity: 0, 
        x: -30, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.key-features',
            start: 'top 80%'
        }
    });
}

function animateImageCards() {
    gsap.from('.image-card', { 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.image-gallery',
            start: 'top 80%'
        }
    });
}

function animateDevCards() {
    gsap.from('.dev-card', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.dev-grid',
            start: 'top 80%'
        }
    });
}

function animateDownloadContent() {
    const downloadContent = document.querySelector('.download-content');
    if (downloadContent) {
        gsap.set(downloadContent, { opacity: 1 });
        
        gsap.from(downloadContent, { 
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: downloadContent,
                start: 'top 80%'
            }
        });
    }
}

let currentImageIndex = 0;
const mediaElements = document.querySelectorAll('.image-card img, .image-card video');

function openFullImage(element, index) {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullImage = document.getElementById('fullImage');
    const fullVideo = document.getElementById('fullVideo');
    
    if (fullImageOverlay && fullImage && fullVideo) {
        if (element.tagName.toLowerCase() === 'img') {
            fullImage.src = element.src;
            fullImage.style.display = 'block';
            fullVideo.style.display = 'none';
        } else if (element.tagName.toLowerCase() === 'video') {
            fullVideo.src = element.src;
            fullVideo.style.display = 'block';
            fullImage.style.display = 'none';
            fullVideo.play();
        }
        fullImageOverlay.style.display = 'flex';
        currentImageIndex = index;

        gsap.fromTo(fullImageOverlay, 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
    }
}

function closeFullImage() {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    const fullVideo = document.getElementById('fullVideo');

    if (fullImageOverlay) {
        gsap.to(fullImageOverlay, { 
            opacity: 0, 
            duration: 0.5, 
            ease: 'power3.in',
            onComplete: () => {
                fullImageOverlay.style.display = 'none';
                if (fullVideo) {
                    fullVideo.pause();
                    fullVideo.currentTime = 0; 
                }
            }
        });
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = mediaElements.length - 1;
    } else if (currentImageIndex >= mediaElements.length) {
        currentImageIndex = 0;
    }
    
    const element = mediaElements[currentImageIndex];
    openFullImage(element, currentImageIndex);
}

function setupDevModal() {
    const modal = document.getElementById("devModal");
    const devCards = document.querySelectorAll(".dev-card");
    const closeBtn = document.querySelector(".close");

    if (modal && devCards.length > 0 && closeBtn) {
        devCards.forEach(card => {
            card.addEventListener("click", () => {
                const devId = card.getAttribute("data-dev-id");
                openDevModal(devId);
            });
        });

        closeBtn.addEventListener("click", closeDevModal);

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeDevModal();
            }
        });
    }
}

function openDevModal(devId) {
    const modal = document.getElementById("devModal");
    const dev = devInfo[devId];
    if (modal && dev) {
        document.getElementById("devModalImage").src = `images/${devId}.png`;
        document.getElementById("devModalName").textContent = dev.name;
        document.getElementById("devModalRole").textContent = dev.role;
        document.getElementById("devModalBio").textContent = dev.bio;
        
        const linksContainer = document.getElementById("devModalLinks");
        linksContainer.innerHTML = "";
        dev.links.forEach(link => {
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.name;
            linkElement.className = "dev-link";
            linkElement.target = "_blank";
            linksContainer.appendChild(linkElement);
        });

        modal.style.display = "block";
        gsap.fromTo(modal, 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(".modal-content", 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
    }
}

function closeDevModal() {
    const modal = document.getElementById("devModal");
    if (modal) {
        gsap.to(modal, { 
            opacity: 0, 
            duration: 0.3, 
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = "none";
            }
        });
    }
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
    
    if (document.querySelector('.subtitle')) {
        animateSubtitle();
    }
    if (document.querySelector('.key-features')) {
        animateKeyFeatures();
    }
    if (document.querySelector('.image-gallery')) {
        animateImageCards();
    }
    if (document.querySelector('.dev-grid')) {
        animateDevCards();
        setupDevModal();
    }
    if (document.querySelector('.download-content')) {
        animateDownloadContent();
    }
    
    const videos = document.querySelectorAll('.image-card video');
    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });
        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) {
        dropBtn.addEventListener('click', toggleDropdown);
    }
});

const fullImageOverlay = document.getElementById('fullImageOverlay');
if (fullImageOverlay) {
    fullImageOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'fullImageOverlay') {
            closeFullImage();
        }
    });
}

document.addEventListener('keydown', (e) => {
    const fullImageOverlay = document.getElementById('fullImageOverlay');
    if (fullImageOverlay && fullImageOverlay.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeFullImage();
        }
    }
});
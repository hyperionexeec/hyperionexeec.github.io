document.addEventListener('DOMContentLoaded', () => {
    const gameConfig = {
        roblox: {
            icon: 'images/roblox.png',
            title: 'Roblox',
            features: [
                '100% sUNC',
                'Decompiler',
                'FPS Optimization',
                'Undetected by Hyperion'
            ]
        },
        valorant: {
            icon: 'images/valorant.png',
            title: 'Valorant',
            features: [
                'Aimbot',
                'ESP',
                'Undetected Spoofer',
                'Fully Undetected'
            ]
        },
        osu: {
            icon: 'images/osu.png',
            title: 'osu!',
            features: [
                'Aim Assist',
                'Replay Bot',
                'Undetected Spoofer',
                'Playtime Bot'
            ]
        },
        minecraft: {
            icon: 'images/minecraft.png',
            title: 'Minecraft',
            features: [
                'i forgor'
            ]
        }
    };

    function updateGameContent(gameId) {
        const game = gameConfig[gameId];
        if (!game) return;

        const gameIcon = document.querySelector('.game-icon');
        const gameTitle = document.querySelector('.game-title');
        
        gameIcon.src = game.icon;
        gameIcon.alt = `${gameId} Icon`;
        gameTitle.textContent = game.title;

        const featureList = document.querySelector('.feature-list');
        featureList.innerHTML = game.features.map(feature => `
            <li><span class="feature-dot"></span>${feature}</li>
        `).join('');

        document.querySelectorAll('.game-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.game === gameId) {
                button.classList.add('active');
            }
        });

        gsap.from('.feature-card', {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power2.out'
        });

        gsap.from('.feature-list li', {
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }

    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('click', () => {
            const gameId = button.dataset.game;
            updateGameContent(gameId);
        });
    });

    updateGameContent('roblox');

    const downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('mouseenter', () => {
        gsap.to(downloadButton, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    downloadButton.addEventListener('mouseleave', () => {
        gsap.to(downloadButton, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
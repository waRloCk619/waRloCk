document.addEventListener('DOMContentLoaded', () => {

    // TAB SWITCHING LOGIC
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        // Remove active class from all buttons and contents
        navBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to target
        const targetContent = document.getElementById(targetId);
        const targetBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);

        if (targetContent) targetContent.classList.add('active');
        if (targetBtn) targetBtn.classList.add('active');
    }

    // Event Listeners for Nav Buttons
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Make the global function available for inline onclicks (from Hero buttons)
    window.switchTab = switchTab;

    // AUDIO FEEDBACK (Optional - simulate mechanical click sounds)
    const playClickSound = () => {
        // Just a placeholder for interaction feedback logic
        // console.log("Click sound");
    };

    // HAMBURGER MENU LOGIC
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
            }
            playClickSound();
        });
    });

    // MOUSE PARALLAX EFFECT
    // Move the background grid slightly opposite to mouse movement
    const grid = document.querySelector('.cyber-grid');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        grid.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    // GLITCH TEXT EFFECT RANDOMIZER (Optional Enchancement)
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            // Randomly toggle a class or adjust skew slightly for liveliness
            const skew = Math.random() * 2 - 1;
            glitchText.style.transform = `skewX(${skew}deg)`;
        }, 2000);
    }
});

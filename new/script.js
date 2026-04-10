document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('say-hello-btn');
    const greetingText = document.getElementById('greeting-text');
    const subtitle = document.querySelector('.subtitle');

    const greetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, le Monde!",
        "Hallo, Welt!",
        "Ciao, Mondo!",
        "Namaste, Duniya!",
        "Konnichiwa, Sekai!"
    ];

    let lastIndex = -1;

    btn.addEventListener('click', () => {
        // Change text
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * greetings.length);
        } while (newIndex === lastIndex && greetings.length > 1);
        
        lastIndex = newIndex;
        
        greetingText.textContent = greetings[newIndex];
        
        // Retrigger animation
        greetingText.classList.remove('animate-hello');
        void greetingText.offsetWidth; // trigger reflow
        greetingText.classList.add('animate-hello');

        subtitle.style.opacity = '0';
        setTimeout(() => {
            subtitle.textContent = "Keep clicking for more greetings!";
            subtitle.style.opacity = '1';
        }, 300);

        // Add confetti effect
        createConfetti();
    });

    function createConfetti() {
        const colors = ['#6366f1', '#a855f7', '#ec4899', '#3b82f6', '#10b981'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100 + 'vw';
            const size = Math.random() * 10 + 5 + 'px';
            const duration = Math.random() * 2 + 2 + 's';
            
            confetti.style.backgroundColor = color;
            confetti.style.left = left;
            confetti.style.width = size;
            confetti.style.height = size;
            confetti.style.top = '-20px';
            confetti.style.animationDuration = duration;
            
            // Randomly make it a circle or square
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }
            
            document.body.appendChild(confetti);
            
            // Remove after animation completes
            setTimeout(() => {
                confetti.remove();
            }, parseFloat(duration) * 1000);
        }
    }
});

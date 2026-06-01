// Met behulp van AI deze berekening https://claude.ai/share/7148c9c3-8018-41d7-9359-f225d6223186

export const initGlassesAnimation = () => {
    const glasses = document.querySelector('.glasses');
    const irises = document.querySelectorAll('.iris');

    document.addEventListener('mousemove', (e) => {
        const rect = glasses.getBoundingClientRect();
        
        // Middelpunt van de bril
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Richting van de cursor
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        // Maximale beweging in px
        const max = 2;
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * max;
        const y = Math.sin(angle) * max;
        
        irises.forEach(iris => {
            iris.setAttribute('cx', parseFloat(iris.dataset.baseCx) + x);
            iris.setAttribute('cy', parseFloat(iris.dataset.baseCy) + y);
        });
    });
}

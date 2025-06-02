document.addEventListener('DOMContentLoaded', () => {
    const suits = ['spade', 'heart', 'club', 'diamond'];
    const container = document.querySelector('.floating-suits');
    
    // Increased grid size
    const gridSize = 80; // px (increased from 40px)
    
    function createGrid() {
        container.innerHTML = '';
        const columns = Math.ceil(window.innerWidth / gridSize);
        const rows = Math.ceil(window.innerHeight / gridSize);
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const suit = document.createElement('span');
                const randomSuit = suits[Math.floor(Math.random() * suits.length)];
                
                suit.className = `suit suit-${randomSuit}`;
                suit.style.left = `${col * gridSize}px`;
                suit.style.top = `${row * gridSize}px`;
                
                container.appendChild(suit);
            }
        }
    }

    // Initial creation
    createGrid();

    // Update on resize with debounce
    const debounceResize = debounce(() => {
        createGrid();
    }, 250);

    window.addEventListener('resize', debounceResize);
});

// Debounce helper function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
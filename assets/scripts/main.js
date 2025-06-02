document.addEventListener('DOMContentLoaded', () => {
    const roadmapBtn = document.querySelector('.roadmap-btn');
    const roadmapSection = document.querySelector('.roadmap-section');
    const closeBtn = document.querySelector('.close-btn');
    const roadmapContent = document.querySelector('.roadmap-content');

    // Open roadmap
    roadmapBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            roadmapSection.classList.add('active');
        });
    });

    // Close roadmap
    const closeRoadmap = () => {
        roadmapSection.style.opacity = '0';
        roadmapContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            roadmapSection.classList.remove('active');
            document.body.style.overflow = '';
            roadmapSection.style.opacity = '';
            roadmapContent.style.transform = '';
        }, 300);
    };

    closeBtn.addEventListener('click', closeRoadmap);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && roadmapSection.classList.contains('active')) {
            closeRoadmap();
        }
    });

    // Close on overlay click
    roadmapSection.addEventListener('click', (e) => {
        if (e.target === roadmapSection || e.target.classList.contains('roadmap-overlay')) {
            closeRoadmap();
        }
    });
});
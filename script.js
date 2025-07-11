// Animation simple pour le bouton CTA
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Fonctionnalité dark mode (optionnelle)
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.background = 'transparent';
darkModeToggle.style.border = 'none';
darkModeToggle.style.fontSize = '1.5rem';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Ajoute cette partie à ton CSS si tu veux le dark mode
const style = document.createElement('style');
style.textContent = `
.dark-mode {
    background-color: #121212;
    color: #f0f0f0;
}
.dark-mode .about-content,
.dark-mode .project-card,
.dark-mode .skill-category {
    background-color: #1e1e1e;
    color: #f0f0f0;
    box-shadow: 0 2px 10px rgba(255,255,255,0.05);
}
.dark-mode h2 {
    color: #f0f0f0;
}
`;
document.head.appendChild(style);
// Toggle sidebar on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

// Close emergency banner
document.querySelector('.banner-close').addEventListener('click', function() {
    this.closest('.emergency-banner').style.display = 'none';
});

// Scroll to section functions
function scrollToCenter(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.style.display = 'block';
        element.scrollIntoView({ behavior: 'smooth' });
    }
}



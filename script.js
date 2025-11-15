
const navLinks = document.querySelectorAll('nav a[data-section]');
const sections = document.querySelectorAll('.section');

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const sectionPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const navHeight = document.querySelector('nav').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const sectionId = section.id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Initialize: Set home link as active on page load
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('nav a[data-section="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    updateActiveNavLink();
});


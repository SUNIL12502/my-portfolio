// DOM elements
const recommendationForm = document.getElementById('recommendationForm');
const recommendationsList = document.getElementById('recommendationsList');
const confirmationModal = document.getElementById('confirmationModal');
const closeModal = document.querySelector('.close');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    if (recommendationForm) {
        recommendationForm.addEventListener('submit', handleRecommendationSubmit);
    }

    // Modal close functionality
    if (closeModal) {
        closeModal.addEventListener('click', closeConfirmationModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            closeConfirmationModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && confirmationModal.style.display === 'block') {
            closeConfirmationModal();
        }
    });
});

// Handle recommendation form submission
function handleRecommendationSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const recommendationInput = document.getElementById('recommendation');
    
    const name = nameInput.value.trim();
    const recommendation = recommendationInput.value.trim();
    
    if (name && recommendation) {
        // Add new recommendation to the list
        addRecommendation(name, recommendation);
        
        // Clear form
        nameInput.value = '';
        recommendationInput.value = '';
        
        // Show confirmation modal
        showConfirmationModal();
    }
}

// Add new recommendation to the list
function addRecommendation(name, recommendation) {
    const recommendationItem = document.createElement('div');
    recommendationItem.className = 'recommendation-item';
    recommendationItem.innerHTML = `
        <h4>${name}</h4>
        <p>"${recommendation}"</p>
    `;
    
    // Add animation class
    recommendationItem.style.opacity = '0';
    recommendationItem.style.transform = 'translateY(20px)';
    
    // Insert at the beginning of the list
    recommendationsList.insertBefore(recommendationItem, recommendationsList.firstChild);
    
    // Animate in
    setTimeout(() => {
        recommendationItem.style.transition = 'all 0.5s ease';
        recommendationItem.style.opacity = '1';
        recommendationItem.style.transform = 'translateY(0)';
    }, 100);
}

// Show confirmation modal
function showConfirmationModal() {
    confirmationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        closeConfirmationModal();
    }, 3000);
}

// Close confirmation modal
function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal effect for sections
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect for the main heading
    const mainHeading = document.querySelector('.profile-text h1');
    if (mainHeading) {
        const text = mainHeading.textContent;
        mainHeading.textContent = '';
        mainHeading.style.borderRight = '3px solid #667eea';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainHeading.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                mainHeading.style.borderRight = 'none';
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 0.5s ease-in';
        });
    });
});

// Add CSS animation for fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .skill-item:hover i {
        animation: bounce 0.6s ease;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);

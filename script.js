// ===========================
// LOADING SCREEN
// ===========================
window.addEventListener('load', function() {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.style.display = 'none';
            
            // Trigger hero-content animation after loading
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.add('animated');
            }
        }, 500);
    }, 1500);
});

// ===========================
// COUNTDOWN TIMER
// ===========================
function updateCountdown() {
    // Set wedding date (29/11/2025 11:15)
    const weddingDate = new Date('2025-12-29T11:15:00').getTime();
    
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If countdown is over
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('couple').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ===========================
// MUSIC CONTROL
// ===========================
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isPlaying = !isPlaying;
});

// Auto play music
window.addEventListener('load', () => {
    setTimeout(() => {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }).catch(() => {
            console.log('Auto-play prevented by browser');
        });
    }, 2000);
});

// ===========================
// GALLERY LIGHTBOX
// ===========================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
const images = [];

// Collect all images
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    images.push(img.src);
    
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.classList.add('active');
    lightboxImg.src = images[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

// ===========================
// COPY ACCOUNT NUMBER
// ===========================
const copyButtons = document.querySelectorAll('.btn-copy');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');
        
        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Không thể sao chép. Vui lòng copy thủ công: ' + textToCopy);
        });
    });
});

// ===========================
// RSVP FORM
// ===========================
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        event: document.querySelector('input[name="event"]:checked').value,
        guestName: document.getElementById('guestName').value,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    saveRSVP(formData);
    
    // Show success message
    rsvpForm.style.display = 'none';
    rsvpSuccess.style.display = 'block';
    
    // Scroll to success message
    rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    console.log('RSVP saved:', formData);
});

function saveRSVP(data) {
    let rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    rsvps.push(data);
    localStorage.setItem('weddingRSVPs', JSON.stringify(rsvps));
}

// ===========================
// WISHES FORM
// ===========================
const wishesForm = document.getElementById('wishesForm');
const wishSuccess = document.getElementById('wishSuccess');

wishesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const wishData = {
        name: document.getElementById('wishName').value,
        message: document.getElementById('wishMessage').value,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    saveWish(wishData);
    
    // Show success message
    wishesForm.style.display = 'none';
    wishSuccess.style.display = 'block';
    
    // Scroll to success message
    wishSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    console.log('Wish saved:', wishData);
});

function saveWish(data) {
    let wishes = JSON.parse(localStorage.getItem('weddingWishes') || '[]');
    wishes.push(data);
    localStorage.setItem('weddingWishes', JSON.stringify(wishes));
}

// ===========================
// SOCIAL SHARE
// ===========================
const shareButtons = document.querySelectorAll('.share-btn');

shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const currentURL = window.location.href;
        const shareText = 'Trân trọng kính mời bạn tham dự đám cưới của chúng tôi!';
        
        if (button.classList.contains('facebook')) {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`, '_blank');
        } else if (button.classList.contains('twitter')) {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(shareText)}`, '_blank');
        } else if (button.classList.contains('whatsapp')) {
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + currentURL)}`, '_blank');
        } else if (button.classList.contains('copy-link')) {
            navigator.clipboard.writeText(currentURL).then(() => {
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.background = '#27ae60';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                }, 2000);
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Trigger animation for hero-content
            const heroContent = entry.target.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.add('animated');
            }
            
            // Trigger animation for gallery items
            const galleryItems = entry.target.querySelectorAll('.gallery-item');
            if (galleryItems.length > 0) {
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animated');
                    }, index * 150);
                });
            }
            
            // Trigger animation for couple cards
            const coupleCards = entry.target.querySelectorAll('.couple-card');
            if (coupleCards.length > 0) {
                coupleCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                });
            }
            
            // Trigger animation for event cards
            const eventCards = entry.target.querySelectorAll('.event-card');
            if (eventCards.length > 0) {
                eventCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                });
            }
            
            // Trigger animation for countdown elements
            const countdownImage = entry.target.querySelector('.countdown-image');
            if (countdownImage) {
                countdownImage.classList.add('animated');
            }
            
            const timeBoxes = entry.target.querySelectorAll('.time-box');
            if (timeBoxes.length > 0) {
                timeBoxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add('animated');
                    }, 300 + (index * 100));
                });
            }
            
            // Trigger animation for rsvp form
            const rsvpForm = entry.target.querySelector('.rsvp-form');
            if (rsvpForm) {
                rsvpForm.classList.add('animated');
            }
            
            // Trigger animation for wishes container
            const wishesContainer = entry.target.querySelector('.wishes-container');
            if (wishesContainer) {
                wishesContainer.classList.add('animated');
            }
            
            // Trigger animation for gift cards
            const giftCards = entry.target.querySelectorAll('.gift-card');
            if (giftCards.length > 0) {
                giftCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                });
            }
            
            // Trigger animation for thanks content
            const thanksContent = entry.target.querySelector('.thanks-content');
            if (thanksContent) {
                thanksContent.classList.add('animated');
            }
        } else {
            // Remove animated class when element leaves viewport
            const heroContent = entry.target.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.remove('animated');
            }
            
            const galleryItems = entry.target.querySelectorAll('.gallery-item');
            if (galleryItems.length > 0) {
                galleryItems.forEach(item => {
                    item.classList.remove('animated');
                });
            }
            
            const coupleCards = entry.target.querySelectorAll('.couple-card');
            if (coupleCards.length > 0) {
                coupleCards.forEach(card => {
                    card.classList.remove('animated');
                });
            }
            
            const eventCards = entry.target.querySelectorAll('.event-card');
            if (eventCards.length > 0) {
                eventCards.forEach(card => {
                    card.classList.remove('animated');
                });
            }
            
            const countdownImage = entry.target.querySelector('.countdown-image');
            if (countdownImage) {
                countdownImage.classList.remove('animated');
            }
            
            const timeBoxes = entry.target.querySelectorAll('.time-box');
            if (timeBoxes.length > 0) {
                timeBoxes.forEach(box => {
                    box.classList.remove('animated');
                });
            }
            
            const rsvpForm = entry.target.querySelector('.rsvp-form');
            if (rsvpForm) {
                rsvpForm.classList.remove('animated');
            }
            
            const wishesContainer = entry.target.querySelector('.wishes-container');
            if (wishesContainer) {
                wishesContainer.classList.remove('animated');
            }
            
            const giftCards = entry.target.querySelectorAll('.gift-card');
            if (giftCards.length > 0) {
                giftCards.forEach(card => {
                    card.classList.remove('animated');
                });
            }
            
            const thanksContent = entry.target.querySelector('.thanks-content');
            if (thanksContent) {
                thanksContent.classList.remove('animated');
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c💒 Wedding Invitation - Xuân Huy & Cẩm Nhung', 'color: #f4a460; font-size: 20px; font-weight: bold;');
console.log('%cMade with ❤️ by ROSÉ Wedding', 'color: #ff9966; font-size: 14px;');

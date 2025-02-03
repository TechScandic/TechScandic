document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observe all animated elements
    document.querySelectorAll('.animated-grid, .float-element, .feature-card, .stat-counter').forEach((el) => {
        observer.observe(el);
    });

    // Initialize skill bars
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const progress = bar.style.getPropertyValue('--progress');
        bar.style.setProperty('--progress', '0%');
        setTimeout(() => {
            bar.style.setProperty('--progress', progress);
        }, 200);
    });

    // Add hover effects to interactive lists
    document.querySelectorAll('.interactive-list li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = '#4CAF50';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '';
        });
    });

    // Add click effects to feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
        });
    });

    // Animate section headers on scroll
    document.querySelectorAll('.section-header').forEach(header => {
        let animated = false;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    header.style.opacity = '0';
                    header.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        header.style.transition = 'all 0.6s ease';
                        header.style.opacity = '1';
                        header.style.transform = 'translateY(0)';
                    }, 200);
                }
            });
        });
        observer.observe(header);
    });

    // Add particle effects to headers
    const particles = document.querySelector('.particles');
    if (particles) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particles.appendChild(particle);
        }
    }
});

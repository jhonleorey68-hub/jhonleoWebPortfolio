// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// Dark / Light mode toggle
const themeToggle = document.getElementById('themeToggle');
const navbar = document.querySelector('.navbar');

// Remember preference on reload
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
} else if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        // Save preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

function updateNavbarOnScroll() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbarOnScroll);
updateNavbarOnScroll();

// Canvas Particle Animation
const canvas = document.getElementById('homeParticles');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function getParticleTheme() {
        const isLight = document.body.classList.contains('light-mode');
        return {
            particleColor: isLight ? 'rgba(15, 22, 42, ' : 'rgba(255, 255, 255, ',
            lineColor: isLight ? 'rgba(15, 22, 42, ' : 'rgba(255, 255, 255, ',
            shadowColor: isLight ? 'rgba(15, 22, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)'
        };
    }

    // Particle object
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2.5 + 1;
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                this.vx *= -1;
                this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
            }
            if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                this.vy *= -1;
                this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
            }
        }

        draw() {
            const theme = getParticleTheme();
            ctx.fillStyle = `${theme.particleColor}${this.opacity})`;
            ctx.shadowColor = theme.shadowColor;
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Create particles
    const particleCount = 30;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ));
    }

    // Draw connecting lines
    function drawLines() {
        const maxDistance = 150;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.4;
                    const theme = getParticleTheme();
                    ctx.strokeStyle = `${theme.lineColor}${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.shadowColor = theme.shadowColor;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let particle of particles) {
            particle.update();
            particle.draw();
        }

        drawLines();
        requestAnimationFrame(animate);
    }

    animate();
}

// Carousel functionality
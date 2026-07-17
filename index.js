// ========== PARTICLE SYSTEM (3D Background) ==========
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;
  let animId;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.z = Math.random() * 300;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.speedZ = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.hue = Math.random() * 60 + 240; // purple-blue range
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.z += this.speedZ;
      if (this.x < -50 || this.x > w + 50 || this.y < -50 || this.y > h + 50 || this.z < -100 || this.z > 400) {
        this.reset();
      }
    }
    draw() {
      const scale = 300 / (300 + this.z);
      const x2d = this.x * scale + (w * (1 - scale)) / 2;
      const y2d = this.y * scale + (h * (1 - scale)) / 2;
      const size2d = this.size * scale;
      const opacity2d = this.opacity * scale;

      ctx.beginPath();
      ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${opacity2d})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(x2d, y2d, size2d * 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${opacity2d * 0.15})`;
      ctx.fill();
    }
  }

  // Create particles
  const count = Math.min(80, Math.floor(w * h / 15000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dz = particles[i].z - particles[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 150) {
          const scale1 = 300 / (300 + particles[i].z);
          const scale2 = 300 / (300 + particles[j].z);
          const x1 = particles[i].x * scale1 + (w * (1 - scale1)) / 2;
          const y1 = particles[i].y * scale1 + (h * (1 - scale1)) / 2;
          const x2 = particles[j].x * scale2 + (w * (1 - scale2)) / 2;
          const y2 = particles[j].y * scale2 + (h * (1 - scale2)) / 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(131, 66, 249, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(animate);
  }
  animate();
})();

// ========== AOS ==========
AOS.init({
  once: true,
  offset: 100,
});

// ========== MOBILE NAV ==========
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

navOpen.addEventListener("click", () => {
  menu.classList.add("show");
  document.body.classList.add("show");
});

navClose.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove("show");
});

// Close menu when clicking nav links
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// ========== FIXED NAV ==========
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// ========== SMOOTH SCROLL ==========
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (!element) return;
    const position = element.offsetTop - navHeight;
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  });
});

// ========== TYPEIT ANIMATION ==========
new TypeIt("#type1", {
  speed: 100,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("React Engineer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("Frontend Designer", { delay: 200 })
  .pause(2000)
  .delete()
  .go();

new TypeIt("#type2", {
  speed: 100,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("React Engineer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("Freelancer", { delay: 200 })
  .pause(2000)
  .delete()
  .go();

// ========== GSAP ANIMATIONS ==========
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1.2, delay: 1.5, x: -200, scale: 0.95 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.3, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.6, y: -30 });
gsap.from(".hero-buttons", { opacity: 0, duration: 1, delay: 3, y: 30 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  y: 20,
  stagger: 0.15,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 0.8,
  delay: 3.5,
  y: 20,
  stagger: 0.15,
});

// ========== SKILL BAR ANIMATION ==========
const skillBars = document.querySelectorAll(".skills-bar");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.classList.contains("html")
          ? "95%"
          : entry.target.classList.contains("css")
          ? "85%"
          : entry.target.classList.contains("javascript")
          ? "90%"
          : entry.target.classList.contains("bootstrap")
          ? "90%"
          : entry.target.classList.contains("react")
          ? "85%"
          : entry.target.classList.contains("nodejs")
          ? "70%"
          : entry.target.classList.contains("mysql")
          ? "75%"
          : "0%";
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => {
  bar.style.width = "0%";
  skillObserver.observe(bar);
});

// ========== GLIDE CAROUSEL ==========
const glide = document.querySelector(".glide");
if (glide) {
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
        gap: 15,
      },
    },
    arrows: {
      left: ".glide__arrow--left",
      right: ".glide__arrow--right",
    },
  }).mount();
}

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.style.color = "";
    link.style.backgroundColor = "";
    const href = link.getAttribute("href");
    if (href && href.includes(current)) {
      link.style.color = "#c4a1ff";
    }
  });
});

// ========== 3D TILT EFFECT ON CARDS ==========
(function initTilt() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return; // Skip tilt on touch devices

  const tiltElements = document.querySelectorAll('.service, .team, .experience-card');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

// ========== SCROLL REVEAL COUNTER ANIMATION ==========
(function initCounters() {
  const counters = document.querySelectorAll('.experience-card h4');
  let animated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const text = counter.textContent;
          const match = text.match(/(\d+)/);
          if (!match) return;
          const target = parseInt(match[0]);
          const suffix = text.replace(match[0], '');
          let current = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + suffix;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const experienceGrid = document.querySelector('.skills-experience-grid');
  if (experienceGrid) counterObserver.observe(experienceGrid);
})();

// ========== SMOOTH PARALLAX ON SCROLL ==========
(function initParallax() {
  const floatingShapes = document.querySelectorAll('.floating-shape');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    floatingShapes.forEach((shape, i) => {
      const speed = (i + 1) * 0.05;
      shape.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
})();

// ========== AOS Init ==========
AOS.init({ once: true, offset: 80 });

// ========== NAV SCROLL ==========
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ========== HAMBURGER ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let overlay = document.createElement('div');
overlay.className = 'mobile-overlay';
document.body.appendChild(overlay);

function toggleMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', toggleMenu));

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== TYPED.JS ==========
if (document.getElementById('typeText')) {
  new Typed('#typeText', {
    strings: ['Frontend Developer', 'React Engineer', 'JavaScript Developer', 'Cypress & Jest Testing'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
  });
}

// ========== SKILL BAR ANIMATION ==========
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.width + '%';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-fill').forEach(bar => {
  bar.style.width = '0%';
  skillObserver.observe(bar);
});

// ========== COUNTER ANIMATION ==========
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(num => {
        const text = num.textContent;
        const match = text.match(/([\d.]+)/);
        if (!match) return;
        const target = parseFloat(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            num.innerHTML = target + suffix;
            clearInterval(timer);
          } else {
            num.innerHTML = current.toFixed(1) + suffix;
          }
        }, 30);
      });
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) counterObserver.observe(statsEl);

// ========== YEAR ==========
const yearEl = document.getElementById('yearid');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ========== FIREBASE CONTACT FORM ==========
if (document.getElementById('frmContact')) {
  import('https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js').then(({ initializeApp }) => {
    import('https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js').then(({ getDatabase, ref, set }) => {
      const firebaseConfig = {
        apiKey: "AIzaSyDPqUppaM_cINaQPUjk79_oNWHvses5mY0",
        authDomain: "webapp-5ff55.firebaseapp.com",
        projectId: "webapp-5ff55",
        storageBucket: "webapp-5ff55.appspot.com",
        messagingSenderId: "645643836728",
        appId: "1:645643836728:web:3797fc8ee6a64023daf5cd"
      };
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);

      document.getElementById('frmContact').addEventListener('submit', function(e) {
        e.preventDefault();
        set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
          name: document.getElementById('fullname').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        }).then(() => {
          alert('Message sent successfully!');
          document.getElementById('frmContact').reset();
        }).catch(() => {
          alert('Something went wrong. Please try again.');
        });
      });
    });
  });
}

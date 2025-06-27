// Toggle nav menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
  navMenu.setAttribute('aria-hidden', expanded);
  body.classList.toggle('menu-open');
});

// Close menu when clicking a nav link (for better UX)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
    navMenu.setAttribute('aria-hidden', true);
    body.classList.remove('menu-open');
  });
});

// Dropdown menu toggle for contacts
const dropdown = document.querySelector('.dropdown');
const dropbtn = dropdown.querySelector('.dropbtn');

dropbtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  const expanded = dropbtn.getAttribute('aria-expanded') === 'true' || false;
  dropbtn.setAttribute('aria-expanded', !expanded);
});

// Close dropdown if clicking outside
window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
    dropbtn.setAttribute('aria-expanded', false);
  }
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
    
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));







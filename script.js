// script.js

// Show/hide chat popup
function initChat() {
  const chatBtn   = document.getElementById('chat-button');
  const chatPopup = document.getElementById('chat-popup');
  const chatClose = document.getElementById('close-chat');
  if (!chatBtn || !chatPopup || !chatClose) return;

  chatBtn.addEventListener('click', () => {
    chatPopup.style.display = 'block';
  });
  chatClose.addEventListener('click', () => {
    chatPopup.style.display = 'none';
  });
}

// Slider logic
let slideIndex = 0, slideInterval;
function showSlides() {
  const slides = document.querySelectorAll('.image-slider .slide');
  const dots   = document.querySelectorAll('.slider-dots .dot');
  if (!slides.length) return;

  // hide all
  slides.forEach(s => s.style.display = 'none');
  // advance index
  slideIndex = (slideIndex % slides.length) + 1;
  // show current
  slides[slideIndex - 1].style.display = 'block';
  // update dots
  dots.forEach(d => d.classList.remove('active-dot'));
  dots[slideIndex - 1].classList.add('active-dot');

  // schedule next
  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 5000);
}
function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n - 1;
  showSlides();
}

// Mobile nav toggle
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.querySelector('nav ul');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// Highlight active nav link
function highlightNav() {
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    // compare full hrefs
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  highlightNav();
  initChat();
  initMobileNav();
  showSlides();
});

// expose for dots
window.currentSlide = currentSlide;

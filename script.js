
function toggleChat() {
    var popup = document.getElementById('chat-popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Optional: Close chat if clicked outside (more complex)
// document.addEventListener('click', function(event) {
//     var chatPopup = document.getElementById('chat-popup');
//     var chatButton = document.getElementById('chat-button');
//     // Check if the popup is visible and the click was outside the popup and not on the button
//     if (chatPopup.style.display === 'block' && !chatPopup.contains(event.target) && event.target !== chatButton) {
//         chatPopup.style.display = 'none';
//     }
// });

// Optional: Highlight active nav link
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

// Slider logic
let slideIndex = 0, slideInterval;
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});

function showSlides() {
  const slides = document.querySelectorAll(".image-slider .slide");
  const dots = document.querySelectorAll(".slider-dots .dot");
  if (!slides.length) return;

  slides.forEach(s => s.style.display = "none");
  slideIndex = (slideIndex % slides.length) + 1;

  slides[slideIndex - 1].style.display = "block";
  dots.forEach(d => d.classList.remove("active-dot"));
  dots[slideIndex - 1].classList.add("active-dot");

  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 5000);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n - 1;
  showSlides();
}

// Chat Popup Toggle
document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chat-button');
  const chatPopup = document.getElementById('chat-popup');
  const chatClose = document.getElementById('close-chat');
  chatBtn.addEventListener('click', () => {
    chatPopup.style.display = 'block';
  });
  chatClose.addEventListener('click', () => {
    chatPopup.style.display = 'none';
  });
});

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('nav ul');
  toggle.addEventListener('click', () => menu.classList.toggle('active'));
});
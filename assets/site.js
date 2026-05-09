document.addEventListener('DOMContentLoaded', function () {
  const mobileNav = document.getElementById('mobile-nav');
  const menuBtn = document.getElementById('menu-btn');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const msg = document.getElementById('form-msg');
      if (msg) {
        msg.textContent = 'Message sent successfully. The school can follow up using the contact details you provided.';
        msg.className = 'text-sm text-center text-green-700 font-medium';
        msg.classList.remove('hidden');
        setTimeout(function () {
          msg.classList.add('hidden');
        }, 4000);
      }
      contactForm.reset();
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    observer.observe(el);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

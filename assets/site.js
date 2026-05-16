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

  if (!document.querySelector('.corner-actions')) {
    const cornerActions = document.createElement('div');
    cornerActions.className = 'corner-actions';
    cornerActions.innerHTML = [
      '<a class="corner-action-btn" href="index.html#registration" aria-label="Register now">',
      '<i data-lucide="user-plus" class="corner-action-icon"></i>',
      '<span>Register Now</span>',
      '</a>',
      '<a class="corner-action-btn corner-action-donate" href="index.html#donation-payment" aria-label="Donate now">',
      '<i data-lucide="hand-heart" class="corner-action-icon"></i>',
      '<span>Donate Now</span>',
      '</a>'
    ].join('');
    document.body.appendChild(cornerActions);
  }

  const slider = document.querySelector('[data-campus-slider]');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.campus-slide'));
    const prevButton = document.querySelector('[data-slider-prev]');
    const nextButton = document.querySelector('[data-slider-next]');
    const dotsWrap = document.querySelector('[data-slider-dots]');
    let activeIndex = Math.max(0, slides.findIndex(function (slide) {
      return slide.classList.contains('is-active');
    }));
    let autoSlideTimer;

    function showSlide(index) {
      if (!slides.length) return;
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === activeIndex);
      });
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.slider-dot').forEach(function (dot, dotIndex) {
          dot.classList.toggle('is-active', dotIndex === activeIndex);
        });
      }
    }

    function restartAutoSlide() {
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(function () {
        showSlide(activeIndex + 1);
      }, 4500);
    }

    if (dotsWrap) {
      slides.forEach(function (_, index) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider-dot';
        dot.setAttribute('aria-label', 'Show image ' + (index + 1));
        dot.addEventListener('click', function () {
          showSlide(index);
          restartAutoSlide();
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        showSlide(activeIndex - 1);
        restartAutoSlide();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        showSlide(activeIndex + 1);
        restartAutoSlide();
      });
    }

    showSlide(activeIndex);
    restartAutoSlide();
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

window.addEventListener('load', function () {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(function () {
      loader.remove();
    }, 500);
  }
});

/* Image modal viewer: open image on click, set download link */
(function () {
  function openModal(src, alt) {
    var modal = document.getElementById('img-modal');
    var modalImg = document.getElementById('img-modal-img');
    var dl = document.getElementById('img-modal-download');
    if (!modal || !modalImg || !dl) return;
    modalImg.src = src;
    modalImg.alt = alt || '';
    dl.href = src;
    var filename = src.split('/').pop().split('?')[0];
    dl.setAttribute('download', filename || 'image');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.zoomable').forEach(function (img) {
      img.addEventListener('click', function () {
        openModal(img.src, img.alt);
      });
    });

    var modal = document.getElementById('img-modal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.classList.contains('img-modal-close')) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }
  });
})();

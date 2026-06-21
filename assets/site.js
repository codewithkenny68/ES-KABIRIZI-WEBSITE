(function () {
  const STORAGE = {
    announcements: 'esKabiriziAnnouncements',
    babyeyi: 'esKabiriziBabyeyi',
    gallery: 'esKabiriziGallery',
    registrations: 'esKabiriziRegistrations',
    donations: 'esKabiriziDonations'
  };

  const PAYMENT_LINKS = Object.assign({
    mtn: '',
    airtel: '',
    card: '',
    bank: ''
  }, window.ESK_PAYMENT_LINKS || {});

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function setMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.className = type === 'error'
      ? 'mt-4 text-sm font-semibold text-red-700'
      : 'mt-4 text-sm font-semibold text-green-700';
    element.classList.remove('hidden');
    setTimeout(function () {
      element.classList.add('hidden');
    }, 4500);
  }

  function fallbackGallery() {
    return [
      { title: 'Campus view', src: 'kabirizi picsss/20260323_164135.JPG', date: 'School gallery' },
      { title: 'School grounds', src: 'kabirizi picsss/20260323_163308.JPG', date: 'School gallery' },
      { title: 'ES Kabirizi', src: 'kabirizi picsss/20260323_163059.JPG', date: 'School gallery' }
    ];
  }

  function renderAnnouncements() {
    const panel = document.getElementById('announcement-panel');
    if (!panel) return;
    const items = readJson(STORAGE.announcements, []);
    if (!items.length) {
      panel.innerHTML = '<p class="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500">No announcement has been uploaded by the admin yet.</p>';
      return;
    }
    panel.innerHTML = items.map(function (item) {
      return [
        '<article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">',
        '<div class="flex flex-wrap items-center justify-between gap-3">',
        '<h4 class="font-heading text-xl font-bold text-slate-950">' + escapeHtml(item.title) + '</h4>',
        '<span class="rounded-full bg-[#2f5fa9]/10 px-3 py-1 text-xs font-bold text-[#2f5fa9]">' + escapeHtml(item.category || 'Announcement') + '</span>',
        '</div>',
        '<p class="mt-3 text-sm leading-relaxed text-slate-600">' + escapeHtml(item.body) + '</p>',
        '<p class="mt-4 text-xs text-slate-400">' + escapeHtml(item.date) + '</p>',
        '</article>'
      ].join('');
    }).join('');
  }

  function renderImagePanel(id, key, fallback) {
    const panel = document.getElementById(id);
    if (!panel) return;
    const uploaded = readJson(key, []);
    const items = uploaded.length ? uploaded : (fallback || []);
    if (!items.length) {
      panel.innerHTML = '<p class="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-500">No image has been uploaded by the admin yet.</p>';
      return;
    }
    panel.innerHTML = items.map(function (item) {
      return [
        '<figure class="gallery-tile h-64">',
        '<img class="zoomable" src="' + escapeHtml(item.src) + '" alt="' + escapeHtml(item.title || 'ES Kabirizi image') + '">',
        '<figcaption class="bg-white px-4 py-3 text-sm font-semibold text-slate-700">' + escapeHtml(item.title || 'Uploaded image') + '</figcaption>',
        '</figure>'
      ].join('');
    }).join('');
    attachImageModalHandlers(panel);
  }

  function attachImageModalHandlers(scope) {
    (scope || document).querySelectorAll('.zoomable').forEach(function (img) {
      if (img.dataset.modalReady === 'true') return;
      img.dataset.modalReady = 'true';
      img.addEventListener('click', function () {
        openModal(img.getAttribute('src'), img.getAttribute('alt'));
      });
    });
  }

  function openModal(src, alt) {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    const dl = document.getElementById('img-modal-download');
    if (!modal || !modalImg || !dl) return;
    modalImg.src = src;
    modalImg.alt = alt || '';
    dl.href = src;
    dl.setAttribute('download', (alt || 'es-kabirizi-image').replace(/\s+/g, '-').toLowerCase());
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function initForms() {
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
      registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value.trim();
        const email = document.getElementById('email-address').value.trim();
        const phone = document.getElementById('phone-number').value.trim();
        const program = document.getElementById('program-interest').value;
        const message = document.getElementById('student-message').value.trim();
        const feedback = document.getElementById('registration-message');

        if (!email && !phone) {
          setMessage(feedback, 'Please provide either an email address or a phone number.', 'error');
          return;
        }

        const registrations = readJson(STORAGE.registrations, []);
        registrations.unshift({ firstName, email, phone, program, message, date: new Date().toLocaleString() });
        writeJson(STORAGE.registrations, registrations);
        registrationForm.reset();
        setMessage(feedback, 'Registration received. The school can follow up by email or phone.', 'success');
      });
    }

    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
      donationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const donations = readJson(STORAGE.donations, []);
        donations.unshift({
          donorName: document.getElementById('payment-name').value.trim(),
          phone: document.getElementById('payment-phone').value.trim(),
          method: document.getElementById('payment-method').value,
          amount: document.getElementById('payment-amount').value.trim(),
          reference: document.getElementById('payment-reference').value.trim(),
          date: new Date().toLocaleString()
        });
        writeJson(STORAGE.donations, donations);
        donationForm.reset();
        setMessage(document.getElementById('donation-message'), 'Donation details submitted. Thank you for supporting ES Kabirizi.', 'success');
      });
    }
  }

  function initPaymentButtons() {
    document.querySelectorAll('[data-payment-provider]').forEach(function (button) {
      button.addEventListener('click', function () {
        const provider = button.dataset.paymentProvider;
        const link = PAYMENT_LINKS[provider];
        const message = document.getElementById('payment-message') || document.getElementById('donation-message');

        if (link) {
          window.location.href = link;
          return;
        }

        const providerNames = {
          mtn: 'MTN MoMo Pay',
          airtel: 'Airtel Money',
          card: 'Card Checkout',
          bank: 'Bank Transfer'
        };

        setMessage(
          message,
          providerNames[provider] + ' is ready for a real merchant payment link. Add the official school checkout URL in assets/site.js, or use the displayed phone/bank details and submit the confirmation form.',
          'error'
        );
      });
    });
  }

  function initSite() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('menu-btn');

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
      });
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
        });
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

    const heroSlider = document.querySelector('[data-hero-slider]');
    if (heroSlider) {
      const heroSlides = Array.from(heroSlider.querySelectorAll('.hero-slide'));
      let heroIndex = Math.max(0, heroSlides.findIndex(function (slide) {
        return slide.classList.contains('is-active');
      }));
      setInterval(function () {
        if (!heroSlides.length) return;
        heroSlides[heroIndex].classList.remove('is-active');
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroSlides[heroIndex].classList.add('is-active');
      }, 4800);
    }

    renderAnnouncements();
    renderImagePanel('babyeyi-panel', STORAGE.babyeyi, []);
    renderImagePanel('gallery-panel', STORAGE.gallery, fallbackGallery());
    attachImageModalHandlers(document);
    initForms();
    initPaymentButtons();

    const modal = document.getElementById('img-modal');
    if (modal) {
      modal.addEventListener('click', function (event) {
        if (event.target === modal || event.target.classList.contains('img-modal-close')) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }

  window.addEventListener('load', function () {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(function () {
        loader.remove();
      }, 500);
    }
  });
})();

(function () {
  const DEFAULT_PASSWORD = 'school2026';
  const STORAGE = {
    session: 'esKabiriziAdminSession',
    password: 'esKabiriziAdminPassword',
    teachers: 'esKabiriziTeachers',
    students: 'esKabiriziStudents',
    announcements: 'esKabiriziAnnouncements',
    babyeyi: 'esKabiriziBabyeyi',
    gallery: 'esKabiriziGallery',
    registrations: 'esKabiriziRegistrations',
    donations: 'esKabiriziDonations'
  };

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

  function getPassword() {
    return localStorage.getItem(STORAGE.password) || DEFAULT_PASSWORD;
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
      ? 'text-sm font-semibold text-red-700'
      : 'text-sm font-semibold text-green-700';
    element.classList.remove('hidden');
    setTimeout(function () {
      element.classList.add('hidden');
    }, 3800);
  }

  function fileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function showDashboard() {
    document.getElementById('admin-login-view').classList.add('hidden');
    document.getElementById('admin-dashboard-view').classList.remove('hidden');
    const welcome = document.getElementById('admin-welcome');
    if (welcome) welcome.textContent = 'Welcome, admin';
    renderAll();
  }

  function showLogin() {
    document.getElementById('admin-login-view').classList.remove('hidden');
    document.getElementById('admin-dashboard-view').classList.add('hidden');
  }

  function removeItem(key, id) {
    const items = readJson(key, []).filter(function (item) {
      return item.id !== id;
    });
    writeJson(key, items);
    renderAll();
  }

  function renderCounts() {
    const counts = [
      ['teacher-count', STORAGE.teachers],
      ['student-count', STORAGE.students],
      ['announcement-count', STORAGE.announcements],
      ['babyeyi-count', STORAGE.babyeyi],
      ['gallery-count', STORAGE.gallery]
    ];
    counts.forEach(function (pair) {
      const node = document.getElementById(pair[0]);
      if (node) node.textContent = readJson(pair[1], []).length;
    });
  }

  function renderPeople(listId, key, emptyText, template) {
    const list = document.getElementById(listId);
    if (!list) return;
    const items = readJson(key, []);
    if (!items.length) {
      list.innerHTML = '<p class="rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">' + emptyText + '</p>';
      return;
    }
    list.innerHTML = items.map(function (item) {
      return [
        '<div class="rounded-xl border border-slate-200 bg-white p-4">',
        '<div class="flex items-start justify-between gap-4">',
        '<div>' + template(item) + '</div>',
        '<button type="button" class="admin-remove rounded-full border border-red-200 px-3 py-1 text-xs font-bold text-red-700 hover:bg-red-50" data-key="' + key + '" data-id="' + item.id + '">Remove</button>',
        '</div>',
        '</div>'
      ].join('');
    }).join('');
  }

  function renderAnnouncements() {
    const list = document.getElementById('announcement-list');
    if (!list) return;
    const items = readJson(STORAGE.announcements, []);
    if (!items.length) {
      list.innerHTML = '<p class="rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">No announcements uploaded yet.</p>';
      return;
    }
    list.innerHTML = items.map(function (item) {
      return [
        '<article class="rounded-xl border border-slate-200 bg-white p-4">',
        '<div class="flex items-start justify-between gap-4">',
        '<div>',
        '<h3 class="font-bold text-slate-950">' + escapeHtml(item.title) + '</h3>',
        '<p class="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1557b0]">' + escapeHtml(item.category) + '</p>',
        '<p class="mt-2 text-sm text-slate-600">' + escapeHtml(item.body) + '</p>',
        '<p class="mt-2 text-xs text-slate-400">' + escapeHtml(item.date) + '</p>',
        '</div>',
        '<button type="button" class="admin-remove rounded-full border border-red-200 px-3 py-1 text-xs font-bold text-red-700 hover:bg-red-50" data-key="' + STORAGE.announcements + '" data-id="' + item.id + '">Remove</button>',
        '</div>',
        '</article>'
      ].join('');
    }).join('');
  }

  function renderImages(listId, key, emptyText) {
    const list = document.getElementById(listId);
    if (!list) return;
    const items = readJson(key, []);
    if (!items.length) {
      list.innerHTML = '<p class="rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">' + emptyText + '</p>';
      return;
    }
    list.innerHTML = items.map(function (item) {
      return [
        '<figure class="overflow-hidden rounded-xl border border-slate-200 bg-white">',
        '<img src="' + escapeHtml(item.src) + '" alt="' + escapeHtml(item.title) + '" class="h-44 w-full object-cover">',
        '<figcaption class="p-4">',
        '<div class="flex items-start justify-between gap-3">',
        '<div><p class="font-bold text-slate-950">' + escapeHtml(item.title) + '</p><p class="text-xs text-slate-400">' + escapeHtml(item.date) + '</p></div>',
        '<button type="button" class="admin-remove rounded-full border border-red-200 px-3 py-1 text-xs font-bold text-red-700 hover:bg-red-50" data-key="' + key + '" data-id="' + item.id + '">Remove</button>',
        '</div>',
        '</figcaption>',
        '</figure>'
      ].join('');
    }).join('');
  }

  function renderSubmissions() {
    const registrationList = document.getElementById('registration-list');
    const donationList = document.getElementById('donation-list');
    const registrations = readJson(STORAGE.registrations, []);
    const donations = readJson(STORAGE.donations, []);

    if (registrationList) {
      registrationList.innerHTML = registrations.length
        ? registrations.slice(0, 3).map(function (item) {
          return '<div class="rounded-lg bg-white border border-slate-200 p-3 text-sm"><strong>' + escapeHtml(item.firstName) + '</strong><br>' + escapeHtml(item.email || item.phone) + '<br><span class="text-slate-500">' + escapeHtml(item.program) + '</span></div>';
        }).join('')
        : '<p class="text-sm text-slate-500">No registrations submitted yet.</p>';
    }

    if (donationList) {
      donationList.innerHTML = donations.length
        ? donations.slice(0, 3).map(function (item) {
          return '<div class="rounded-lg bg-white border border-slate-200 p-3 text-sm"><strong>' + escapeHtml(item.donorName) + '</strong><br>' + escapeHtml(item.amount) + ' via ' + escapeHtml(item.method) + '<br><span class="text-slate-500">' + escapeHtml(item.reference) + '</span></div>';
        }).join('')
        : '<p class="text-sm text-slate-500">No donations submitted yet.</p>';
    }
  }

  function renderAll() {
    renderCounts();
    renderPeople('teacher-list', STORAGE.teachers, 'No teachers have been added yet.', function (item) {
      return '<h3 class="font-bold text-slate-950">' + escapeHtml(item.name) + '</h3><p class="text-sm text-slate-600">' + escapeHtml(item.subject) + '</p><p class="text-xs text-slate-400">' + escapeHtml(item.phone) + '</p>';
    });
    renderPeople('student-list', STORAGE.students, 'No students have been added yet.', function (item) {
      return '<h3 class="font-bold text-slate-950">' + escapeHtml(item.name) + '</h3><p class="text-sm text-slate-600">' + escapeHtml(item.className) + '</p><span class="status-pill status-green mt-2">' + escapeHtml(item.status) + '</span>';
    });
    renderAnnouncements();
    renderImages('babyeyi-list', STORAGE.babyeyi, 'No babyeyi image has been uploaded yet.');
    renderImages('gallery-list', STORAGE.gallery, 'No gallery image has been uploaded yet.');
    renderSubmissions();
    if (window.lucide) window.lucide.createIcons();
  }

  function addItem(key, item) {
    const items = readJson(key, []);
    items.unshift(Object.assign({ id: Date.now().toString(36) + Math.random().toString(36).slice(2), date: new Date().toLocaleString() }, item));
    writeJson(key, items);
    renderAll();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('admin-login-form');
    const logoutButton = document.getElementById('admin-logout');

    if (readJson(STORAGE.session, null)) showDashboard();
    else showLogin();

    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('admin-username').value.trim().toLowerCase();
        const password = document.getElementById('admin-password').value;
        if (username === 'admin' && password === getPassword()) {
          writeJson(STORAGE.session, { username: 'admin', date: new Date().toLocaleString() });
          loginForm.reset();
          showDashboard();
        } else {
          setMessage(document.getElementById('admin-login-message'), 'Incorrect username or password.', 'error');
        }
      });
    }

    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        localStorage.removeItem(STORAGE.session);
        showLogin();
      });
    }

    document.getElementById('teacher-form').addEventListener('submit', function (event) {
      event.preventDefault();
      addItem(STORAGE.teachers, {
        name: document.getElementById('teacher-name').value.trim(),
        subject: document.getElementById('teacher-subject').value.trim(),
        phone: document.getElementById('teacher-phone').value.trim()
      });
      event.target.reset();
    });

    document.getElementById('student-form').addEventListener('submit', function (event) {
      event.preventDefault();
      addItem(STORAGE.students, {
        name: document.getElementById('student-name').value.trim(),
        className: document.getElementById('student-class').value.trim(),
        status: document.getElementById('student-status').value
      });
      event.target.reset();
    });

    document.getElementById('announcement-form').addEventListener('submit', function (event) {
      event.preventDefault();
      addItem(STORAGE.announcements, {
        title: document.getElementById('announcement-title').value.trim(),
        category: document.getElementById('announcement-category').value,
        body: document.getElementById('announcement-body').value.trim()
      });
      event.target.reset();
    });

    document.getElementById('babyeyi-form').addEventListener('submit', async function (event) {
      event.preventDefault();
      const file = document.getElementById('babyeyi-file').files[0];
      if (!file) return;
      addItem(STORAGE.babyeyi, {
        title: document.getElementById('babyeyi-title').value.trim(),
        src: await fileToDataUrl(file)
      });
      event.target.reset();
    });

    document.getElementById('gallery-form').addEventListener('submit', async function (event) {
      event.preventDefault();
      const file = document.getElementById('gallery-file').files[0];
      if (!file) return;
      addItem(STORAGE.gallery, {
        title: document.getElementById('gallery-title').value.trim(),
        src: await fileToDataUrl(file)
      });
      event.target.reset();
    });

    document.getElementById('password-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const current = document.getElementById('current-password').value;
      const next = document.getElementById('new-admin-password').value.trim();
      const message = document.getElementById('password-message');
      if (current !== getPassword()) {
        setMessage(message, 'Current password is incorrect.', 'error');
        return;
      }
      if (next.length < 6) {
        setMessage(message, 'Use at least 6 characters for the new password.', 'error');
        return;
      }
      localStorage.setItem(STORAGE.password, next);
      event.target.reset();
      setMessage(message, 'Admin password changed successfully.', 'success');
    });

    document.addEventListener('click', function (event) {
      const button = event.target.closest('.admin-remove');
      if (!button) return;
      removeItem(button.dataset.key, button.dataset.id);
    });
  });
})();

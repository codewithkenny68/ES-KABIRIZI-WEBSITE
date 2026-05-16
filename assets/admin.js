(function () {
  const ADMIN_ACCOUNTS = [
    { username: 'admin', password: 'school2026', role: 'Administrator' },
    { username: 'teacher1', password: 'class2026', role: 'Teacher' },
    { username: 'staff1', password: 'welcome2026', role: 'Staff' }
  ];
  const SESSION_KEY = 'esKabiriziAdminSession';
  const POSTS_KEY = 'esKabiriziAdminPosts';
  const USERS_KEY = 'esKabiriziUsers';

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function getSession() {
    return readJson(SESSION_KEY, null);
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getPosts() {
    return readJson(POSTS_KEY, []);
  }

  function getUsers() {
    return readJson(USERS_KEY, []);
  }

  function setMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.className = type === 'error'
      ? 'mt-4 text-sm text-red-700 font-semibold'
      : 'mt-4 text-sm text-green-700 font-semibold';
    element.classList.remove('hidden');
    setTimeout(function () {
      element.classList.add('hidden');
    }, 3500);
  }

  function showDashboard() {
    const loginView = document.getElementById('admin-login-view');
    const dashboardView = document.getElementById('admin-dashboard-view');
    if (loginView) loginView.classList.add('hidden');
    if (dashboardView) dashboardView.classList.remove('hidden');

    const session = getSession();
    const welcomeText = document.getElementById('admin-welcome');
    if (welcomeText) {
      if (session && session.username) {
        welcomeText.textContent = 'Welcome, ' + session.username + ' (' + session.role + '). Choose a page or feature to review.';
      } else {
        welcomeText.textContent = 'Welcome back. Choose an area to review or post updates.';
      }
    }

    renderPosts();
    renderUsers();
  }

  function showLogin() {
    const loginView = document.getElementById('admin-login-view');
    const dashboardView = document.getElementById('admin-dashboard-view');
    if (loginView) loginView.classList.remove('hidden');
    if (dashboardView) dashboardView.classList.add('hidden');
  }

  function renderPosts() {
    const list = document.getElementById('admin-post-list');
    if (!list) return;

    const posts = getPosts();
    if (!posts.length) {
      list.innerHTML = '<p class="text-sm text-slate-500">No information has been posted yet.</p>';
      return;
    }

    list.innerHTML = posts.map(function (post) {
      return [
        '<article class="rounded-xl border border-slate-200 bg-slate-50 p-5">',
        '<div class="flex flex-wrap items-center justify-between gap-3">',
        '<h3 class="font-heading text-xl font-bold text-slate-950">' + escapeHtml(post.title) + '</h3>',
        '<span class="rounded-full bg-[#2f5fa9]/10 px-3 py-1 text-xs font-bold text-[#2f5fa9]">' + escapeHtml(post.category) + '</span>',
        '</div>',
        '<p class="mt-3 text-sm leading-relaxed text-slate-600">' + escapeHtml(post.body) + '</p>',
        '<p class="mt-4 text-xs text-slate-400">' + escapeHtml(post.date) + '</p>',
        '</article>'
      ].join('');
    }).join('');
  }

  function renderUsers() {
    const list = document.getElementById('admin-user-list');
    if (!list) return;

    const users = getUsers();
    if (!users.length) {
      list.innerHTML = '<p class="text-sm text-slate-500">No users have been added yet.</p>';
      return;
    }

    list.innerHTML = users.map(function (user) {
      return [
        '<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">',
        '<div class="flex items-center justify-between gap-3">',
        '<div>',
        '<h3 class="font-bold text-slate-950">' + escapeHtml(user.username) + '</h3>',
        '<p class="text-sm text-slate-500">' + escapeHtml(user.role) + '</p>',
        '</div>',
        '<span class="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Active</span>',
        '</div>',
        '<p class="mt-4 text-sm text-slate-600">Password: <span class="font-semibold text-slate-950">' + escapeHtml(user.password) + '</span></p>',
        '</div>'
      ].join('');
    }).join('');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('admin-login-form');
    const loginMessage = document.getElementById('admin-login-message');
    const logoutButton = document.getElementById('admin-logout');
    const postForm = document.getElementById('admin-post-form');
    const postMessage = document.getElementById('post-message');
    const userForm = document.getElementById('admin-user-form');
    const userMessage = document.getElementById('user-message');
    const clearPosts = document.getElementById('clear-posts');

    if (getSession()) {
      showDashboard();
    } else {
      showLogin();
    }

    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('admin-username').value.trim();
        const password = document.getElementById('admin-password').value;

        const account = ADMIN_ACCOUNTS.find(function (acct) {
          return acct.username.toLowerCase() === username.toLowerCase() && acct.password === password;
        });

        if (account) {
          writeJson(SESSION_KEY, { username: account.username, role: account.role });
          loginForm.reset();
          showDashboard();
        } else {
          setMessage(loginMessage, 'Incorrect username or password.', 'error');
        }
      });
    }

    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        localStorage.removeItem(SESSION_KEY);
        showLogin();
      });
    }

    if (postForm) {
      postForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('post-title').value.trim();
        const category = document.getElementById('post-category').value;
        const body = document.getElementById('post-body').value.trim();

        if (!title || !body) {
          setMessage(postMessage, 'Please add a title and information before publishing.', 'error');
          return;
        }

        const posts = getPosts();
        posts.unshift({
          title,
          category,
          body,
          date: new Date().toLocaleString()
        });
        writeJson(POSTS_KEY, posts);
        postForm.reset();
        renderPosts();
        setMessage(postMessage, 'Information published successfully.', 'success');
      });
    }

    if (userForm) {
      userForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('new-user-name').value.trim();
        const password = document.getElementById('new-user-password').value.trim();
        const role = document.getElementById('new-user-role').value;

        if (!username || !password) {
          setMessage(userMessage, 'Please add both username and password.', 'error');
          return;
        }

        const users = getUsers().filter(function (user) {
          return user.username.toLowerCase() !== username.toLowerCase();
        });
        users.unshift({ username, password, role });
        writeJson(USERS_KEY, users);
        userForm.reset();
        renderUsers();
        setMessage(userMessage, 'User password saved successfully.', 'success');
      });
    }

    if (clearPosts) {
      clearPosts.addEventListener('click', function () {
        writeJson(POSTS_KEY, []);
        renderPosts();
      });
    }
  });
})();

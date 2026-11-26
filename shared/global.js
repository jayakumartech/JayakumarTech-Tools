(() => {
  'use strict';

  const KEY = 'jt-theme';
  const button = document.getElementById('theme')
    || document.getElementById('themeBtn');

  const legacyKeys = {
    'quick-notes-tasks': 'jk-notes-theme'
  };

  const folder = location.pathname.split('/').filter(Boolean);
  const tool = folder.includes('tools')
    ? folder[folder.indexOf('tools') + 1]
    : '';

  const legacyKey = legacyKeys[tool];

  function readTheme() {
    try {
      const shared = localStorage.getItem(KEY);
      if (shared === 'light' || shared === 'dark') return shared;

      const legacy = legacyKey
        ? localStorage.getItem(legacyKey)
        : null;

      return legacy === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }

  function applyTheme(theme) {
    const value = theme === 'light' ? 'light' : 'dark';

    document.body.classList.toggle('light', value === 'light');
    document.body.classList.toggle('dark', value === 'dark');

    if (button) {
      button.textContent = value === 'light' ? '☀ Theme' : '☾ Theme';
      button.setAttribute('aria-pressed', String(value === 'light'));
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(KEY, theme);
      if (legacyKey) localStorage.setItem(legacyKey, theme);
    } catch (error) {
      console.warn('Theme preference could not be saved.', error);
    }
    applyTheme(theme);
  }

  applyTheme(readTheme());

  if (button) {
    button.onclick = null;
    button.addEventListener('click', () => {
      const next = document.body.classList.contains('light')
        ? 'dark'
        : 'light';
      saveTheme(next);
    });
  }

  window.addEventListener('storage', event => {
    if (event.key === KEY && event.newValue) {
      applyTheme(event.newValue);
    }
  });
})();

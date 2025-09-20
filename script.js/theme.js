(() => {
    const KEY = 'tono-theme';
    const html = document.documentElement;
    const toggle = () => document.querySelector('#themeToggle input');
  
    function apply(theme){
      if (theme === 'dark'){
        html.setAttribute('data-theme','dark');
        const cb = toggle(); if (cb) cb.checked = true;
      } else {
        html.removeAttribute('data-theme');
        const cb = toggle(); if (cb) cb.checked = false;
      }
    }
  
    // On first paint, respect saved theme or OS preference
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    apply(saved ?? (prefersDark ? 'dark' : 'light'));
  
    // Wire the checkbox (when present on the page)
    window.addEventListener('DOMContentLoaded', () => {
      const cb = toggle(); if (!cb) return;
      cb.addEventListener('change', e => {
        const theme = e.target.checked ? 'dark' : 'light';
        apply(theme);
        localStorage.setItem(KEY, theme);
      });
    });
  
    // If OS theme changes and user hasn’t manually chosen, follow OS
    try{
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener?.('change', e => {
        if (localStorage.getItem(KEY)) return; // manual choice wins
        apply(e.matches ? 'dark' : 'light');
      });
    }catch{}
  })();
  
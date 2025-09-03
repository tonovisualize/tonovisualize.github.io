
/**
 * menu.js — shared full‑screen menu toggle
 * Expected HTML:
 *   <div id="menuIcon" class="menu-icon">...</div>
 *   <div id="fullScreenMenu" class="full-screen-menu"> ... </div>
 *
 * Behavior:
 *  - Click/Enter/Space on #menuIcon opens/closes the overlay
 *  - ESC closes
 *  - Clicking any link inside the menu closes
 *  - Body scroll locks while open
 *  - ARIA updates for accessibility
 */
(function () {
    // Run after DOM is ready even if script is loaded in <head> with defer
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  
    function init() {
      const icon = document.getElementById('menuIcon');
      const menu = document.getElementById('fullScreenMenu');
  
      if (!icon || !menu) return; // silently no-op if markup missing
  
      // Ensure initial hidden state
      menu.style.display = 'none';
      icon.setAttribute('role', 'button');
      icon.setAttribute('tabindex', '0');
      icon.setAttribute('aria-controls', 'fullScreenMenu');
      icon.setAttribute('aria-expanded', 'false');
  
      function openMenu() {
        if (menu.classList.contains('show')) return;
        menu.style.display = 'flex'; // ensure it's on‑screen before anim
        requestAnimationFrame(() => {
          menu.classList.add('show');
          icon.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        });
      }
  
      function closeMenu() {
        if (!menu.classList.contains('show')) return;
        menu.classList.remove('show');
        icon.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        // Wait for CSS transition to finish before hiding
        setTimeout(() => {
          if (!menu.classList.contains('show')) menu.style.display = 'none';
        }, 300);
      }
  
      function toggleMenu() {
        menu.classList.contains('show') ? closeMenu() : openMenu();
      }
  
      // Icon interactions
      icon.addEventListener('click', toggleMenu);
      icon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleMenu();
        }
      });
  
      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('show')) closeMenu();
      });
  
      // Close when clicking a nav link inside the menu
      menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    }
  })();
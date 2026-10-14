/**
 * Header & Navigation Component
 * Features sticky navigation, scroll threshold detection, mobile drawer, and keyboard accessibility.
 */

import { siteConfig } from '../data/site.js';

export function renderHeader(): string {
  return `
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Logo -->
        <a href="#hero" class="brand-link" aria-label="G-TEC Education Ottappalam Home">
          <img 
            src="./images/brand/gtec-logo.png" 
            alt="G-TEC Education Ottappalam Logo" 
            class="brand-logo-img"
            width="180" 
            height="44"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav aria-label="Primary Navigation" class="nav-desktop-wrapper">
          <ul class="nav-desktop">
            <li><a href="#hero" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#courses" class="nav-link">Courses</a></li>
            <li><a href="#campus" class="nav-link">Campus</a></li>
            <li><a href="#gallery" class="nav-link">Student Work</a></li>
            <li><a href="#enquiry" class="nav-link">Admissions</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- Quick Action / CTA -->
        <div class="header-cta-group">
          <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm hide-mobile" aria-label="Chat on WhatsApp with G-TEC Ottappalam">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a href="#enquiry" class="btn btn-primary btn-sm">
            Enquire Now
          </a>

          <!-- Mobile Toggle -->
          <button type="button" class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
    <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation" aria-hidden="true">
      <div class="drawer-top">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
          <img src="./images/brand/gtec-logo.png" alt="G-TEC Logo" style="height: 38px; width: auto;" />
          <button type="button" class="modal-close-btn" id="drawer-close-btn" aria-label="Close menu">&times;</button>
        </div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.25rem;">
          <li><a href="#hero" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Home</a></li>
          <li><a href="#about" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">About</a></li>
          <li><a href="#courses" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Courses</a></li>
          <li><a href="#campus" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Campus</a></li>
          <li><a href="#gallery" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Student Work</a></li>
          <li><a href="#enquiry" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Admissions</a></li>
          <li><a href="#contact" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Contact</a></li>
        </ul>
      </div>

      <div class="drawer-bottom" style="border-top: 1px solid var(--color-border); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="${siteConfig.phoneTel}" class="btn btn-secondary btn-sm" style="width: 100%;">
          Call: ${siteConfig.phoneDisplay}
        </a>
        <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="width: 100%;">
          Chat on WhatsApp
        </a>
      </div>
    </aside>
  `;
}

export function initHeader(): void {
  const header = document.getElementById('site-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open drawer
  const openDrawer = () => {
    drawer?.classList.add('open');
    drawer?.setAttribute('aria-hidden', 'false');
    backdrop?.classList.add('open');
    mobileBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  // Close drawer
  const closeDrawer = () => {
    drawer?.classList.remove('open');
    drawer?.setAttribute('aria-hidden', 'true');
    backdrop?.classList.remove('open');
    mobileBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

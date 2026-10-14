/**
 * Main Application Orchestrator for G-TEC Education Ottappalam
 * Assembles all modular components, initializes interactive events,
 * and handles cinematic scroll reveals.
 */

import { renderHeader, initHeader } from './components/Header.js';
import { renderHeroSection } from './components/HeroSection.js';
import { renderAboutSection } from './components/AboutSection.js';
import { renderCourseCategorySection, initCourseSection } from './components/CourseCategorySection.js';
import { renderCourseDetailModal, initCourseDetailModal } from './components/CourseDetailModal.js';
import { renderCampusSection } from './components/CampusSection.js';
import { renderStudentGallery, initStudentGallery } from './components/StudentGallery.js';
import { renderEnquiryForm, initEnquiryForm } from './components/EnquiryForm.js';
import { renderContactSection } from './components/ContactSection.js';
import { renderFooter } from './components/Footer.js';

export function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Mount Application Shell
  appContainer.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHeroSection()}
      ${renderAboutSection()}
      ${renderCourseCategorySection()}
      ${renderCampusSection()}
      ${renderStudentGallery()}
      ${renderEnquiryForm()}
      ${renderContactSection()}
    </main>
    ${renderFooter()}
    ${renderCourseDetailModal()}
  `;

  // Initialize Component Interactivity
  initHeader();
  initCourseSection();
  initCourseDetailModal();
  initStudentGallery();
  initEnquiryForm();

  // Initialize Cinematic Scroll Reveal Observer
  initScrollAnimations();

  // Initialize Active Section Observer for Nav links
  initActiveNavObserver();
}

/**
 * Cinematic Scroll Trigger using performant IntersectionObserver
 */
function initScrollAnimations() {
  const revealItems = document.querySelectorAll('.reveal-item');
  
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin
  });

  revealItems.forEach(el => observer.observe(el));
}

/**
 * Highlight active navigation item based on current viewport section
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35
  });

  sections.forEach(s => observer.observe(s));
}

// Auto-boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

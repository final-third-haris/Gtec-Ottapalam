/**
 * Student Work & Creative Gallery Component — "MADE WHILE LEARNING"
 * Showcase of student studio outputs, practical assignments, and technical projects.
 * Explicitly marks demonstration assignments and real campus activities.
 */

import { galleryItems, galleryCategories, GalleryItem } from '../data/gallery.js';

export function renderStudentGallery() {
  return `
    <section class="section section-white" id="gallery" aria-label="Student Work and Creative Gallery">
      <div class="container">
        
        <!-- Section Header -->
        <div class="reveal-item" style="margin-bottom: 3rem;">
          <div style="margin-bottom: 1rem;">
            <span class="editorial-tag">Creative Showcase</span>
          </div>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 1.5rem;">
            <div>
              <h2 style="font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05;">
                MADE WHILE LEARNING.
              </h2>
              <p style="color: var(--color-text-secondary); max-width: 600px; margin-top: 0.75rem; font-size: 1.05rem;">
                A portfolio of real training milestones, practical studio outputs, and laboratory assignments completed by students across our technical disciplines.
              </p>
            </div>
            
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-text-light); text-transform: uppercase;">
              Studio Practice & Campus Highlights
            </span>
          </div>
        </div>

        <!-- Filter Navigation -->
        <div class="gallery-nav reveal-item" role="tablist" aria-label="Gallery Categories">
          ${galleryCategories.map((cat, idx) => `
            <button 
              type="button" 
              class="tab-btn ${idx === 0 ? 'active' : ''}" 
              data-filter="${cat.id}"
              role="tab"
              aria-selected="${idx === 0 ? 'true' }"
            >
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid" id="gallery-items-container" aria-live="polite">
          <!-- Populated by JS -->
        </div>

      </div>
    </section>
  `;
}

export function initStudentGallery() {
  const container = document.getElementById('gallery-items-container');
  const filterBtns = document.querySelectorAll('.gallery-nav .tab-btn');
  let currentFilter = 'all';

  const renderGallery = () => {
    if (!container) return;

    const filtered = currentFilter === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === currentFilter);

    container.innerHTML = filtered.map(item => `
      <article class="gallery-card reveal-item">
        <div class="gallery-img-wrap">
          <img 
            src="${item.image}" 
            alt="${item.title} - ${item.courseRelation}" 
            loading="lazy"
            decoding="async"
            width="480"
            height="320"
          />
          <div style="position: absolute; top: 0.85rem; left: 0.85rem;">
            <span style="font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700; padding: 0.3rem 0.65rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); border-radius: 3px; color: var(--color-accent-red); text-transform: uppercase;">
              ${item.categoryLabel}
            </span>
          </div>
        </div>

        <div class="gallery-info">
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.35rem;">
              ${item.courseRelation}
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem;">
              ${item.title}
            </h3>
            <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.55; margin-bottom: 1rem;">
              ${item.description}
            </p>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; border-top: 1px solid var(--color-border); padding-top: 0.85rem;">
            ${item.tools.map(tool => `
              <span style="font-family: var(--font-mono); font-size: 0.7rem; padding: 0.15rem 0.45rem; background: var(--color-bg-primary); border-radius: 2px; color: var(--color-text-secondary);">
                ${tool}
              </span>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  renderGallery();
}

/**
 * Course Discovery Component — "FIND YOUR FIELD"
 * Features 4 distinctive editorial category showcases (CAD, Software, Multimedia, Accounting),
 * category tab switching, search filter, responsive course cards, and modal triggers.
 */

import { courseCategories, verifiedCourses, getCourseWhatsAppUrl } from '../data/courses.js';

export function renderCourseCategorySection(): string {
  return `
    <section class="section section-white" id="courses" aria-label="Official Course Catalogue">
      <div class="container">
        
        <!-- Section Header -->
        <div class="courses-header reveal-item">
          <div style="margin-bottom: 1rem;">
            <span class="editorial-tag">Official Course Catalogue</span>
          </div>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 1.5rem;">
            <div>
              <h2 style="font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05;">
                FIND YOUR FIELD.
              </h2>
              <p style="color: var(--color-text-secondary); max-width: 580px; margin-top: 0.75rem; font-size: 1.05rem;">
                Explore verified curricula across four core technical disciplines taught at G-TEC Education Ottappalam.
              </p>
            </div>
            
            <a href="https://www.gteceducation.com/courses/software" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View G-TEC official central course directory">
              <span>Official Global Catalogue &rarr;</span>
            </a>
          </div>
        </div>

        <!-- Category Tabs Navigation -->
        <div class="category-tabs-nav reveal-item" role="tablist" aria-label="Course Categories">
          ${courseCategories.map((cat, idx) => `
            <button 
              type="button" 
              class="tab-btn ${idx === 1 ? 'active' : ''}" 
              role="tab" 
              aria-selected="${idx === 1 ? 'true' : 'false'}" 
              data-category="${cat.id}"
              id="tab-${cat.id}"
              aria-controls="panel-${cat.id}"
            >
              <span class="tab-num">${cat.index}</span>
              <span>${cat.name.split('&')[0].trim()}</span>
            </button>
          `).join('')}
        </div>

        <!-- Category Editorial Hero Card (Dynamic Content populated via JS) -->
        <div id="category-editorial-display" class="reveal-item">
          <!-- Default will be populated in init -->
        </div>

        <!-- Course Controls Filter & Search Bar -->
        <div class="course-controls-bar reveal-item">
          <div class="search-box-wrapper">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="course-search-input" 
              class="search-input" 
              placeholder="Search course title, syllabus or tool (e.g. Python, AutoCAD, Tally, Revit, Blender)..."
              aria-label="Search courses"
            />
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">
              Showing: <strong id="course-count-indicator" style="color: var(--color-text-primary);">0</strong> Courses
            </span>
          </div>
        </div>

        <!-- Courses Cards Grid -->
        <div class="courses-grid" id="courses-grid-container" aria-live="polite">
          <!-- Populated dynamically via JS -->
        </div>

      </div>
    </section>
  `;
}

export function initCourseSection(): void {
  let currentCategory: 'cad' | 'software' | 'multimedia' | 'accounting' = 'software';
  let searchQuery = '';

  const tabButtons = document.querySelectorAll<HTMLButtonElement>('.category-tabs-nav .tab-btn');
  const editorialDisplay = document.getElementById('category-editorial-display');
  const coursesGrid = document.getElementById('courses-grid-container');
  const searchInput = document.getElementById('course-search-input') as HTMLInputElement | null;
  const countIndicator = document.getElementById('course-count-indicator');

  // Render Category Editorial Card
  const updateCategoryEditorial = (catId: 'cad' | 'software' | 'multimedia' | 'accounting') => {
    const cat = courseCategories.find(c => c.id === catId);
    if (!cat || !editorialDisplay) return;

    editorialDisplay.innerHTML = `
      <div class="category-editorial-card">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <span class="editorial-tag">${cat.name}</span>
            <span class="editorial-number">${cat.index}</span>
          </div>
          <h3 style="font-size: clamp(1.8rem, 3.2vw, 2.6rem); margin-bottom: 1rem; color: var(--color-text-primary);">
            ${cat.tagline}
          </h3>
          <p style="color: var(--color-text-secondary); line-height: 1.65; font-size: 1rem;">
            ${cat.description}
          </p>
          <div class="category-meta-tags">
            ${cat.visualThemes.map(theme => `<span class="meta-pill">${theme}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: center; gap: 1.25rem; border-left: 1px solid var(--color-border); padding-left: clamp(1.5rem, 3vw, 3rem);">
          <div>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.25rem;">
              Verified G-TEC Stream
            </span>
            <strong style="font-size: 1.15rem; color: var(--color-text-primary);">
              Hands-On Laboratory Programs
            </strong>
          </div>
          <p style="font-size: 0.9rem; color: var(--color-text-secondary);">
            Official syllabus compliant with international skilling frameworks, offering structured course modules, live practice, and verifiable certification.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#enquiry" class="btn btn-primary btn-sm" onclick="window.selectCourseCategory('${cat.id}')">
              Enquire This Stream
            </a>
            <a href="${cat.officialCatalogUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-white btn-sm">
              Official Syllabus &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
  };

  // Render Course Cards
  const renderCourses = () => {
    if (!coursesGrid) return;

    let filtered = verifiedCourses.filter(c => c.category === currentCategory);

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = verifiedCourses.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tools.some(t => t.toLowerCase().includes(q)) ||
        c.modules.some(m => m.toLowerCase().includes(q))
      );
    }

    if (countIndicator) {
      countIndicator.textContent = filtered.length.toString();
    }

    if (filtered.length === 0) {
      coursesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--color-bg-secondary); border-radius: 8px;">
          <p style="font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
            No courses found matching "${searchQuery}".
          </p>
          <button type="button" class="btn btn-secondary btn-sm" id="reset-search-btn">
            Clear Search
          </button>
        </div>
      `;
      document.getElementById('reset-search-btn')?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        renderCourses();
      });
      return;
    }

    coursesGrid.innerHTML = filtered.map(course => {
      const waUrl = getCourseWhatsAppUrl(course.name);
      return `
        <article class="course-card" id="card-${course.id}">
          <div class="course-card-top">
            <span class="course-level-badge">${course.level}</span>
            <h4 class="course-card-title">${course.name}</h4>
            <p class="course-card-desc">${course.description.substring(0, 130)}...</p>
            
            <div class="course-meta-pills">
              <span class="course-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${course.duration}
              </span>
              <span class="course-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                ${course.categoryTitle}
              </span>
            </div>

            <!-- Software Tools Tags -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
              ${course.tools.slice(0, 3).map(tool => `
                <span style="font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.5rem; background: var(--color-bg-primary); border: 1px solid var(--color-border); border-radius: 3px; color: var(--color-text-secondary);">
                  ${tool}
                </span>
              `).join('')}
              ${course.tools.length > 3 ? `<span style="font-family: var(--font-mono); font-size: 0.72rem; padding: 0.2rem 0.4rem; color: var(--color-text-light);">+${course.tools.length - 3}</span>` : ''}
            </div>
          </div>

          <div class="course-card-actions">
            <button 
              type="button" 
              class="btn btn-secondary btn-sm" 
              style="flex: 1;"
              onclick="window.openCourseDetails('${course.id}')"
            >
              Details & Syllabus
            </button>
            
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-sm btn-icon" 
              title="Enquire on WhatsApp"
              aria-label="Enquire about ${course.name} on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
              </svg>
            </a>

            <a 
              href="#enquiry" 
              class="btn btn-primary btn-sm btn-icon" 
              title="Direct Admission Enquiry"
              aria-label="Direct Admission Enquiry for ${course.name}"
              onclick="window.selectCourseForEnquiry('${course.id}', '${course.category}')"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  };

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const cat = btn.getAttribute('data-category') as 'cad' | 'software' | 'multimedia' | 'accounting';
      if (cat) {
        currentCategory = cat;
        updateCategoryEditorial(currentCategory);
        renderCourses();
      }
    });
  });

  // Search input with debounce
  searchInput?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    renderCourses();
  });

  // Initial load
  updateCategoryEditorial(currentCategory);
  renderCourses();
}

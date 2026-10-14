/**
 * Course Detail Modal Component
 * Renders an accessible native <dialog> element displaying full official syllabus,
 * duration, eligibility, software tools covered, official central link, and instant WhatsApp enquiry.
 */

import { verifiedCourses, getCourseById, Course } from '../data/courses.js';
import { getCourseWhatsAppUrl } from '../data/site.js';

export function renderCourseDetailModal(): string {
  return `
    <dialog id="course-detail-dialog" class="course-modal" aria-labelledby="modal-course-title">
      <div class="modal-header">
        <div>
          <span id="modal-course-level" class="course-level-badge">Diploma Course</span>
          <h3 id="modal-course-title" style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); line-height: 1.2; color: var(--color-text-primary);">
            Course Title
          </h3>
        </div>
        <button type="button" class="modal-close-btn" id="modal-close-button" aria-label="Close course details">&times;</button>
      </div>

      <div class="modal-body" id="modal-course-content">
        <!-- Content will be injected dynamically -->
      </div>

      <div class="modal-footer">
        <a id="modal-official-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-white btn-sm">
          <span>Official G-TEC Source &rarr;</span>
        </a>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a id="modal-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
            </svg>
            <span>WhatsApp Enquiry</span>
          </a>

          <button type="button" id="modal-enquire-btn" class="btn btn-primary btn-sm">
            Enquire About This Course
          </button>
        </div>
      </div>
    </dialog>
  `;
}

export function initCourseDetailModal(): void {
  const dialog = document.getElementById('course-detail-dialog') as HTMLDialogElement | null;
  const closeBtn = document.getElementById('modal-close-button');
  const levelElem = document.getElementById('modal-course-level');
  const titleElem = document.getElementById('modal-course-title');
  const contentElem = document.getElementById('modal-course-content');
  const officialLink = document.getElementById('modal-official-link') as HTMLAnchorElement | null;
  const whatsappBtn = document.getElementById('modal-whatsapp-btn') as HTMLAnchorElement | null;
  const enquireBtn = document.getElementById('modal-enquire-btn');

  let currentSelectedCourse: Course | null = null;

  // Window global function to trigger modal from any card
  (window as any).openCourseDetails = (courseId: string) => {
    const course = getCourseById(courseId);
    if (!course || !dialog) return;

    currentSelectedCourse = course;

    if (levelElem) levelElem.textContent = `${course.categoryTitle} • ${course.level}`;
    if (titleElem) titleElem.textContent = course.name;
    if (officialLink) {
      officialLink.href = course.officialUrl;
      officialLink.setAttribute('aria-label', `View ${course.name} on official G-TEC Education website`);
    }
    if (whatsappBtn) {
      whatsappBtn.href = getCourseWhatsAppUrl(course.name);
    }

    if (contentElem) {
      contentElem.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.75rem;">
          
          <!-- Key Meta Highlights Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; background: var(--color-bg-primary); padding: 1.25rem; border-radius: 6px; border: 1px solid var(--color-border);">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block;">Duration</span>
              <strong style="color: var(--color-text-primary); font-size: 0.95rem;">${course.duration}</strong>
            </div>
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block;">Eligibility</span>
              <strong style="color: var(--color-text-primary); font-size: 0.95rem;">${course.eligibility}</strong>
            </div>
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block;">Certification</span>
              <strong style="color: var(--color-text-primary); font-size: 0.95rem;">G-TEC Global Certified</strong>
            </div>
          </div>

          <!-- Description -->
          <div>
            <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-primary); margin-bottom: 0.5rem; font-family: var(--font-mono);">
              Official Course Overview
            </h4>
            <p style="color: var(--color-text-secondary); line-height: 1.65; font-size: 0.96rem;">
              ${course.description}
            </p>
          </div>

          <!-- Software / Tools Covered -->
          <div>
            <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-primary); margin-bottom: 0.75rem; font-family: var(--font-mono);">
              Software & Tools Mastered
            </h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${course.tools.map(tool => `
                <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.8rem; background: var(--color-bg-secondary); border: 1px solid var(--color-border); border-radius: 4px; color: var(--color-text-primary);">
                  ${tool}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Modules / Syllabus Breakdown -->
          <div>
            <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-primary); margin-bottom: 0.75rem; font-family: var(--font-mono);">
              Curriculum Outline & Modules
            </h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
              ${course.modules.map((mod, i) => `
                <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.92rem; color: var(--color-text-secondary);">
                  <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--color-accent-red); background: #FFF0F1; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                    ${i + 1}
                  </span>
                  <span>${mod}</span>
                </li>
              `).join('')}
            </ul>
          </div>

        </div>
      `;
    }

    dialog.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    dialog?.close();
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);

  // Close on backdrop click
  dialog?.addEventListener('click', (e) => {
    if (e.target === dialog) {
      closeModal();
    }
  });

  // Enquire button in modal jumps to form and populates course
  enquireBtn?.addEventListener('click', () => {
    if (currentSelectedCourse) {
      closeModal();
      (window as any).selectCourseForEnquiry(currentSelectedCourse.id, currentSelectedCourse.category);
      const enquirySection = document.getElementById('enquiry');
      enquirySection?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

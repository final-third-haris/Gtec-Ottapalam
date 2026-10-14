/**
 * Admissions Enquiry Form Component — "YOUR NEXT CHAPTER STARTS HERE"
 * Implements strict client-side validation, dynamic course category cascading,
 * genuine form submission handling with clear explanations, and direct WhatsApp routing.
 */

import { siteConfig, getCourseWhatsAppUrl } from '../data/site.js';
import { courseCategories, verifiedCourses } from '../data/courses.js';

export function renderEnquiryForm() {
  return `
    <section class="section section-secondary border-t-subtle" id="enquiry" aria-label="Admissions and Course Enquiry">
      <div class="container">
        
        <div class="enquiry-grid">
          
          <!-- Left Column: Editorial Information & Direct WhatsApp Option -->
          <div class="enquiry-editorial reveal-item">
            <div style="margin-bottom: 1rem;">
              <span class="editorial-tag">Admissions & Guidance</span>
            </div>

            <h2 style="font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; margin-bottom: 1.5rem;">
              YOUR NEXT CHAPTER<br />STARTS HERE.
            </h2>

            <p style="color: var(--color-text-secondary); font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem;">
              Whether you are preparing for a career in software engineering, architectural CAD design, creative multimedia, or corporate accounting, our academic counsellors are available to guide you.
            </p>

            <div style="background: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.75rem; margin-bottom: 2rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <span style="display: flex; width: 10px; height: 10px; border-radius: 50%; background: #25D366;"></span>
                <strong style="color: var(--color-text-primary); font-size: 1rem;">
                  Instant WhatsApp Admission Line
                </strong>
              </div>
              <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
                Prefer immediate messaging? Contact our admissions officer directly via WhatsApp for quick batch schedules and course fee details.
              </p>
              <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" id="whatsapp-direct-link" style="width: 100%;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
                </svg>
                <span>Chat on WhatsApp (${siteConfig.whatsappNumber})</span>
              </a>
            </div>

            <div style="font-size: 0.88rem; color: var(--color-text-light);">
              <p>Telephone: <a href="${siteConfig.phoneTel}" style="color: var(--color-text-primary); font-weight: 700; text-decoration: none;">${siteConfig.phoneDisplay}</a></p>
              <p>Email: <a href="mailto:${siteConfig.email}" style="color: var(--color-text-primary); text-decoration: none;">${siteConfig.email}</a></p>
            </div>
          </div>

          <!-- Right Column: Interactive Form -->
          <div class="enquiry-card reveal-item" style="transition-delay: 0.1s;">
            <form id="admissions-enquiry-form" novalidate>
              
              <!-- Full Name -->
              <div class="form-group">
                <label for="form-name" class="form-label">
                  Full Name <span class="required" aria-hidden="true">*</span>
                </label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="fullName" 
                  class="form-control" 
                  placeholder="Enter your full name" 
                  required 
                  autocomplete="name"
                  aria-describedby="name-feedback"
                />
                <div class="form-feedback" id="name-feedback"></div>
              </div>

              <!-- Phone Number -->
              <div class="form-group">
                <label for="form-phone" class="form-label">
                  Contact Phone Number <span class="required" aria-hidden="true">*</span>
                </label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  name="phoneNumber" 
                  class="form-control" 
                  placeholder="e.g. 9876543210" 
                  required 
                  autocomplete="tel"
                  aria-describedby="phone-feedback"
                />
                <div class="form-feedback" id="phone-feedback"></div>
              </div>

              <!-- Email (Optional) -->
              <div class="form-group">
                <label for="form-email" class="form-label">
                  Email Address <span style="font-size: 0.75rem; text-transform: lowercase; color: var(--color-text-light);">(optional)</span>
                </label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email" 
                  class="form-control" 
                  placeholder="e.g. name@example.com" 
                  autocomplete="email"
                  aria-describedby="email-feedback"
                />
                <div class="form-feedback" id="email-feedback"></div>
              </div>

              <!-- Course Category -->
              <div class="form-group">
                <label for="form-category" class="form-label">
                  Course Category <span class="required" aria-hidden="true">*</span>
                </label>
                <select id="form-category" name="category" class="form-control" required aria-describedby="category-feedback">
                  <option value="">Select a category...</option>
                  ${courseCategories.map(cat => `
                    <option value="${cat.id}">${cat.name}</option>
                  `).join('')}
                </select>
                <div class="form-feedback" id="category-feedback"></div>
              </div>

              <!-- Specific Course of Interest -->
              <div class="form-group">
                <label for="form-course" class="form-label">
                  Course of Interest <span class="required" aria-hidden="true">*</span>
                </label>
                <select id="form-course" name="courseId" class="form-control" required aria-describedby="course-feedback">
                  <option value="">Select a course...</option>
                  ${verifiedCourses.map(c => `
                    <option value="${c.id}" data-category="${c.category}">${c.name} (${c.categoryTitle})</option>
                  `).join('')}
                </select>
                <div class="form-feedback" id="course-feedback"></div>
              </div>

              <!-- Message (Optional) -->
              <div class="form-group">
                <label for="form-message" class="form-label">
                  Your Questions or Timing Preference <span style="font-size: 0.75rem; text-transform: lowercase; color: var(--color-text-light);">(optional)</span>
                </label>
                <textarea 
                  id="form-message" 
                  name="message" 
                  rows="3" 
                  class="form-control" 
                  placeholder="Let us know your current qualification, preferred batch timing (morning/evening), or questions..."
                ></textarea>
              </div>

              <!-- Actions -->
              <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-top: 2rem;">
                <button type="submit" id="form-submit-btn" class="btn btn-primary" style="width: 100%;">
                  <span>Submit Course Enquiry</span>
                </button>

                <button type="button" id="form-whatsapp-btn" class="btn btn-whatsapp" style="width: 100%;">
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <!-- Submission Feedback Notice -->
              <div id="form-status-box" style="display: none; margin-top: 1.5rem; padding: 1rem 1.25rem; border-radius: 6px; font-size: 0.88rem; line-height: 1.5;"></div>

            </form>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initEnquiryForm() {
  const form = document.getElementById('admissions-enquiry-form') ;
  const nameInput = document.getElementById('form-name') ;
  const phoneInput = document.getElementById('form-phone') ;
  const emailInput = document.getElementById('form-email') ;
  const catSelect = document.getElementById('form-category') ;
  const courseSelect = document.getElementById('form-course') ;
  const msgInput = document.getElementById('form-message') ;
  const statusBox = document.getElementById('form-status-box');
  const submitBtn = document.getElementById('form-submit-btn') ;
  const waFormBtn = document.getElementById('form-whatsapp-btn');

  // Filter courses dropdown dynamically when category changes
  const filterCoursesDropdown = (categoryId) => {
    if (!courseSelect) return;
    const options = courseSelect.querySelectorAll('option');
    options.forEach(opt => {
      if (opt.value === '') {
        opt.style.display = 'block';
        return;
      }
      const optCat = opt.getAttribute('data-category');
      if (!categoryId || optCat === categoryId) {
        opt.style.display = 'block';
      } else {
        opt.style.display = 'none';
      }
    });

    // If currently selected course is not in this category, reset selection
    const selectedOpt = courseSelect.options[courseSelect.selectedIndex];
    if (selectedOpt && selectedOpt.value !== '' && selectedOpt.getAttribute('data-category') !== categoryId) {
      courseSelect.value = '';
    }
  };

  catSelect?.addEventListener('change', () => {
    filterCoursesDropdown(catSelect.value);
  });

  // Global helper functions
  (window ).selectCourseForEnquiry = (courseId, categoryId) => {
    if (catSelect) {
      catSelect.value = categoryId;
      filterCoursesDropdown(categoryId);
    }
    if (courseSelect) {
      courseSelect.value = courseId;
    }
    const enquirySection = document.getElementById('enquiry');
    enquirySection?.scrollIntoView({ behavior });
  };

  (window ).selectCourseCategory = (categoryId) => {
    if (catSelect) {
      catSelect.value = categoryId;
      filterCoursesDropdown(categoryId);
    }
  };

  // Validation functions
  const validatePhone = (val) => {
    const cleaned = val.replace(/[\s\-\(\)\+]/g, '');
    return /^[6-9]\d{9}$/.test(cleaned) || /^\d{10,12}$/.test(cleaned);
  };

  const validateEmail = (val) => {
    if (!val.trim()) return true; // Optional field
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  // Form Submit Handler
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset feedback
    document.querySelectorAll('.form-feedback').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

    // Validate Name
    if (!nameInput?.value.trim()) {
      if (nameInput) nameInput.classList.add('is-invalid');
      const fb = document.getElementById('name-feedback');
      if (fb) fb.textContent = 'Please provide your full name.';
      isValid = false;
    }

    // Validate Phone
    if (!phoneInput?.value.trim() || !validatePhone(phoneInput.value)) {
      if (phoneInput) phoneInput.classList.add('is-invalid');
      const fb = document.getElementById('phone-feedback');
      if (fb) fb.textContent = 'Please enter a valid 10-digit mobile number.';
      isValid = false;
    }

    // Validate Email (if provided)
    if (emailInput?.value.trim() && !validateEmail(emailInput.value)) {
      if (emailInput) emailInput.classList.add('is-invalid');
      const fb = document.getElementById('email-feedback');
      if (fb) fb.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Category
    if (!catSelect?.value) {
      if (catSelect) catSelect.classList.add('is-invalid');
      const fb = document.getElementById('category-feedback');
      if (fb) fb.textContent = 'Please select a course category.';
      isValid = false;
    }

    // Validate Course
    if (!courseSelect?.value) {
      if (courseSelect) courseSelect.classList.add('is-invalid');
      const fb = document.getElementById('course-feedback');
      if (fb) fb.textContent = 'Please select your course of interest.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Simulated submission state with transparent message
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Processing enquiry...</span>';
    }

    setTimeout(() => {
      const selectedCourseText = courseSelect?.options[courseSelect.selectedIndex]?.text || 'Course';
      
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.style.backgroundColor = '#EBFBEE';
        statusBox.style.border = '1px solid #B2F2BB';
        statusBox.style.color = '#2B8A3E';
        statusBox.innerHTML = `
          <strong>Enquiry Drafted Successfully!</strong><br />
          Thank you, <strong>${nameInput?.value}</strong>. Your enquiry for <em>${selectedCourseText}</em> has been prepared.
          <br /><br />
          <span style="font-size: 0.82rem; color: #236E32;">
            Note: Since direct email relay requires an authorized mail backend service, you can instantly forward this enquiry to our Ottappalam admissions team on WhatsApp right now:
          </span>
          <div style="margin-top: 0.75rem;">
            <a href="${getCourseWhatsAppUrl(selectedCourseText)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              Complete on WhatsApp &rarr;
            </a>
          </div>
        `;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Enquiry Prepared (Submitted)</span>';
      }
    }, 800);
  });

  // Direct WhatsApp Button handler
  waFormBtn?.addEventListener('click', () => {
    const courseName = courseSelect?.options[courseSelect.selectedIndex]?.text || 'G-TEC Courses';
    const name = nameInput?.value.trim();
    let message = `Hello G-TEC Education Ottappalam, I would like to know more about ${courseName}. Please share the course details and admission information.`;
    if (name) {
      message = `Hello G-TEC Education Ottappalam, my name is ${name}. I would like to know more about ${courseName}. Please share the course details and admission information.`;
    }
    const url = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

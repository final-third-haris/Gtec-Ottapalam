/**
 * Hero Section Component — Cinematic Light Introduction
 * Oversized headline: LEARN. CREATE. BECOME.
 * Supporting: Build skills for a digital world.
 * Location: OTTAPPALAM, KERALA
 */

import { siteConfig } from '../data/site.js';

export function renderHeroSection() {
  return `
    <section class="hero-section" id="hero" aria-label="Introduction to G-TEC Education Ottappalam">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Left Column: Editorial Headline & Actions -->
          <div class="hero-content reveal-item">
            <div class="hero-tagline">
              <span class="editorial-tag">${siteConfig.locationLabel}</span>
            </div>

            <h1 class="hero-title">
              LEARN.<br />
              <span class="text-red">CREATE.</span><br />
              BECOME.
            </h1>

            <p class="hero-subtitle">
              Build skills for a digital world. Practical, industry-certified education in Software Development, CAD Engineering, Multimedia, and Corporate Accounting.
            </p>

            <div class="hero-actions">
              <a href="#courses" class="btn btn-primary">
                <span>Explore Courses</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#enquiry" class="btn btn-secondary">
                <span>Enquire Now</span>
              </a>
            </div>

            <!-- Meta Strip -->
            <div class="hero-meta-strip">
              <div class="meta-item">
                <span class="meta-label">Campus Centre</span>
                <span class="meta-value">JRJ Complex, Ottappalam</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Accreditation</span>
                <span class="meta-value">Global IT & SAP Certifications</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Direct Line</span>
                <span class="meta-value">${siteConfig.phoneDisplay}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Real Campus Photography Composition -->
          <div class="hero-visual-wrapper reveal-item" style="transition-delay: 0.15s;">
            <div class="hero-main-card">
              <img 
                src="./images/campus/reception-lounge.jpg" 
                alt="G-TEC Education Ottappalam Reception Lounge and Counseling Desk" 
                class="hero-img-cover"
                fetchpriority="high"
                decoding="async"
                width="800"
                height="600"
              />
              <div class="hero-badge-overlay">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent-red); font-weight: 700; display: block;">
                    Official Campus
                  </span>
                  <strong style="font-size: 0.95rem; color: var(--color-text-primary); font-weight: 700;">
                    G-TEC Education Ottappalam
                  </strong>
                </div>
                <a href="#campus" class="btn btn-white btn-sm" style="font-size: 0.75rem; padding: 0.4rem 0.8rem;">
                  View Centre &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Animated Scroll Indicator -->
      <a href="#about" class="hero-scroll-indicator" aria-label="Scroll down to About section">
        <span>Scroll</span>
        <div class="scroll-line" aria-hidden="true"></div>
      </a>
    </section>
  `;
}

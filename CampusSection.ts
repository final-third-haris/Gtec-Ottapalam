/**
 * Campus and Learning Environment Section
 * Dedicated visual editorial showcase featuring genuine institute photographs of
 * G-TEC Education Ottappalam (Reception, training lab, student stations).
 */

import { siteConfig } from '../data/site.js';

export function renderCampusSection(): string {
  return `
    <section class="section section-secondary border-t-subtle border-b-subtle" id="campus" aria-label="G-TEC Ottappalam Campus and Learning Experience">
      <div class="container">
        
        <!-- Section Header -->
        <div class="campus-header reveal-item">
          <div style="margin-bottom: 1rem;">
            <span class="editorial-tag">Campus Infrastructure</span>
          </div>
          <h2 style="font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; margin-bottom: 1rem;">
            AUTHENTIC LEARNING SPACES.
          </h2>
          <p style="color: var(--color-text-secondary); font-size: 1.05rem; line-height: 1.65;">
            Inspect genuine photographs of our Ottappalam centre at JRJ Complex. Modern computer laboratories, individual student workstations, and career counselling suites designed for deep technical immersion.
          </p>
        </div>

        <!-- Editorial Masonry Grid of Genuine Campus Photos -->
        <div class="campus-masonry-grid">
          
          <!-- Card 1: Reception & Counselling Desk (Wide 8-columns) -->
          <article class="campus-card col-8 reveal-item">
            <div class="campus-card-img-wrap">
              <img 
                src="./images/campus/reception-lounge.jpg" 
                alt="Reception lounge, counselling desk, award trophy display, and illuminated G-TEC branding at Ottappalam" 
                loading="lazy"
                decoding="async"
                width="800" 
                height="450"
              />
            </div>
            <div class="campus-card-caption">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
                <div>
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-accent-red); font-weight: 700; display: block; margin-bottom: 0.35rem;">
                    Front Office & Academic Advisory
                  </span>
                  <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.4rem;">
                    Reception & Student Counselling Lounge
                  </h3>
                  <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.55;">
                    Welcoming front office where course advisors guide students through curriculum choices, career roadmaps, and certification paths.
                  </p>
                </div>
                <span class="meta-pill" style="white-space: nowrap;">JRJ Complex 2nd Floor</span>
              </div>
            </div>
          </article>

          <!-- Card 2: Interactive Student Workstation (4-columns) -->
          <article class="campus-card col-4 reveal-item" style="transition-delay: 0.1s;">
            <div class="campus-card-img-wrap">
              <img 
                src="./images/campus/student-workstation.jpg" 
                alt="Student actively analyzing spreadsheet calculations on desktop monitor in G-TEC Ottappalam lab" 
                loading="lazy"
                decoding="async"
                width="400" 
                height="450"
              />
            </div>
            <div class="campus-card-caption">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-accent-red); font-weight: 700; display: block; margin-bottom: 0.35rem;">
                Hands-on Practice
              </span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.4rem;">
                Dedicated Computer Terminals
              </h3>
              <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.55;">
                Every student receives dedicated terminal time for software, accounting, and CAD exercises.
              </p>
            </div>
          </article>

          <!-- Card 3: Training Lab Wide Overview (6-columns) -->
          <article class="campus-card col-6 reveal-item">
            <div class="campus-card-img-wrap">
              <img 
                src="./images/campus/training-lab-wide.jpg" 
                alt="Main computer laboratory at G-TEC Ottappalam with students and lab mentor" 
                loading="lazy"
                decoding="async"
                width="600" 
                height="350"
              />
            </div>
            <div class="campus-card-caption">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-accent-red); font-weight: 700; display: block; margin-bottom: 0.35rem;">
                Laboratory Environment
              </span>
              <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.4rem;">
                Main Computer Training Laboratory
              </h3>
              <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.55;">
                Air-conditioned training lab equipped with networked systems, individual partitions, and continuous faculty supervision.
              </p>
            </div>
          </article>

          <!-- Card 4: Collaborative Practice Pods (6-columns) -->
          <article class="campus-card col-6 reveal-item" style="transition-delay: 0.1s;">
            <div class="campus-card-img-wrap">
              <img 
                src="./images/campus/students-coding-lab.jpg" 
                alt="Students collaborating at computer workstations during coding and office application practice" 
                loading="lazy"
                decoding="async"
                width="600" 
                height="350"
              />
            </div>
            <div class="campus-card-caption">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-accent-red); font-weight: 700; display: block; margin-bottom: 0.35rem;">
                Collaborative Sessions
              </span>
              <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.4rem;">
                Focused Project Development
              </h3>
              <p style="font-size: 0.9rem; color: var(--color-text-secondary); line-height: 1.55;">
                Students complete real coursework assignments, from graphic design outputs to full-stack code and financial ledgers.
              </p>
            </div>
          </article>

        </div>

        <!-- Campus CTA Link -->
        <div class="reveal-item" style="margin-top: 3.5rem; text-align: center;">
          <a href="${siteConfig.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Explore our centre on Google Maps">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Explore Our Centre</span>
          </a>
        </div>

      </div>
    </section>
  `;
}

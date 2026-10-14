/**
 * About Section Component — Editorial Asymmetric Introduction
 * Headline: "SKILLS THAT TURN CREATIVITY INTO POSSIBILITY."
 * Featuring real laboratory and reception photographs from G-TEC Ottappalam.
 */

import { siteConfig } from '../data/site.js';

export function renderAboutSection(): string {
  return `
    <section class="section section-secondary border-t-subtle border-b-subtle" id="about" aria-label="About G-TEC Education Ottappalam">
      <div class="container">
        
        <div class="about-grid">
          
          <!-- Left Column: Editorial Copy -->
          <div class="about-content reveal-item">
            <div style="margin-bottom: 1.25rem;">
              <span class="editorial-tag">About The Centre</span>
            </div>

            <h2 class="about-headline">
              SKILLS THAT TURN CREATIVITY INTO POSSIBILITY.
            </h2>

            <div class="about-body">
              <p>
                G-TEC Education, Ottappalam is a premier regional learning centre located at JRJ Complex on Thozhupadam–Ottappalam Road. We provide hands-on training across software development, computer-aided design (CAD), multimedia arts, and corporate financial accounting.
              </p>
              <p>
                Our learning environment bridges theoretical fundamentals with direct practical laboratory practice. From full-stack coding to architectural BIM modeling, graphic publishing, and enterprise SAP solutions, students gain authentic skills designed for modern career pathways.
              </p>
              <p>
                Every program adheres strictly to the standardized curriculum of the global G-TEC network, ensuring structured module delivery, certified faculty guidance, and direct project mentoring.
              </p>
            </div>

            <div style="margin-top: 2.5rem; display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: center;">
              <a href="#courses" class="btn btn-primary">
                Explore Curriculum &rarr;
              </a>
              <a href="${siteConfig.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                Visit Centre in Ottappalam
              </a>
            </div>
          </div>

          <!-- Right Column: Asymmetric Photo Grid with Real Institute Photos -->
          <div class="about-photogrid reveal-item" style="transition-delay: 0.15s;">
            <!-- Prominent Campus Lab Photo -->
            <div class="about-photo-item featured">
              <img 
                src="./images/campus/training-lab-wide.jpg" 
                alt="G-TEC Ottappalam Computer Training Laboratory with active students" 
                loading="lazy"
                decoding="async"
                width="640" 
                height="800"
              />
              <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); padding: 0.75rem 1rem; border-radius: 4px; border: 1px solid var(--color-border);">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-accent-red); font-weight: 700; text-transform: uppercase; display: block;">
                  Interactive Lab Pods
                </span>
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-primary);">
                  Individual workstation learning at Ottappalam
                </span>
              </div>
            </div>

            <!-- Secondary Detail Photo -->
            <div class="about-photo-item secondary">
              <img 
                src="./images/campus/students-learning.jpg" 
                alt="Students engaged in computer training session" 
                loading="lazy"
                decoding="async"
                width="400" 
                height="320"
              />
            </div>

            <!-- Additional Detail Photo -->
            <div class="about-photo-item secondary">
              <img 
                src="./images/campus/student-workstation.jpg" 
                alt="Student analyzing spreadsheet calculations at workstation" 
                loading="lazy"
                decoding="async"
                width="400" 
                height="320"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

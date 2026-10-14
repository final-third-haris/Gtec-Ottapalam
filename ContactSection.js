/**
 * Contact and Location Section Component
 * Displays verified address, telephone (9995955501), WhatsApp (wa.me/916238843939),
 * email, directions link, and social profiles.
 */

import { siteConfig } from '../data/site.js';

export function renderContactSection() {
  return `
    <section class="section section-white border-t-subtle" id="contact" aria-label="Contact and Location Details">
      <div class="container">
        
        <!-- Header -->
        <div class="reveal-item" style="margin-bottom: 3.5rem;">
          <div style="margin-bottom: 1rem;">
            <span class="editorial-tag">Connect With Us</span>
          </div>
          <h2 style="font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; margin-bottom: 1rem;">
            VISIT OUR CENTRE.
          </h2>
          <p style="color: var(--color-text-secondary); max-width: 620px; font-size: 1.05rem; line-height: 1.65;">
            Conveniently situated at JRJ Complex on Thozhupadam–Ottappalam Road. Visit us for one-on-one academic counselling, lab walkthroughs, and course enrollment.
          </p>
        </div>

        <!-- Contact Grid -->
        <div class="contact-grid">
          
          <!-- Contact Detail Cards -->
          <div class="contact-card-list reveal-item">
            
            <!-- Address Card -->
            <div class="contact-item-card">
              <div class="contact-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div style="flex: 1;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.25rem;">
                  Campus Address
                </span>
                <strong style="font-size: 1.05rem; color: var(--color-text-primary); display: block; margin-bottom: 0.4rem;">
                  G-TEC Education, Ottappalam
                </strong>
                <address style="font-style: normal; font-size: 0.92rem; color: var(--color-text-secondary); line-height: 1.6;">
                  ${siteConfig.address.line1}<br />
                  ${siteConfig.address.line2}<br />
                  ${siteConfig.address.cityStateZip}, ${siteConfig.address.country}
                </address>
                <div style="margin-top: 0.85rem;">
                  <a href="${siteConfig.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Get directions to G-TEC Ottappalam on Google Maps">
                    <span>Get Directions &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Telephone Card -->
            <div class="contact-item-card">
              <div class="contact-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div style="flex: 1;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.25rem;">
                  Official Telephone
                </span>
                <strong style="font-size: 1.15rem; color: var(--color-text-primary); display: block; margin-bottom: 0.35rem;">
                  <a href="${siteConfig.phoneTel}" style="color: var(--color-text-primary); text-decoration: none;">
                    ${siteConfig.phoneDisplay}
                  </a>
                </strong>
                <p style="font-size: 0.85rem; color: var(--color-text-secondary);">
                  Direct phone inquiries: ${siteConfig.timing.days}, ${siteConfig.timing.hours}
                </p>
              </div>
            </div>

            <!-- WhatsApp Card -->
            <div class="contact-item-card">
              <div class="contact-icon-box" style="background-color: #E8F8EE; color: #25D366;" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
                </svg>
              </div>
              <div style="flex: 1;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.25rem;">
                  WhatsApp Helpdesk
                </span>
                <strong style="font-size: 1.15rem; color: var(--color-text-primary); display: block; margin-bottom: 0.35rem;">
                  <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none;">
                    ${siteConfig.whatsappNumber}
                  </a>
                </strong>
                <p style="font-size: 0.85rem; color: var(--color-text-secondary);">
                  Fast messaging for course syllabus, fees, and syllabus brochures
                </p>
              </div>
            </div>

            <!-- Email Card -->
            <div class="contact-item-card">
              <div class="contact-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div style="flex: 1;">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-light); display: block; margin-bottom: 0.25rem;">
                  Official Email
                </span>
                <strong style="font-size: 1.05rem; color: var(--color-text-primary); display: block; margin-bottom: 0.35rem;">
                  <a href="mailto:${siteConfig.email}" style="color: var(--color-text-primary); text-decoration: none;">
                    ${siteConfig.email}
                  </a>
                </strong>
                <p style="font-size: 0.85rem; color: var(--color-text-secondary);">
                  For institutional communications, verification, and corporate inquiries
                </p>
              </div>
            </div>

            <!-- Social Links Strip -->
            <div style="display: flex; gap: 1rem; align-items: center; padding-top: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-light);">
                Follow Us:
              </span>
              <a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Visit G-TEC Ottappalam on Instagram">
                Instagram
              </a>
              <a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Visit G-TEC Ottappalam on Facebook">
                Facebook
              </a>
            </div>

          </div>

          <!-- Interactive Google Maps Frame -->
          <div class="contact-map-frame reveal-item" style="transition-delay: 0.15s;">
            <iframe 
              src="${siteConfig.googleMapsEmbedUrl}" 
              title="Google Map location of G-TEC Education Ottappalam at JRJ Complex"
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  `;
}

/**
 * Footer Component
 * Dark contrast base for grounding the page with G-TEC brand artwork,
 * comprehensive site links, official contact links, and legal notice.
 */

import { siteConfig } from '../data/site.js';
import { courseCategories } from '../data/courses.js';

export function renderFooter() {
  return `
    <footer class="site-footer" id="footer" aria-label="Site Footer">
      <div class="container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Identity -->
          <div class="footer-col">
            <a href="#hero" style="display: inline-block; margin-bottom: 1.5rem;" aria-label="G-TEC Ottappalam Home">
              <img 
                src="./images/brand/gtec-logo-white.png" 
                alt="G-TEC Education Ottappalam Logo" 
                style="height: 52px; width: auto;"
                width="200" 
                height="52"
              />
            </a>
            <p style="color: #94A3B8; font-size: 0.92rem; line-height: 1.65; margin-bottom: 1.5rem;">
              Centre of excellence for software development, architectural CAD, creative multimedia, and corporate accounting education in Ottappalam, Kerala.
            </p>
            <div style="display: flex; gap: 0.75rem;">
              <a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: rgba(255, 255, 255, 0.25);" aria-label="G-TEC Ottappalam on Instagram">
                Instagram
              </a>
              <a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: rgba(255, 255, 255, 0.25);" aria-label="G-TEC Ottappalam on Facebook">
                Facebook
              </a>
            </div>
          </div>

          <!-- Column 2 Streams -->
          <div class="footer-col">
            <h5>Disciplines</h5>
            <ul class="footer-links">
              ${courseCategories.map(cat => `
                <li>
                  <a href="#courses" class="footer-link" onclick="window.selectCourseCategory('${cat.id}')">
                    ${cat.name}
                  </a>
                </li>
              `).join('')}
              <li>
                <a href="${siteConfig.officialCatalogueUrl}" target="_blank" rel="noopener noreferrer" class="footer-link">
                  Official Global Catalogue &rarr;
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Fast Navigation -->
          <div class="footer-col">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              <li><a href="#hero" class="footer-link">Home</a></li>
              <li><a href="#about" class="footer-link">About Ottappalam Centre</a></li>
              <li><a href="#courses" class="footer-link">Verified Courses</a></li>
              <li><a href="#campus" class="footer-link">Campus Facilities</a></li>
              <li><a href="#gallery" class="footer-link">Student Work</a></li>
              <li><a href="#enquiry" class="footer-link">Admissions Enquiry</a></li>
              <li><a href="#contact" class="footer-link">Location & Map</a></li>
            </ul>
          </div>

          <!-- Column 4: Centre Contact -->
          <div class="footer-col">
            <h5>Ottappalam Centre</h5>
            <address style="font-style: normal; color: #CBD5E1; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              Second Floor, JRJ Complex,<br />
              Thozhupadam–Ottappalam Road,<br />
              Ottappalam, Kerala 679101, India.
            </address>
            <div style="font-size: 0.9rem; color: #CBD5E1; display: flex; flex-direction: column; gap: 0.4rem;">
              <div>Tel: <a href="${siteConfig.phoneTel}" style="color: #FFFFFF; text-decoration: none; font-weight: 700;">${siteConfig.phoneDisplay}</a></div>
              <div>WhatsApp: <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-weight: 700;">${siteConfig.whatsappNumber}</a></div>
              <div>Email: <a href="mailto:${siteConfig.email}" style="color: #FFFFFF; text-decoration: none;">${siteConfig.email}</a></div>
            </div>
          </div>

        </div>

        <!-- Footer Bottom Legal Notice -->
        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} G-TEC Education, Ottappalam. All rights reserved.
          </div>
          <div style="max-width: 600px; text-align: right;">
            Course offerings and syllabus information are verified against official G-TEC Education standards. All trademarks, logos and certifications belong to their respective holders.
          </div>
        </div>

      </div>
    </footer>
  `;
}

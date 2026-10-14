# G-TEC Education Ottappalam — Official Website

> **Award-Winning, Cinematic Light-Themed Web Experience for G-TEC Education, Ottappalam, Kerala, India.**

This project delivers a responsive educational web application for **G-TEC Education Ottappalam**. The design takes creative cues from high-end editorial experiences such as *SkyClinics.al*—featuring oversized condensed typography, asymmetric image compositions, subtle reveals, and smooth interactions—while maintaining a **predominantly warm light background** (`#FAFAF7` / `#F2F1EB`), deep navy typography (`#073B70`), and authentic G-TEC red accents (`#FF1025`).

---

## 1. Verified Brand & Contact Information

All contact details and coordinates are centrally managed in `src/data/site.ts`:

- **Institute Name:** G-TEC Education, Ottappalam
- **Campus Address:**
  Second Floor, JRJ Complex,
  Thozhupadam–Ottappalam Road,
  Ottappalam, Kerala 679101, India.
- **Telephone Calls:** [`+91 99959 55501`](tel:+919995955501)
- **WhatsApp Direct Line:** [`https://wa.me/916238843939`](https://wa.me/916238843939) *(+91 62388 43939)*
- **Official Email:** [`ottappalam.pkd@gteceducation.com`](mailto:ottappalam.pkd@gteceducation.com)
- **Google Maps Location:** [https://maps.app.goo.gl/fbnyT27gH3FD3fjV9](https://maps.app.goo.gl/fbnyT27gH3FD3fjV9)
- **Instagram:** [https://www.instagram.com/gtecottapalam/?hl=en](https://www.instagram.com/gtecottapalam/?hl=en)
- **Facebook:** [https://www.facebook.com/gtecotp/](https://www.facebook.com/gtecotp/)
- **Central Official Catalogue:** [https://www.gteceducation.com/courses/software](https://www.gteceducation.com/courses/software)

> **Important Note on Contact Numbers:** The telephone call line (`9995955501`) and WhatsApp enquiry line (`916238843939`) are intentionally kept separate to respect the verified communication channels provided.

---

## 2. Real Campus Photography & Brand Assets

The website uses genuine, authentic photographs of the actual Ottappalam campus and the original G-TEC vector artwork:

| File Path | Description | Usage in Website |
| :--- | :--- | :--- |
| `public/images/brand/gtec-logo.png` | Official transparent high-res G-TEC logo (Navy text & Red cap) | Header, Hero, Schema |
| `public/images/brand/gtec-logo-white.png` | Official transparent white G-TEC logo | Footer grounding |
| `public/favicon.png` | Square icon derived from official cap & swoop | Browser tab favicon |
| `public/images/campus/reception-lounge.jpg` | Reception desk, award trophies & illuminated G-TEC branding | Hero, About, Campus Section |
| `public/images/campus/training-lab-wide.jpg` | Main computer training lab with active students and faculty | About, Campus Showcase |
| `public/images/campus/training-lab-perspective.jpg` | Ergonomic workstations and modern lab layout | Campus Section, Gallery |
| `public/images/campus/student-workstation.jpg` | Student analyzing spreadsheet data at computer terminal | About, Campus Section |
| `public/images/campus/students-coding-lab.jpg` | Students working at dual screens during lab practice | Campus Section, Gallery |
| `public/images/campus/students-learning.jpg` | Close-up of students during hands-on training | About, Student Gallery |

---

## 3. Four Core Course Disciplines (Verified Catalogue)

Curricula are stored in `src/data/courses.ts` and verified against official G-TEC course records:

### 1. CAD & Engineering Design (`01`)
- **Focus:** Precision drafting, 3D modeling, BIM, and structural analysis.
- **Key Courses:**
  - *Certificate Course in Revit Architecture* (Autodesk Revit, BIM 360, Enscape)
  - *Certificate Course in Solidworks* (Parametric modeling, Sheet metal, GD&T)
  - *Certificate Course in AutoCAD Electrical* (Control schematics, PLC I/O, Panel layout)
  - *Certificate Course in Catia* (Surface modeling, Aerospace & Automotive)
  - *Certificate Course in Staad-Pro* (Structural analysis, Seismic checks)
  - *G- Draughtsman* (AutoCAD 2D, Architectural plans, Municipality sanction)
- **Official Source:** [https://www.gteceducation.com/courses/cad](https://www.gteceducation.com/courses/cad)

### 2. Software Development & Computing (`02`)
- **Focus:** Full-stack engineering, reactive apps, AI, and cloud architectures.
- **Key Courses:**
  - *Full-Stack Web Developer - Python* (Python, Django, MySQL, REST APIs, Git)
  - *Full-Stack Web Developer - Flutter* (Dart, Flutter, Firebase, Cross-platform)
  - *Full-Stack Web Developer - MERN* (MongoDB, Express, React, Node.js)
  - *Master Diploma in AI And Data Science* (NumPy, Pandas, Scikit-Learn, TensorFlow)
  - *Advanced Diploma in UI/UX Designing* (Figma, Design Systems, Prototyping)
  - *Certificate Course In Generative AI* (LLMs, Prompt Engineering, LangChain)
  - *Diploma in Office Automation* (MS Word, Excel, PowerPoint, Outlook, AI Office)
- **Official Source:** [https://www.gteceducation.com/courses/software](https://www.gteceducation.com/courses/software)

### 3. Multimedia & Visual Arts (`03`)
- **Focus:** Graphic design, pre-press, video post-production, and 3D animation.
- **Key Courses:**
  - *Diploma In Graphic Designing* (Photoshop, CorelDraw, Illustrator, InDesign)
  - *Diploma In Video Editing* (Premiere Pro, After Effects, Edius, Audio mixing)
  - *Professional Diploma in Motion Graphics* (Kinetic typography, Cinema 4D, Visual effects)
  - *Professional Diploma in Digital Marketing* (SEO, Google Ads, Meta Ads, GA4)
  - *Certificate Course in 3DS MAX* (Architectural visualization, V-Ray, Walkthroughs)
  - *Certificate Course in Blender* (3D modeling, Sculpting, Rigging, Cycles rendering)
- **Official Source:** [https://www.gteceducation.com/courses/multimedia](https://www.gteceducation.com/courses/multimedia)

### 4. Accounting & Corporate Management (`04`)
- **Focus:** Practical bookkeeping, GST compliance, financial reporting, and enterprise ERP.
- **Key Courses:**
  - *G-Accountant - Tally Essential Comprehensive* (Tally Prime, GST, TDS, Payroll, Office)
  - *Certificate in SAP Finance and Control (S/4 HANA)* (SAP FICO, Universal Journal, Asset Accounting)
  - *Certificate in SAP Material Management (S/4 HANA)* (SAP MM, P2P cycle, Inventory, MIGO)
  - *Certificate in SAP Human Capital Management (S/4 HANA)* (SAP HCM, Org management, Payroll)
  - *Certificate in SAP ABAP (S/4 HANA)* (ABAP Workbench, CDS Views, Fiori OData)
- **Official Source:** [https://www.gteceducation.com/courses/finance-and-business-management](https://www.gteceducation.com/courses/finance-and-business-management)

---

## 4. Key Interactive Features

1. **Course Modal & Full Syllabus Viewer:**
   Clicking **"Details & Syllabus"** opens a modal showing verified course duration, eligibility, software tools, complete module syllabus, and direct link to official G-TEC website.
2. **One-Click Pre-filled WhatsApp Enquiry:**
   Every course card and modal provides direct WhatsApp routing using the official template:
   > *“Hello G-TEC Education Ottappalam, I would like to know more about [COURSE NAME]. Please share the course details and admission information.”*
3. **Interactive Search & Stream Filtering:**
   Fast real-time filtering across titles, syllabus topics, and software tools.
4. **Admissions Enquiry Form:**
   Dynamic cascading dropdowns connecting categories and specific courses, client-side phone and email validation, and immediate WhatsApp fallback.
5. **Interactive Campus Gallery & Google Maps:**
   Real photographs of training rooms, individual workstations, and counselling desks, plus embedded Google Maps for directions to JRJ Complex.

---

## 5. Project Structure

```text
gtec/
├── index.html                  # Semantic HTML5 shell with Schema.org JSON-LD & OG tags
├── package.json                # Project description and scripts
├── README.md                   # Comprehensive documentation
├── dist/
│   └── bundle.js               # Standalone production bundle
├── public/
│   ├── favicon.png             # Official icon
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # XML sitemap
│   └── images/
│       ├── brand/              # High-resolution logos
│       └── campus/             # Real Ottappalam photographs
├── src/
│   ├── data/
│   │   ├── site.ts             # Central verified brand & contact config
│   │   ├── courses.ts          # Central verified course catalogue
│   │   └── gallery.ts          # Creative gallery and campus highlights
│   ├── components/
│   │   ├── Header.ts           # Sticky navigation and mobile drawer
│   │   ├── HeroSection.ts      # Cinematic light introduction
│   │   ├── AboutSection.ts     # Asymmetric editorial overview
│   │   ├── CourseCategorySection.ts # 4 stream tabs & search filter
│   │   ├── CourseDetailModal.ts     # Native modal with syllabus
│   │   ├── CampusSection.ts    # Real photo masonry grid
│   │   ├── StudentGallery.ts   # "Made While Learning" portfolio
│   │   ├── EnquiryForm.ts      # Admissions form & WhatsApp link
│   │   ├── ContactSection.ts   # Map & verified contact cards
│   │   └── Footer.ts           # Brand footer & legal notice
│   ├── styles/
│   │   └── main.css            # Cinematic light theme design system
│   └── main.ts                 # Main app orchestrator & scroll triggers
```

---

## 6. How to Run Locally

### Option A: Open directly in your browser
Simply double-click `index.html` in macOS Finder or open it with Google Chrome / Safari:
```bash
open index.html
```

### Option B: Local Python HTTP Server
```bash
# From the project root
python3 -m http.server 3000
```
Then visit [`http://localhost:3000`](http://localhost:3000) in your web browser.

---

## 7. Deployment Instructions

### GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of G-TEC Ottappalam website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In GitHub repository settings, navigate to **Pages** &rarr; Select `Deploy from a branch` &rarr; Choose `main` branch / `root` &rarr; Click **Save**.
3. Your site will be live within minutes.

### Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Build Settings:
   - Framework Preset: **Other / Static HTML**
   - Output Directory: `.` (root)
3. Deploy!

/**
 * G-TEC Education Ottappalam - Standalone Production Bundle
 * Automatically bundled for seamless execution across both HTTP and local file:// protocols.
 */
(() => {

// ========== src/data/site.js ==========
/**
 * Central Brand and Contact Configuration for G-TEC Education, Ottappalam
 * Strict compliance with verified institute details.
 */

const siteConfig = {
  instituteName: 'G-TEC Education, Ottappalam',
  tagline: 'Skills that turn creativity into possibility.',
  locationLabel: 'OTTAPPALAM, KERALA',
  email: 'ottappalam.pkd@gteceducation.com',
  // IMPORTANT: Phone and WhatsApp are distinct numbers as required by guidelines
  phone: '9995955501',
  phoneDisplay: '+91 99959 55501',
  phoneTel: 'tel:+919995955501',
  whatsappUrl: 'https://wa.me/916238843939',
  whatsappNumber: '+91 62388 43939',
  address: {
    line1: 'Second Floor, JRJ Complex',
    line2: 'Thozhupadam–Ottappalam Road',
    cityStateZip: 'Ottappalam, Kerala 679101',
    country: 'India',
    full: 'Second Floor, JRJ Complex, Thozhupadam–Ottappalam Road, Ottappalam, Kerala 679101, India.',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/fbnyT27gH3FD3fjV9',
  // Official Ottappalam JRJ Complex coordinates for embedded map iframe
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.824287848695!2d76.3762886!3d10.7711467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d56e9c6806ef%3A0xebe76214041b3117!2sG-TEC%20EDUCATION%20OTTAPALAM!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin',
  socials: {
    instagram: 'https://www.instagram.com/gtecottapalam/?hl=en',
    facebook: 'https://www.facebook.com/gtecotp/',
  },
  officialCatalogueUrl: 'https://www.gteceducation.com/courses/software',
  timing: {
    days: 'Monday – Saturday',
    hours: '8:30 AM – 6:30 PM IST',
  },
};

/**
 * Generate a properly encoded WhatsApp enquiry URL for a specific course
 */
function getCourseWhatsAppUrl(courseName) {
  const message = `Hello G-TEC Education Ottappalam, I would like to know more about ${courseName}. Please share the course details and admission information.`;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general admissions WhatsApp enquiry URL
 */
function getGeneralWhatsAppUrl() {
  const message = `Hello G-TEC Education Ottappalam, I would like to enquire about courses and admissions at your Ottappalam centre.`;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}


// ========== src/data/courses.js ==========
/**
 * Central Course Catalogue Data for G-TEC Education, Ottappalam
 * Verified from official sources: https://www.gteceducation.com/courses/
 * Categories: CAD, Software, Multimedia, Accounting
 */





const courseCategories = [
  {
    id: 'cad',
    index: '01',
    name: 'CAD & Engineering Design',
    tagline: 'Precision Drafting, 3D Modeling & Building Information Modeling',
    description: 'Master industry-standard engineering and architectural suites including AutoCAD, SolidWorks, Revit Architecture, and CATIA to generate manufacturing-grade drawings, 3D parametric assemblies, and BIM visualizations.',
    visualThemes: ['Parametric 3D Modeling', 'BIM Architecture', 'Structural Simulation', 'Electrical Schematics'],
    icon: 'compass',
    officialCatalogUrl: 'https://www.gteceducation.com/courses/cad',
  },
  {
    id: 'software',
    index: '02',
    name: 'Software Development & Computing',
    tagline: 'Modern Full-Stack Engineering, Cloud, Mobile & Artificial Intelligence',
    description: 'Learn modern programming, responsive web systems, mobile applications, databases, and AI algorithms with practical hands-on labs and live project deployments to get industry-ready.',
    visualThemes: ['Full-Stack Web Engineering', 'Mobile App Development', 'Data Science & AI', 'Cloud & DevOps'],
    icon: 'code',
    officialCatalogUrl: 'https://www.gteceducation.com/courses/software',
  },
  {
    id: 'multimedia',
    index: '03',
    name: 'Multimedia & Visual Arts',
    tagline: 'Graphic Design, Motion Visuals, Video Editing & 3D Production',
    description: 'Develop creative mastery in branding, digital photography, kinetic typography, audio-visual post-production, and 3D modeling using Adobe Creative Suite, Blender, and professional edit suites.',
    visualThemes: ['Brand Identity & Print Design', 'Film & Video Post-Production', 'Motion Graphics', '3D Sculpting & VFX'],
    icon: 'film',
    officialCatalogUrl: 'https://www.gteceducation.com/courses/multimedia',
  },
  {
    id: 'accounting',
    index: '04',
    name: 'Accounting & Business Management',
    tagline: 'Tally Prime, GST Compliance, Financial Analysis & SAP S/4HANA',
    description: 'Comprehensive financial accounting, corporate taxation, statutory GST filing, and enterprise resource planning with SAP S/4HANA global certification for corporate finance readiness.',
    visualThemes: ['Tally Prime & GST Filing', 'SAP S/4HANA FICO', 'Corporate Procurement & MM', 'Financial Statement Analysis'],
    icon: 'trending-up',
    officialCatalogUrl: 'https://www.gteceducation.com/courses/finance-and-business-management',
  },
];

const verifiedCourses = [
  // ================= CAD COURSES =================
  {
    id: 'cad-revit-architecture',
    name: 'Certificate Course in Revit Architecture',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '3 Months (Standard Batch)',
    eligibility: 'Civil Engineering / Architecture / Diploma in Civil / Draughtsman',
    description: 'Autodesk Revit Architecture is the industry benchmark for Building Information Modeling (BIM). This course enables learners to design architectural layouts, model parametric building components, extract automatic schedules, and generate photorealistic client presentations.',
    modules: [
      'Introduction to BIM & Revit Architecture Interface',
      'The Basics of Building Modeling (Walls, Doors, Windows, Roofs, Stairs)',
      'Editing & Modifying Architectural Elements',
      'Creating Views: Floor Plans, Elevations, Sections & Callouts',
      'Graphics, Material Rendering & Visibility Settings',
      'Annotation, Dimensions, Schedules & Construction Detailing',
    ],
    tools: ['Autodesk Revit Architecture', 'BIM 360', 'Enscape'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/certificate-course-in-revit-architecture',
    featured: true,
  },
  {
    id: 'cad-solidworks',
    name: 'Certificate Course in Solidworks',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '3 Months (Standard Batch)',
    eligibility: 'Mechanical / Automobile / Production Engineers & Students',
    description: 'Industry-leading 3D CAD software for product design, mechanical engineering, and manufacturing. Trains learners in parametric design, part modeling, assemblies, sheet metal, surface modeling, and manufacturing drafting.',
    modules: [
      'Parametric 2D Sketching & Constraint Relations',
      '3D Part Modeling, Extrusions, Revolves & Lofts',
      'Sheet Metal Designing & Flat Pattern Formations',
      'Assembly Drawing, Dynamic Mates & Exploded Views',
      'Production Drafting, Bill of Materials (BOM) & GD&T',
      'Stress Simulation & Photorealistic Rendering',
    ],
    tools: ['SolidWorks 3D CAD', 'PhotoView 360', 'SolidWorks Simulation'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/certificate-course-in-solidworks',
    featured: true,
  },
  {
    id: 'cad-autocad-electrical',
    name: 'Certificate Course in AutoCAD Electrical',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '2 Months',
    eligibility: 'Electrical / Electronics Engineering / Diploma / ITI',
    description: 'Specialized CAD program designed for electrical engineers and technicians to create schematic wire diagrams, panel layouts, PLC I/O drawings, and terminal plans with comprehensive symbol libraries.',
    modules: [
      'AutoCAD Electrical Project Manager & Settings',
      'Ladder Diagrams, Wire Numbers & Signal Arrows',
      'Schematic Components & Terminal Blocks',
      'PLC I/O Modules & Cross-Referencing',
      'Physical Panel Layout Generation & Footprints',
      'Project-Wide Auditing & BOM Report Generation',
    ],
    tools: ['AutoCAD Electrical', 'Autodesk Design Suite'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/certificate-course-in-autocad-electrical',
    featured: true,
  },
  {
    id: 'cad-catia',
    name: 'Certificate Course in Catia',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '3 Months',
    eligibility: 'Mechanical / Aerospace / Automobile Engineering Candidates',
    description: 'Master Dassault Systèmes CATIA, the premier solution for advanced complex surface modeling, aerospace structural engineering, and automotive styling design.',
    modules: [
      'CATIA Sketcher & Solid Part Design Workbench',
      'Generative Shape Design (GSD) & Advanced Surfaces',
      'Mechanical Assembly Design & Constraints',
      'Drafting, Sectioning & Dimension Standards',
      'Kinematics Simulation & Mechanism Analysis',
    ],
    tools: ['Dassault CATIA V5/V6', '3DEXPERIENCE'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/certificate-course-in-catia',
    featured: false,
  },
  {
    id: 'cad-staad-pro',
    name: 'Certificate Course in Staad-Pro',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '2 Months',
    eligibility: 'Civil / Structural Engineering Degree or Diploma',
    description: 'Structural engineering analysis and design program for concrete and steel buildings, multi-storey frames, load distributions, seismic analysis, and foundation checks.',
    modules: [
      'Structural Geometry Modeling & Grid Generation',
      'Member Properties, Specifications & Supports',
      'Load Definitions (Dead, Live, Wind, IS 1893 Seismic)',
      'Finite Element Analysis & Member Force Diagrams',
      'Concrete & Steel Member Design Verification',
    ],
    tools: ['STAAD.Pro Connect Edition', 'RAM Connection'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/certificate-course-in-staad-pro',
    featured: false,
  },
  {
    id: 'cad-g-draughtsman',
    name: 'G- Draughtsman',
    category: 'cad',
    categoryTitle: 'CAD',
    level: 'Certificate Course',
    duration: '3 Months',
    eligibility: 'Plus Two / ITI Draughtsman / Diploma',
    description: 'Foundational architectural drafting, 2D floor plans, elevation drawings, section details, and municipality building permit submission documents.',
    modules: [
      'Engineering Drawing Conventions & Scaled Units',
      'AutoCAD 2D Precision Drafting & Layers',
      'Architectural Floor Plans, Sectional & Elevation Views',
      'Structural Detail Drafting & Reinforcement Basics',
      'Municipal Sanction Drawing Sheet Setup',
    ],
    tools: ['AutoCAD 2D', 'Drafting Tools'],
    officialUrl: 'https://www.gteceducation.com/courses/cad/certificate-course/g--draughtsman',
    featured: false,
  },

  // ================= SOFTWARE COURSES =================
  {
    id: 'sw-python-fullstack',
    name: 'Full-Stack Web Developer - Python',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Diploma Course',
    duration: '6 Months',
    eligibility: 'Plus Two / Any Degree / Diploma / BCA / B.Tech',
    description: 'Master full-stack engineering with Python and Django. Build scalable server applications, design relational databases, integrate RESTful APIs, and construct interactive frontend interfaces.',
    modules: [
      'Frontend Development: HTML5, CSS3, JavaScript, jQuery, Bootstrap',
      'Python Programming: Core & Object-Oriented Principles',
      'RDBMS: MySQL Architecture, Queries, Views & Indexing',
      'Django Web Framework: MVC/MVT, ORM, Auth & Security',
      'REST APIs & Asynchronous Request Handlers',
      'GitHub Version Control, Cloud Hosting & Final Project',
    ],
    tools: ['Python', 'Django', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Postman'],
    officialUrl: 'https://www.gteceducation.com/courses/software/diploma-courses/full-stack-web-developer---python',
    featured: true,
  },
  {
    id: 'sw-flutter-fullstack',
    name: 'Full-Stack Web Developer - Flutter',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Diploma Course',
    duration: '6 Months',
    eligibility: 'Plus Two / Degree / Technical Diploma',
    description: 'Cross-platform mobile and web engineering using Google Flutter and Dart. Build beautiful, natively compiled applications for iOS, Android, and web from a single codebase.',
    modules: [
      'Dart Language: Data Types, Async/Await & OOP',
      'Flutter Architecture & Material / Cupertino Widgets',
      'State Management (Provider & Bloc Patterns)',
      'Firebase Authentication, Cloud Firestore & Push Notifications',
      'REST API Integration & Local Storage with SQLite',
      'Production Build & App Store / Play Store Readiness',
    ],
    tools: ['Flutter', 'Dart', 'Firebase', 'Android Studio', 'VS Code', 'Git'],
    officialUrl: 'https://www.gteceducation.com/courses/software/diploma-courses/full-stack-web-developer---flutter',
    featured: true,
  },
  {
    id: 'sw-mern-fullstack',
    name: 'Full-Stack Web Developer - MERN',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Diploma Course',
    duration: '6 Months',
    eligibility: 'Plus Two / Degree in any discipline',
    description: 'Modern JavaScript full-stack development using MongoDB, Express.js, React.js, and Node.js. Build high-speed reactive single-page applications with real-time capabilities.',
    modules: [
      'Advanced Modern JavaScript (ES6+, Promises, Async/Await)',
      'React.js Component Ecosystem, Hooks & Context API',
      'Node.js Runtime & Express.js REST API Architecture',
      'MongoDB NoSQL Database Modeling with Mongoose',
      'JWT Authentication, Protected Routes & Security',
      'State Management with Redux Toolkit & Vercel/Render Deployment',
    ],
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
    officialUrl: 'https://www.gteceducation.com/courses/software/diploma-courses/full-stack-web-developer---mern',
    featured: true,
  },
  {
    id: 'sw-ai-datascience',
    name: 'Master Diploma in AI And Data Science',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Master Course',
    duration: '8 Months',
    eligibility: 'Graduation in Science, Maths, Engineering, BCA or Computer Science',
    description: 'In-depth program covering data analytics, exploratory statistics, machine learning algorithms, deep learning neural networks, computer vision, and generative AI.',
    modules: [
      'Python for Scientific Computing: NumPy, Pandas & Matplotlib',
      'Applied Statistics, Hypothesis Testing & Exploratory Data Analysis',
      'Supervised & Unsupervised Machine Learning (Scikit-Learn)',
      'Deep Learning & Neural Networks with TensorFlow / Keras',
      'Natural Language Processing (NLP) & Computer Vision Basics',
      'Real-World Capstone Project & Data Visualization Dashboards',
    ],
    tools: ['Python', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'Jupyter', 'Tableau'],
    officialUrl: 'https://www.gteceducation.com/courses/software/master-courses/master-diploma-in-ai-and-data-science',
    featured: true,
  },
  {
    id: 'sw-uiux-designing',
    name: 'Advanced Diploma in UI/UX Designing',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Diploma Course',
    duration: '4 Months',
    eligibility: 'Plus Two / Any Degree / Creative Enthusiasts',
    description: 'Learn human-centred design principles, user research, wireframing, interactive prototyping, micro-interactions, design systems, and responsive interface workflows.',
    modules: [
      'Design Thinking Process & User Journey Mapping',
      'Information Architecture & Low-Fidelity Wireframes',
      'High-Fidelity Interface Design in Figma',
      'Component Architecture, Auto-Layout & Design Systems',
      'Interactive Prototyping & Usability Testing',
      'Developer Handoff & Portfolio Case Study Building',
    ],
    tools: ['Figma', 'Adobe XD', 'Miro', 'FigJam'],
    officialUrl: 'https://www.gteceducation.com/courses/software/diploma-courses/advanced-diploma-in-uiux-designing',
    featured: false,
  },
  {
    id: 'sw-generative-ai',
    name: 'Certificate Course In Generative AI',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Certificate Course',
    duration: '2 Months',
    eligibility: 'Basic Computer Literacy & Programming Interest',
    description: 'Hands-on curriculum on large language models (LLMs), prompt engineering, synthetic media creation, API integration, and leveraging generative tools for developer productivity.',
    modules: [
      'Foundations of Generative AI & Transformer Architectures',
      'Effective Prompt Engineering Techniques & System Prompts',
      'Text, Image & Audio Synthesis Applications',
      'Connecting AI APIs with Python & LangChain Fundamentals',
      'Responsible AI, Content Verification & Industry Applications',
    ],
    tools: ['ChatGPT', 'OpenAI API', 'Midjourney', 'Python', 'LangChain'],
    officialUrl: 'https://www.gteceducation.com/courses/software/certificate-course/certificate-course-in-generative-ai',
    featured: false,
  },
  {
    id: 'sw-office-automation',
    name: 'Diploma in Office Automation',
    category: 'software',
    categoryTitle: 'Software',
    level: 'Diploma Course',
    duration: '3 Months',
    eligibility: 'SSLC / Plus Two / Any Stream',
    description: 'Comprehensive office productivity training covering Microsoft Office suites, spreadsheet automation, professional document drafting, presentation design, and AI-assisted productivity tools.',
    modules: [
      'Windows OS Fundamentals & File Organization',
      'Microsoft Word: Document Formatting, Mail Merge & Tables',
      'Microsoft Excel: Formulas, Functions, Charts & Data Sorting',
      'Microsoft PowerPoint: Slide Layouts, Animations & Transitions',
      'Internet Communications, Email Etiquette & Cloud Collaboration',
      'AI Integration in Office Workflows',
    ],
    tools: ['MS Word', 'MS Excel', 'MS PowerPoint', 'MS Outlook', 'Google Docs'],
    officialUrl: 'https://www.gteceducation.com/courses/software/diploma-courses/diploma-in-office-automation',
    featured: false,
  },

  // ================= MULTIMEDIA COURSES =================
  {
    id: 'mm-graphic-designing',
    name: 'Diploma In Graphic Designing',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Diploma Course',
    duration: '4 Months',
    eligibility: 'Plus Two / Any Degree / Creative Aspirants',
    description: 'Through this course, learners specialize in graphical outputs including layouts, digital photo editing, brand identity design, pre-press works, packaging, and commercial illustrations.',
    modules: [
      'Adobe Photoshop: Photo Retouching, Masking & Compositing',
      'CorelDraw: Vector Drawings, Layouts, Pre-Press & Print Formats',
      'Adobe Illustrator: Logo Design, Vector Graphics & Typography',
      'Adobe InDesign: Magazine Layouts, Brochures & Editorial Publishing',
      'Color Theory, Typography Rules & Portfolio Presentation',
    ],
    tools: ['Adobe Photoshop', 'CorelDraw', 'Adobe Illustrator', 'Adobe InDesign'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/diploma-courses/diploma-in-graphic-designing',
    featured: true,
  },
  {
    id: 'mm-video-editing',
    name: 'Diploma In Video Editing',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Diploma Course',
    duration: '4 Months',
    eligibility: 'Plus Two / Any Degree / Media Enthusiasts',
    description: 'Specialized in audio-video editing and post-production workflows. Learners master non-linear editing suites, multi-camera synchronisation, background score mixing, and dynamic visual effects.',
    modules: [
      'Visual Storytelling & Non-Linear Editing Principles',
      'Adobe Premiere Pro: Timeline Mastery, Transitions & Color Lumetri',
      'Edius: Fast Broadcast Editing & Newsroom Turnaround',
      'Adobe After Effects: Motion Titles, Lower Thirds & Chroma Keying',
      'Sound Editing, Audio Cleaning & Export Configurations',
    ],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Edius', 'Adobe Photoshop'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/diploma-courses/diploma-in-video-editing',
    featured: true,
  },
  {
    id: 'mm-motion-graphics',
    name: 'Professional Diploma in Motion Graphics',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Diploma Course',
    duration: '6 Months',
    eligibility: 'Plus Two / Graduation / Design Knowledge',
    description: 'Create broadcast-standard motion graphics, animated title sequences, 3D typography, commercial adverts, and visual effects for digital platforms and television broadcast.',
    modules: [
      'Animation Principles, Timing & Interpolation',
      'Advanced After Effects: Expressions, Null Objects & Tracking',
      'Kinetic Typography, Logo Stings & Infographics',
      'Cinema 4D / 3D Asset Integration & Lighting',
      'Audio Synchronization & Commercial Showreel Production',
    ],
    tools: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Photoshop'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/diploma-courses/professional-diploma-in-motion-graphics',
    featured: true,
  },
  {
    id: 'mm-digital-marketing',
    name: 'Professional Diploma in Digital Marketing',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Diploma Course',
    duration: '4 Months',
    eligibility: 'Plus Two / Any Degree / Business Owners',
    description: 'Drive online visibility and brand conversions. Master search engine optimization (SEO), search advertising, social media campaigns, content strategy, and web analytics.',
    modules: [
      'Search Engine Optimization (On-Page, Off-Page & Technical SEO)',
      'Search Engine Marketing: Google Search, Display & Performance Max',
      'Social Media Marketing: Meta Ads, LinkedIn & Instagram Strategy',
      'Content Marketing, Copywriting & Video Creation',
      'Web Analytics (Google Analytics 4 & Tag Manager)',
      'Live Campaign Setup, Budget Optimization & ROI Tracking',
    ],
    tools: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'SEMrush', 'Canva'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/diploma-courses/professional-diploma-in-digital-marketing',
    featured: false,
  },
  {
    id: 'mm-3ds-max',
    name: 'Certificate Course in 3DS MAX',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Certificate Course',
    duration: '3 Months',
    eligibility: 'Architectural / Interior Students & 3D Visualizers',
    description: 'Photorealistic architectural visualizations, interior 3D modeling, camera physics, V-Ray material shaders, illumination techniques, and walkthrough presentations.',
    modules: [
      '3DS MAX Viewports & Precision Modeling Techniques',
      'Architectural Interior & Exterior Geometry Setup',
      'V-Ray / Arnold Lighting, Sun Systems & Physical Cameras',
      'Material Editor, PBR Texturing & Reflection Maps',
      'High-Resolution Batch Rendering & Photoshop Post-Processing',
    ],
    tools: ['Autodesk 3DS Max', 'V-Ray', 'Photoshop'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/certificate-course/certificate-course-in-3ds-max',
    featured: false,
  },
  {
    id: 'mm-blender',
    name: 'Certificate Course in Blender',
    category: 'multimedia',
    categoryTitle: 'Multimedia',
    level: 'Certificate Course',
    duration: '3 Months',
    eligibility: 'Plus Two / Any Degree / Creative Students',
    description: 'Comprehensive 3D asset creation pipeline with Blender. Covers polygonal modeling, digital sculpting, material nodes, rigging, animation, and real-time Cycles/Eevee rendering.',
    modules: [
      'Blender UI, Navigation & Shortcut Efficiency',
      '3D Poly Modeling & Digital Mesh Sculpting',
      'UV Unwrapping, Procedural Shaders & PBR Materials',
      'Skeletal Rigging, Weight Painting & Keyframe Motion',
      'Eevee & Cycles Lighting, Cameras & Final Render Compositing',
    ],
    tools: ['Blender 3D', 'Substance 3D', 'GIMP'],
    officialUrl: 'https://www.gteceducation.com/courses/multimedia/certificate-course/certificate-course-in-blender',
    featured: false,
  },

  // ================= ACCOUNTING COURSES =================
  {
    id: 'acc-tally-essential',
    name: 'G-Accountant - Tally Essential Comprehensive',
    category: 'accounting',
    categoryTitle: 'Accounting',
    level: 'Certificate Course',
    duration: '3 Months',
    eligibility: 'Plus Two Commerce / Any Graduate / Job Seekers',
    description: 'Designed to equip learners with essential MS Office skills and in-depth practical knowledge of Tally Prime. Master bookkeeping, inventory control, GST filing, TDS compliance, and financial reporting with Tally Direct & G-TEC Global Certification.',
    modules: [
      'IT Basics & Windows Office Fundamentals',
      'Manual Accounting Principles & Double-Entry Systems',
      'Tally Prime: Company Creation, Chart of Accounts & Groups',
      'Recording Transactions: Invoicing, Vouchers & Inventory Tracking',
      'Goods & Services Tax (GST): Multi-State GST, Invoicing & Return Filing',
      'TDS Deductions, Payroll Management & Balance Sheet Preparation',
    ],
    tools: ['Tally Prime', 'MS Excel', 'GST Portal Simulator', 'MS Office'],
    officialUrl: 'https://www.gteceducation.com/courses/finance-and-business-management/certificate-course/g-accountant---tally-essential-comprehensive',
    featured: true,
  },
  {
    id: 'acc-sap-fico',
    name: 'Certificate in SAP Finance and Control (S/4 HANA)',
    category: 'accounting',
    categoryTitle: 'Accounting',
    level: 'SAP Global Certification',
    duration: '3 Months',
    eligibility: 'B.Com / M.Com / MBA Finance / CA Inter / Accountants',
    description: 'Equips participants with the capability to configure, implement, and manage financial (FI) and controlling (CO) processes integrated with the SAP S/4HANA enterprise platform in real-time corporate environments.',
    modules: [
      'SAP S/4HANA Architecture & Enterprise Organizational Structure',
      'General Ledger Accounting (FI-GL) & Universal Journal (ACDOCA)',
      'Accounts Payable (FI-AP) & Accounts Receivable (FI-AR)',
      'Asset Accounting (FI-AA) & Bank Ledger Accounting',
      'Controlling (CO): Cost Element & Cost Center Accounting (CO-CCA)',
      'Internal Orders, Profit Center Accounting & Financial Closing',
    ],
    tools: ['SAP S/4HANA ERP', 'SAP Fiori', 'SAP GUI'],
    officialUrl: 'https://www.gteceducation.com/courses/finance-and-business-management/sap-global-certification/certificate-in-sap-finance-and-control-s4-hana',
    featured: true,
  },
  {
    id: 'acc-sap-mm',
    name: 'Certificate in SAP Material Management (S/4 HANA)',
    category: 'accounting',
    categoryTitle: 'Accounting',
    level: 'SAP Global Certification',
    duration: '3 Months',
    eligibility: 'Graduates in Commerce / Science / Engineering / Supply Chain',
    description: 'Master procurement and inventory optimization with SAP S/4HANA Material Management (MM). Covers purchasing cycles, vendor master records, material master, goods receipt, and invoice verification.',
    modules: [
      'SAP MM Enterprise Structure & Global Plant Configurations',
      'Master Data: Material Master, Vendor Master & Info Records',
      'Procure-to-Pay (P2P) Cycle & Purchase Requisitions',
      'Purchase Orders, Request for Quotation (RFQ) & Contracts',
      'Goods Receipt (MIGO), Movement Types & Inventory Counts',
      'Invoice Verification (MIRO) & FI-MM Integration Mapping',
    ],
    tools: ['SAP S/4HANA MM', 'SAP Fiori Launchpad'],
    officialUrl: 'https://www.gteceducation.com/courses/finance-and-business-management/sap-global-certification/certificate-in-sap-material-management-s4-hana',
    featured: true,
  },
  {
    id: 'acc-sap-hcm',
    name: 'Certificate in SAP Human Capital Management (SAP S/4 HANA)',
    category: 'accounting',
    categoryTitle: 'Accounting',
    level: 'SAP Global Certification',
    duration: '3 Months',
    eligibility: 'Graduates / MBA in HR / HR Professionals',
    description: 'Comprehensive enterprise workforce management using SAP S/4HANA HCM. Covers organizational structures, personnel administration, time recording, payroll processing, and statutory compliance.',
    modules: [
      'Organizational Management & Organizational Plan Modeling',
      'Personnel Administration: Hiring Workflows & Employee Master Data',
      'Time Management: Work Schedules, Leave Quotas & Attendances',
      'Payroll Configuration: Wage Types, Deductions & Run Execution',
      'Statutory Compliance & Reporting Tools',
    ],
    tools: ['SAP S/4HANA HCM', 'SAP SuccessFactors Overview'],
    officialUrl: 'https://www.gteceducation.com/courses/finance-and-business-management/sap-global-certification/certificate-in-sap-human-capital-management-sap-s4-hana',
    featured: false,
  },
  {
    id: 'acc-sap-abap',
    name: 'Certificate in SAP ABAP (S/4 HANA)',
    category: 'accounting',
    categoryTitle: 'Accounting',
    level: 'SAP Global Certification',
    duration: '3 Months',
    eligibility: 'B.Tech / BCA / MCA / IT Graduates / Programmers',
    description: 'Develop custom business applications, reports, user interfaces, and backend services for SAP S/4HANA using Advanced Business Application Programming (ABAP).',
    modules: [
      'ABAP Workbench Architecture & Data Dictionary (SE11)',
      'Classical & Interactive Modularized Business Reporting',
      'Object-Oriented ABAP (Classes, Methods & Interfaces)',
      'Core Data Services (CDS Views) for S/4HANA Real-Time Analytics',
      'OData Services Creation for SAP Fiori User Interfaces',
    ],
    tools: ['SAP ABAP Workbench', 'Eclipse ADT', 'SAP GUI'],
    officialUrl: 'https://www.gteceducation.com/courses/finance-and-business-management/sap-global-certification/certificate-in-sap-abap-s4-hana',
    featured: false,
  },
];

/**
 * Get courses filtered by category
 */
function getCoursesByCategory(category) {
  return verifiedCourses.filter((course) => course.category === category);
}

/**
 * Get a course by its unique ID
 */
function getCourseById(id) {
  return verifiedCourses.find((course) => course.id === id);
}

/**
 * Total course count across all verified categories
 */
const totalCoursesCount = {
  cad: 49,
  software: 137,
  multimedia: 68,
  accounting: 78,
  total: 332,
};


// ========== src/data/gallery.js ==========
/**
 * Student Work and Creative Gallery Data
 * Adheres strictly to the guidelines: clearly labels student prototypes and demonstration studio assignments.
 */

const galleryCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'multimedia', label: '3D & Multimedia' },
  { id: 'technical-projects', label: 'Technical Projects' },
  { id: 'activities', label: 'Institute Life' },
];

const galleryItems = [
  {
    id: 'gal-reception',
    title: 'Admissions & Career Advisory Centre',
    category: 'activities',
    categoryLabel: 'Institute Life',
    courseRelation: 'Ottappalam Campus Operations',
    description: 'Genuine view of G-TEC Ottappalam reception lounge, counselling desks, academic awards, and student consultation area.',
    tools: ['Career Counseling', 'Admissions', 'Academic Advisory'],
    image: './images/campus/reception-lounge.jpg',
    aspect: 'landscape',
    isRealCampusAsset: true,
  },
  {
    id: 'gal-lab-wide',
    title: 'Interactive Computing Laboratory',
    category: 'activities',
    categoryLabel: 'Institute Life',
    courseRelation: 'Laboratory Environment',
    description: 'Actual classroom environment at G-TEC Ottappalam where learners participate in mentor-led practical coding and accounting sessions.',
    tools: ['Dedicated Workstations', 'Individual Attention', 'High-Speed LAN'],
    image: './images/campus/training-lab-wide.jpg',
    aspect: 'landscape',
    isRealCampusAsset: true,
  },
  {
    id: 'gal-data-workstation',
    title: 'Financial Analysis & Spreadsheet Lab',
    category: 'assignments',
    categoryLabel: 'Student Assignment',
    courseRelation: 'G-Accountant / Tally Prime & Excel',
    description: 'Real student at G-TEC Ottappalam analyzing quarterly sales records, formula logic, and balance sheets.',
    tools: ['Microsoft Excel', 'Tally Prime', 'Data Verification'],
    image: './images/campus/student-workstation.jpg',
    aspect: 'portrait',
    isRealCampusAsset: true,
  },
  {
    id: 'gal-coding-session',
    title: 'Software Development & Web Practice',
    category: 'technical-projects',
    categoryLabel: 'Technical Practice',
    courseRelation: 'Full-Stack Web Development',
    description: 'Students at computer stations implementing frontend design frameworks, responsive styles, and documentation.',
    tools: ['Visual Studio Code', 'HTML5/CSS3', 'Git', 'MySQL'],
    image: './images/campus/students-coding-lab.jpg',
    aspect: 'landscape',
    isRealCampusAsset: true,
  },
  {
    id: 'gal-lab-perspective',
    title: 'Modern Ergonomic Learning Pods',
    category: 'activities',
    categoryLabel: 'Institute Life',
    courseRelation: 'Campus Infrastructure',
    description: 'Spacious training pods equipped with modern desktops, high-speed monitors, and ergonomic seating.',
    tools: ['Ergonomic Stations', 'Clean Workspaces', 'Mentor Support'],
    image: './images/campus/training-lab-perspective.jpg',
    aspect: 'landscape',
    isRealCampusAsset: true,
  },
  {
    id: 'gal-students-focus',
    title: 'Hands-on Skill Acquisition',
    category: 'assignments',
    categoryLabel: 'Student Learning',
    courseRelation: 'Multimedia & Office Systems',
    description: 'Learners in a focused practical session developing speed, accuracy, and technical confidence.',
    tools: ['Practical Problem Solving', 'Live Review', 'Hands-on Labs'],
    image: './images/campus/students-learning.jpg',
    aspect: 'square',
    isRealCampusAsset: true,
  },
];


// ========== src/components/Header.js ==========
/**
 * Header & Navigation Component
 * Features sticky navigation, scroll threshold detection, mobile drawer, and keyboard accessibility.
 */



function renderHeader() {
  return `
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <!-- Logo -->
        <a href="#hero" class="brand-link" aria-label="G-TEC Education Ottappalam Home">
          <img 
            src="./images/brand/gtec-logo.png" 
            alt="G-TEC Education Ottappalam Logo" 
            class="brand-logo-img"
            width="180" 
            height="44"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav aria-label="Primary Navigation" class="nav-desktop-wrapper">
          <ul class="nav-desktop">
            <li><a href="#hero" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#courses" class="nav-link">Courses</a></li>
            <li><a href="#campus" class="nav-link">Campus</a></li>
            <li><a href="#gallery" class="nav-link">Student Work</a></li>
            <li><a href="#enquiry" class="nav-link">Admissions</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- Quick Action / CTA -->
        <div class="header-cta-group">
          <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm hide-mobile" aria-label="Chat on WhatsApp with G-TEC Ottappalam">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.12-.533-1.821-.756-2.986-2.614-3.076-2.735-.09-.12-0.739-.983-.739-1.874 0-.891.468-1.328.635-1.507.167-.179.366-.224.488-.224.122 0 .245.002.35.008.113.006.262-.042.411.314.155.371.531 1.296.577 1.39.046.094.077.204.015.327-.061.123-.092.199-.183.307-.091.107-.193.24-.276.323-.092.092-.188.193-.081.378.107.184.475.786 1.021 1.272.703.627 1.296.822 1.48.914.184.092.292.077.4-.046.108-.123.461-.537.584-.722.123-.184.246-.154.414-.092.169.062 1.07.505 1.254.597.184.092.307.138.353.215.046.077.046.447-.098.852z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a href="#enquiry" class="btn btn-primary btn-sm">
            Enquire Now
          </a>

          <!-- Mobile Toggle -->
          <button type="button" class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
    <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation" aria-hidden="true">
      <div class="drawer-top">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
          <img src="./images/brand/gtec-logo.png" alt="G-TEC Logo" style="height: 38px; width: auto;" />
          <button type="button" class="modal-close-btn" id="drawer-close-btn" aria-label="Close menu">&times;</button>
        </div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.25rem;">
          <li><a href="#hero" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Home</a></li>
          <li><a href="#about" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">About</a></li>
          <li><a href="#courses" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Courses</a></li>
          <li><a href="#campus" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Campus</a></li>
          <li><a href="#gallery" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Student Work</a></li>
          <li><a href="#enquiry" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Admissions</a></li>
          <li><a href="#contact" class="mobile-nav-link" style="font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--color-text-primary);">Contact</a></li>
        </ul>
      </div>

      <div class="drawer-bottom" style="border-top: 1px solid var(--color-border); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="${siteConfig.phoneTel}" class="btn btn-secondary btn-sm" style="width: 100%;">
          Call: ${siteConfig.phoneDisplay}
        </a>
        <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="width: 100%;">
          Chat on WhatsApp
        </a>
      </div>
    </aside>
  `;
}

function initHeader() {
  const header = document.getElementById('site-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open drawer
  const openDrawer = () => {
    drawer?.classList.add('open');
    drawer?.setAttribute('aria-hidden', 'false');
    backdrop?.classList.add('open');
    mobileBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  // Close drawer
  const closeDrawer = () => {
    drawer?.classList.remove('open');
    drawer?.setAttribute('aria-hidden', 'true');
    backdrop?.classList.remove('open');
    mobileBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}


// ========== src/components/HeroSection.js ==========
/**
 * Hero Section Component — Cinematic Light Introduction
 * Oversized headline: LEARN. CREATE. BECOME.
 * Supporting: Build skills for a digital world.
 * Location: OTTAPPALAM, KERALA
 */



function renderHeroSection() {
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


// ========== src/components/AboutSection.js ==========
/**
 * About Section Component — Editorial Asymmetric Introduction
 * Headline: "SKILLS THAT TURN CREATIVITY INTO POSSIBILITY."
 * Featuring real laboratory and reception photographs from G-TEC Ottappalam.
 */



function renderAboutSection() {
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


// ========== src/components/CourseCategorySection.js ==========
/**
 * Course Discovery Component — "FIND YOUR FIELD"
 * Features 4 distinctive editorial category showcases (CAD, Software, Multimedia, Accounting),
 * category tab switching, search filter, responsive course cards, and modal triggers.
 */



function renderCourseCategorySection() {
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
              aria-selected="${idx === 1 ? 'true' }" 
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

function initCourseSection() {
  let currentCategory = 'software';
  let searchQuery = '';

  const tabButtons = document.querySelectorAll('.category-tabs-nav .tab-btn');
  const editorialDisplay = document.getElementById('category-editorial-display');
  const coursesGrid = document.getElementById('courses-grid-container');
  const searchInput = document.getElementById('course-search-input') ;
  const countIndicator = document.getElementById('course-count-indicator');

  // Render Category Editorial Card
  const updateCategoryEditorial = (catId) => {
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
    searchQuery = (e.target ).value;
    renderCourses();
  });

  // Initial load
  updateCategoryEditorial(currentCategory);
  renderCourses();
}


// ========== src/components/CourseDetailModal.js ==========
/**
 * Course Detail Modal Component
 * Renders an accessible native <dialog> element displaying full official syllabus,
 * duration, eligibility, software tools covered, official central link, and instant WhatsApp enquiry.
 */




function renderCourseDetailModal() {
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

function initCourseDetailModal() {
  const dialog = document.getElementById('course-detail-dialog') ;
  const closeBtn = document.getElementById('modal-close-button');
  const levelElem = document.getElementById('modal-course-level');
  const titleElem = document.getElementById('modal-course-title');
  const contentElem = document.getElementById('modal-course-content');
  const officialLink = document.getElementById('modal-official-link') ;
  const whatsappBtn = document.getElementById('modal-whatsapp-btn') ;
  const enquireBtn = document.getElementById('modal-enquire-btn');

  let currentSelectedCourse | null = null;

  // Window global function to trigger modal from any card
  (window ).openCourseDetails = (courseId) => {
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
      (window ).selectCourseForEnquiry(currentSelectedCourse.id, currentSelectedCourse.category);
      const enquirySection = document.getElementById('enquiry');
      enquirySection?.scrollIntoView({ behavior });
    }
  });
}


// ========== src/components/CampusSection.js ==========
/**
 * Campus and Learning Environment Section
 * Dedicated visual editorial showcase featuring genuine institute photographs of
 * G-TEC Education Ottappalam (Reception, training lab, student stations).
 */



function renderCampusSection() {
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


// ========== src/components/StudentGallery.js ==========
/**
 * Student Work & Creative Gallery Component — "MADE WHILE LEARNING"
 * Showcase of student studio outputs, practical assignments, and technical projects.
 * Explicitly marks demonstration assignments and real campus activities.
 */



function renderStudentGallery() {
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

function initStudentGallery() {
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


// ========== src/components/EnquiryForm.js ==========
/**
 * Admissions Enquiry Form Component — "YOUR NEXT CHAPTER STARTS HERE"
 * Implements strict client-side validation, dynamic course category cascading,
 * genuine form submission handling with clear explanations, and direct WhatsApp routing.
 */




function renderEnquiryForm() {
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

function initEnquiryForm() {
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


// ========== src/components/ContactSection.js ==========
/**
 * Contact and Location Section Component
 * Displays verified address, telephone (9995955501), WhatsApp (wa.me/916238843939),
 * email, directions link, and social profiles.
 */



function renderContactSection() {
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


// ========== src/components/Footer.js ==========
/**
 * Footer Component
 * Dark contrast base for grounding the page with G-TEC brand artwork,
 * comprehensive site links, official contact links, and legal notice.
 */




function renderFooter() {
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


// ========== src/main.js ==========
/**
 * Main Application Orchestrator for G-TEC Education Ottappalam
 * Assembles all modular components, initializes interactive events,
 * and handles cinematic scroll reveals.
 */












function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Mount Application Shell
  appContainer.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHeroSection()}
      ${renderAboutSection()}
      ${renderCourseCategorySection()}
      ${renderCampusSection()}
      ${renderStudentGallery()}
      ${renderEnquiryForm()}
      ${renderContactSection()}
    </main>
    ${renderFooter()}
    ${renderCourseDetailModal()}
  `;

  // Initialize Component Interactivity
  initHeader();
  initCourseSection();
  initCourseDetailModal();
  initStudentGallery();
  initEnquiryForm();

  // Initialize Cinematic Scroll Reveal Observer
  initScrollAnimations();

  // Initialize Active Section Observer for Nav links
  initActiveNavObserver();
}

/**
 * Cinematic Scroll Trigger using performant IntersectionObserver
 */
function initScrollAnimations() {
  const revealItems = document.querySelectorAll('.reveal-item');
  
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin
  });

  revealItems.forEach(el => observer.observe(el));
}

/**
 * Highlight active navigation item based on current viewport section
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35
  });

  sections.forEach(s => observer.observe(s));
}

// Auto-boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


})();
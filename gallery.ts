/**
 * Student Work and Creative Gallery Data
 * Adheres strictly to the guidelines: clearly labels student prototypes and demonstration studio assignments.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'graphic-design' | 'multimedia' | 'video-editing' | 'technical-projects' | 'assignments' | 'activities';
  categoryLabel: string;
  courseRelation: string;
  description: string;
  tools: string[];
  image: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  isRealCampusAsset?: boolean;
}

export const galleryCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'multimedia', label: '3D & Multimedia' },
  { id: 'technical-projects', label: 'Technical Projects' },
  { id: 'activities', label: 'Institute Life' },
];

export const galleryItems: GalleryItem[] = [
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

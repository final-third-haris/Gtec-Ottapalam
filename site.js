/**
 * Central Brand and Contact Configuration for G-TEC Education, Ottappalam
 * Strict compliance with verified institute details.
 */

export const siteConfig = {
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
export function getCourseWhatsAppUrl(courseName) {
  const message = `Hello G-TEC Education Ottappalam, I would like to know more about ${courseName}. Please share the course details and admission information.`;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general admissions WhatsApp enquiry URL
 */
export function getGeneralWhatsAppUrl() {
  const message = `Hello G-TEC Education Ottappalam, I would like to enquire about courses and admissions at your Ottappalam centre.`;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

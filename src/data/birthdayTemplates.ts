import { Template } from "./templates";

export const birthdayTemplates: Template[] = [
  {
    id: 'birthday-1',
    name: 'Colorful Celebration',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1692880430217-00731a66c1ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxiaXJ0aGRheXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Elegant pastel birthday invite with arched gold border, watercolor balloons, and cute lamb illustration.',
    views: 987,
    isNew: false,
    isPopular: true,
    htmlContent: `...`,
    defaultColors: { primary: '#e2b13c', secondary: '#7a5a1e', text: '#7a5a1e', background: '#f8f5f1' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Merriweather', serif" }
  },
  {
    id: 'birthday-2',
    name: 'Birthday Party ',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1681841125083-78fa9ee82169?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lkcyUyMFBhcnR5fGVufDB8fDB8fHww',
    description: 'Pastel, playful kids birthday invite with bunting, confetti, balloons, and a festive abstract background.',
    views: 1123,
    isNew: false,
    isPopular: true,
    htmlContent: `...`,
    defaultColors: { primary: '#b45d8d', secondary: '#3bb3b3', text: '#444', background: '#f3e7fe' },
    defaultFonts: { title: "'Dancing Script', 'Pacifico', cursive", body: "'Quicksand', Arial, sans-serif" }
  },
  {
    id: 'birthday-3',
    name: 'Elegant Adult',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1692912315734-0837ed767730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWR1bHQlMjBiaXJ0aGRheXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Elegant white and gold birthday invite with modern serif, script, and confetti corners.',
    views: 756,
    isNew: false,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#bfa046', secondary: '#3a3532', text: '#3a3532', background: '#f9f7f3' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Merriweather', serif" }
  },
  {
    id: 'birthday-4',
    name: 'Sweet Fifty',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1711044546059-1691ed8a969c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    description: 'Black and gold 50th birthday invite with confetti, bold 3D gold 50, and elegant script.',
    views: 445,
    isNew: true,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#bfa046', secondary: '#fff', text: '#fff', background: '#18151a' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Montserrat', Arial, sans-serif" }
  }
]; 
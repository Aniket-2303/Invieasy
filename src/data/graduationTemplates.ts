import { Template } from "./templates";

export const graduationTemplates: Template[] = [
  {
    id: 'graduation-1',
    name: 'Graduation Party',
    category: 'graduation',
    thumbnail: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D',
    description: 'Photo background graduation invite with large script, bold date, and modern layout.',
    views: 321,
    isNew: true,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#e6c76e', secondary: '#fff', text: '#fff', background: '#18151a' },
    defaultFonts: { title: "'Playfair Display', 'Merriweather', 'Georgia', serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'graduation-2',
    name: 'Modern Graduation',
    category: 'graduation',
    thumbnail: 'https://images.unsplash.com/photo-1539413595691-37a09a48579b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZXJuJTIwR3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A modern, professional graduation invitation with a clean, premium look.',
    views: 210,
    isNew: false,
    isPopular: true,
    htmlContent: `...`,
    defaultColors: { primary: '#2563eb', secondary: '#fbbf24', text: '#2d2212', background: '#f8fafc' },
    defaultFonts: { title: "'Montserrat', 'Inter', Arial, sans-serif", body: "'Inter', sans-serif" }
  }
]; 
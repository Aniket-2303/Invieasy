import { Template } from "./templates";

export const corporateTemplates: Template[] = [
  {
    id: 'corporate-1',
    name: 'Business Meeting',
    category: 'corporate',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1c2luZXNzfGVufDB8fDB8fHww',
    description: 'Elegant, minimal business mixer invitation in a classic style.',
    views: 150,
    isNew: true,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#b49b6c', secondary: '#ede6d6', text: '#b49b6c', background: '#fcf9f6' },
    defaultFonts: { title: "'Merriweather', 'Georgia', serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'corporate-3',
    name: 'Monthly Meeting',
    category: 'corporate',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661413166847-47e3ecc668a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm9hcmQlMjBNZWV0aW5nfGVufDB8fDB8fHww',
    description: 'Modern, minimal monthly team meeting invitation with blue geometric accents.',
    views: 0,
    isNew: true,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#1e2952', secondary: '#3b4ba3', text: '#1e2952', background: '#fff' },
    defaultFonts: { title: "'Montserrat', 'Inter', Arial, sans-serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'corporate-4',
    name: 'Annual General Meeting',
    category: 'corporate',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1c2luZXNzfGVufDB8fDB8fHww',
    description: 'Minimal, professional annual general meeting invitation with geometric accents.',
    views: 0,
    isNew: true,
    isPopular: false,
    htmlContent: `...`,
    defaultColors: { primary: '#1a3c34', secondary: '#b7d3c6', text: '#1a3c34', background: '#fff' },
    defaultFonts: { title: "'Inter', Arial, sans-serif", body: "'Inter', Arial, sans-serif" }
  }
]; 
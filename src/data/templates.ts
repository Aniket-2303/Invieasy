export interface Template {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  htmlContent: string;
  defaultColors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };
  defaultFonts: {
    title: string;
    body: string;
  };
  views?: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
  templateCount: number;
}

export const categories: Category[] = [
  {
    id: 'wedding',
    name: 'Wedding',
    description: 'Elegant designs for your special day',
    backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    templateCount: 4
  },
  {
    id: 'birthday',
    name: 'Birthday',
    description: 'Fun and colorful celebration invites',
    backgroundImage: 'https://plus.unsplash.com/premium_photo-1670002456774-bc8f50ced929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJpcnRoZGF5JTIwY2VsZWJyYXRpb258ZW58MHx8MHx8fDA%3D',
    templateCount: 4
  },
  {
    id: 'graduation',
    name: 'Graduation',
    description: 'Celebrate academic achievements',
    backgroundImage: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    templateCount: 2
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional business invitations',
    backgroundImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    templateCount: 3
  },
  {
    id: 'baby-shower',
    name: 'Baby Shower',
    description: 'Adorable invitations for baby showers',
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60',
    templateCount: 0
  },
  {
    id: 'parties',
    name: 'Parties',
    description: 'Invitations for all kinds of parties',
    backgroundImage: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&auto=format&fit=crop&q=60',
    templateCount: 0
  },
  {
    id: 'festival',
    name: 'Festival',
    description: 'Festive invitations for every occasion',
    backgroundImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=60',
    templateCount: 0
  },
  {
    id: 'religious',
    name: 'Religious Celebrations',
    description: 'Invitations for religious events and ceremonies',
    backgroundImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&auto=format&fit=crop&q=60',
    templateCount: 0
  },
  {
    id: 'thank-you',
    name: 'Thank You Cards',
    description: 'Express your gratitude with style',
    backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60',
    templateCount: 0
  },
];

import { weddingTemplates } from "./weddingTemplates";
import { birthdayTemplates } from "./birthdayTemplates";
import { graduationTemplates } from "./graduationTemplates";
import { corporateTemplates } from "./corporateTemplates";

export const templates: Template[] = [
  ...weddingTemplates,
  ...birthdayTemplates,
  ...graduationTemplates,
  ...corporateTemplates,
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getAllCategories = (): string[] => {
  return [...new Set(templates.map(template => template.category))];
};

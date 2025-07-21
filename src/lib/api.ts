import axios from 'axios';

// Mock API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.inviteeasy.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data for templates
const mockTemplates = [
  {
    id: '1',
    name: 'Elegant Wedding',
    category: 'Wedding',
    description: 'A sophisticated wedding invitation with elegant typography and floral accents.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&crop=center',
    colors: ['#f8f9fa', '#6c757d', '#495057'],
    tags: ['elegant', 'formal', 'floral'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Birthday Bash',
    category: 'Birthday',
    description: 'Fun and colorful birthday invitation perfect for celebrations.', 
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop&crop=center',
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
    tags: ['fun', 'colorful', 'celebration'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    name: 'Graduation Ceremony',
    category: 'Graduation',
    description: 'Professional graduation invitation with academic styling.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=center',
    colors: ['#2c3e50', '#3498db', '#ecf0f1'],
    tags: ['academic', 'professional', 'achievement'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-12T09:15:00Z',
    updatedAt: '2024-01-12T09:15:00Z'
  },
  {
    id: '4',
    name: 'Holiday Party',
    category: 'Holiday',
    description: 'Festive holiday party invitation with seasonal decorations.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop&crop=center',
    colors: ['#e74c3c', '#27ae60', '#f39c12'],
    tags: ['festive', 'seasonal', 'party'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-08T16:45:00Z',
    updatedAt: '2024-01-08T16:45:00Z'
  },
  {
    id: '5',
    name: 'Baby Shower',
    category: 'Baby Shower',
    description: 'Sweet and gentle baby shower invitation with soft colors.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop&crop=center',
    colors: ['#f8bbd9', '#e1bee7', '#c5cae9'],
    tags: ['sweet', 'gentle', 'baby'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-05T11:20:00Z',
    updatedAt: '2024-01-05T11:20:00Z'
  },
  {
    id: '6',
    name: 'Corporate Event',
    category: 'Corporate',
    description: 'Professional corporate event invitation with business styling.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop&crop=center',
    colors: ['#34495e', '#7f8c8d', '#bdc3c7'],
    tags: ['professional', 'business', 'corporate'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-03T13:10:00Z',
    updatedAt: '2024-01-03T13:10:00Z'
  },
  {
    id: '7',
    name: 'Anniversary Celebration',
    category: 'Wedding',
    description: 'Romantic anniversary invitation with elegant design elements.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&crop=center',
    colors: ['#e91e63', '#9c27b0', '#f8bbd9'],
    tags: ['romantic', 'elegant', 'anniversary'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-14T12:00:00Z',
    updatedAt: '2024-01-14T12:00:00Z'
  },
  {
    id: '8',
    name: 'Kids Birthday',
    category: 'Birthday',
    description: 'Colorful and playful birthday invitation for children.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&crop=center',
    colors: ['#ff9800', '#4caf50', '#2196f3'],
    tags: ['kids', 'playful', 'colorful'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-13T15:30:00Z',
    updatedAt: '2024-01-13T15:30:00Z'
  },
  {
    id: '9',
    name: 'Garden Party',
    category: 'Holiday',
    description: 'Beautiful garden party invitation with nature-inspired design.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&crop=center',
    colors: ['#4caf50', '#8bc34a', '#cddc39'],
    tags: ['garden', 'nature', 'outdoor'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-11T09:45:00Z',
    updatedAt: '2024-01-11T09:45:00Z'
  },
  {
    id: '10',
    name: 'Graduation Party',
    category: 'Graduation',
    description: 'Celebratory graduation party invitation with modern design.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&crop=center',
    colors: ['#ff5722', '#ff9800', '#ffc107'],
    tags: ['graduation', 'celebration', 'modern'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-09T14:20:00Z',
    updatedAt: '2024-01-09T14:20:00Z'
  },
  {
    id: '11',
    name: 'Bridal Shower',
    category: 'Wedding',
    description: 'Elegant bridal shower invitation with feminine touches.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&crop=center',
    colors: ['#f8bbd9', '#e1bee7', '#f3e5f5'],
    tags: ['bridal', 'feminine', 'elegant'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-07T11:15:00Z',
    updatedAt: '2024-01-07T11:15:00Z'
  },
  {
    id: '12',
    name: 'Business Meeting',
    category: 'Corporate',
    description: 'Professional business meeting invitation with corporate branding.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center',
    colors: ['#2c3e50', '#34495e', '#7f8c8d'],
    tags: ['business', 'professional', 'corporate'],
    price: 0,
    isPremium: false,
    createdAt: '2024-01-06T16:40:00Z',
    updatedAt: '2024-01-06T16:40:00Z'
  }
];

// Mock user data
const mockUser = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe',
  avatar: '/api/placeholder/100/100',
  subscription: 'free',
  createdAt: '2024-01-01T00:00:00Z',
  lastLogin: new Date().toISOString()
};

// Mock projects data
const mockProjects = [
  {
    id: '1',
    name: 'Wedding Invitation',
    template: mockTemplates[0],
    status: 'completed',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Birthday Party',
    template: mockTemplates[1],
    status: 'draft',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  }
];

// API Service Class
class ApiService {
  // Templates
  async getTemplates(params?: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredTemplates = [...mockTemplates];
    
    if (params?.category && params.category !== 'all') {
      filteredTemplates = filteredTemplates.filter(
        template => template.category.toLowerCase() === params.category?.toLowerCase()
      );
    }
    
    if (params?.search) {
      const searchTerm = params.search.toLowerCase();
      filteredTemplates = filteredTemplates.filter(
        template =>
          template.name.toLowerCase().includes(searchTerm) ||
          template.description.toLowerCase().includes(searchTerm) ||
          template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
      data: filteredTemplates.slice(startIndex, endIndex),
      pagination: {
        page,
        limit,
        total: filteredTemplates.length,
        totalPages: Math.ceil(filteredTemplates.length / limit)
      }
    };
  }

  async getTemplateById(id: string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const template = mockTemplates.find(t => t.id === id);
    if (!template) {
      throw new Error('Template not found');
    }
    
    return template;
  }

  // User
  async getCurrentUser() {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockUser;
  }

  async updateUser(data: Partial<typeof mockUser>) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    Object.assign(mockUser, data);
    return mockUser;
  }

  // Projects
  async getProjects() {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProjects;
  }

  async createProject(data: {
    name: string;
    templateId: string;
  }) {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const template = mockTemplates.find(t => t.id === data.templateId);
    if (!template) {
      throw new Error('Template not found');
    }
    
    const newProject = {
      id: (mockProjects.length + 1).toString(),
      name: data.name,
      template,
      status: 'draft' as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    mockProjects.push(newProject);
    return newProject;
  }

  async updateProject(id: string, data: Partial<typeof mockProjects[0]>) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const projectIndex = mockProjects.findIndex(p => p.id === id);
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }
    
    Object.assign(mockProjects[projectIndex], data, {
      updatedAt: new Date().toISOString()
    });
    
    return mockProjects[projectIndex];
  }

  async deleteProject(id: string) {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const projectIndex = mockProjects.findIndex(p => p.id === id);
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }
    
    mockProjects.splice(projectIndex, 1);
    return { success: true };
  }

  // Analytics
  async getAnalytics() {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      totalProjects: mockProjects.length,
      completedProjects: mockProjects.filter(p => p.status === 'completed').length,
      draftProjects: mockProjects.filter(p => p.status === 'draft').length,
      templatesUsed: [...new Set(mockProjects.map(p => p.template.id))].length,
      lastActivity: mockProjects[mockProjects.length - 1]?.updatedAt || null
    };
  }

  // Export
  async exportProject(id: string, format: 'png' | 'jpg' | 'pdf' = 'png') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const project = mockProjects.find(p => p.id === id);
    if (!project) {
      throw new Error('Project not found');
    }
    
    // Simulate file generation
    return {
      downloadUrl: `/api/download/${id}.${format}`,
      filename: `${project.name}.${format}`,
      size: Math.floor(Math.random() * 1000000) + 50000, // Random file size
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
  }

  // Search
  async searchTemplates(query: string) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const searchTerm = query.toLowerCase();
    const results = mockTemplates.filter(
      template =>
        template.name.toLowerCase().includes(searchTerm) ||
        template.description.toLowerCase().includes(searchTerm) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    return results;
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export types
export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  colors: string[];
  tags: string[];
  price: number;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  subscription: string;
  createdAt: string;
  lastLogin: string;
}

export interface Project {
  id: string;
  name: string;
  template: Template;
  status: 'draft' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Analytics {
  totalProjects: number;
  completedProjects: number;
  draftProjects: number;
  templatesUsed: number;
  lastActivity: string | null;
}

export default apiService; 
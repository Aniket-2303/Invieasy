"use client";
import { useState } from 'react';
import { Template } from '@/data/templates';
import Link from 'next/link';
import { FaEye, FaEdit } from 'react-icons/fa';

interface TemplateGridProps {
  templates: Template[];
  category?: string;
}

export default function TemplateGrid({ templates, category }: TemplateGridProps) {
  const [search] = useState('');
  const [sort] = useState('popular');
  const [selectedCategory] = useState(category || 'all');

  // Filtered templates
  const filtered = templates.filter(t =>
    (selectedCategory === 'all' || t.category === selectedCategory) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()))
  );

  // Sort templates
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'popular') {
      return (b.views || 0) - (a.views || 0);
    }
    if (sort === 'new') {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    }
    return 0;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* Removed lower hero section as per user request */}

      {/* Search & Filter Bar */}
      {/* Removed search, sort, new templates button, and category pills as per user request */}

      {/* Template Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {sorted.map((template) => (
          <div key={template.id} className="bg-white rounded-2xl shadow group overflow-hidden border border-[#ede6d6] hover:shadow-xl transition flex flex-col">
            {/* Image + Badge + Hover Overlay */}
            <div className="relative">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              {/* Badge */}
              {template.isPopular && (
                <span className="absolute top-3 right-3 text-white text-xs font-medium px-3 py-1 rounded-full shadow bg-[#b49b6c]">
                  Popular
                </span>
              )}
              {template.isNew && (
                <span className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full shadow bg-[#b49b6c]">
                  New
                </span>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/templates/editor/${template.id}`}
                  className="px-3 py-1.5 rounded-md bg-white text-[#2d2212] font-medium font-serif shadow flex items-center gap-1 text-sm border border-[#ede6d6] hover:bg-[#f9f7f3] transition min-w-[120px] justify-center"
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536M9 13l6.071-6.071a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4.243 1.414 1.414-4.243a4 4 0 01.828-1.414z' /></svg>
                  Edit Template
                </Link>
              </div>
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-medium mb-1 text-[#2d2212] font-serif">{template.name}</h3>
              <p className="text-[#7c6a4d] text-sm mb-4 line-clamp-2">{template.description}</p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <FaEye /> {template.views} views
                </span>
                <Link
                  href={`/templates/editor/${template.id}`}
                  className="flex items-center gap-1 px-3 py-1 border border-[#ede6d6] rounded-full text-[#7c6a4d] hover:bg-[#f9f7f3] transition text-xs font-medium shadow-sm"
                >
                  <FaEdit /> Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sorted.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No templates found</h3>
          <p className="text-gray-500">
            {selectedCategory === 'all' 
              ? 'No templates available at the moment.'
              : `No templates available for ${selectedCategory} category.`
            }
          </p>
        </div>
      )}
    </div>
  );
}
"use client";
import TemplateGrid from '@/components/TemplateGrid';
import { templates, categories } from '@/data/templates';
import Navigation from '@/components/Navigation';
import { FaArrowRight, FaRegClone } from 'react-icons/fa';
import type { Category } from '@/data/templates';
import Link from 'next/link';

function CategoryCard({
  category,
  onClick,
}: {
  category: Category;
  onClick: (id: string) => void;
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-64"
      onClick={() => onClick(category.id)}
    >
      <img
        src={category.backgroundImage}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      {/* Top-right: template count */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full font-medium shadow">
        <FaRegClone className="mr-1" /> {category.templateCount} templates
      </div>
      {/* Bottom-left: name + desc */}
      <div className="absolute left-6 bottom-6">
        <div className="text-white text-2xl font-bold mb-1 drop-shadow">{category.name}</div>
        <div className="text-white text-base drop-shadow">{category.description}</div>
      </div>
      {/* Bottom-right: arrow */}
      <div className="absolute right-6 bottom-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow group-hover:bg-white transition">
          <FaArrowRight className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f7f3] font-sans">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Heading & Subheading */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#2d2212] text-center mb-2 mt-4">Choose Your Template</h1>
        <p className="text-lg text-[#7c6a4d] text-center mb-10 max-w-2xl mx-auto">Browse our collection of professionally designed invitation templates. Select a category below to explore available designs and start customizing your perfect invitation.</p>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] text-left mb-6">Template Categories</h2>
        {/* Categories Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map(cat => (
            <CategoryCard key={cat.id} category={cat} onClick={scrollToSection} />
          ))}
        </div>
        {/* Wedding Templates Section */}
        <div id="wedding">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] text-left mb-2">Wedding Templates</h2>
          <p className="text-[#7c6a4d] mb-6 text-base">Choose from our collection of wedding invitation templates</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'wedding')} />
        </div>
        {/* Birthday Templates Section */}
        <div id="birthday">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] text-left mt-16 mb-2">Birthday Templates</h2>
          <p className="text-[#7c6a4d] mb-6 text-base">Choose from our collection of birthday invitation templates</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'birthday')} />
        </div>
        {/* Graduation Templates Section */}
        <div id="graduation">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] text-left mt-16 mb-2">Graduation Templates</h2>
          <p className="text-[#7c6a4d] mb-6 text-base">Choose from our collection of graduation invitation templates</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'graduation').slice(0,2)} />
        </div>
        {/* Corporate Templates Section */}
        <div id="corporate">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] text-left mt-16 mb-2">Corporate Templates</h2>
          <p className="text-[#7c6a4d] mb-6 text-base">Choose from our collection of corporate invitation templates</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'corporate')} />
        </div>
        {/* Can't Find Section */}
        <div className="mt-16 mb-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] mb-2">Can't Find What You're Looking For?</h2>
          <p className="text-[#7c6a4d] mb-6">We're constantly adding new templates to our collection. Check back soon for more designs or contact us with your specific requirements.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-[#b49b6c] text-white font-medium rounded-lg shadow hover:bg-[#a68a5b] transition text-base flex items-center justify-center">Learn More About Us</Link>
            <button className="px-6 py-3 border-2 border-[#b49b6c] text-[#b49b6c] font-medium rounded-lg hover:bg-[#b49b6c]/10 transition text-base">Refresh Templates</button>
          </div>
        </div>
      </main>
    </div>
  );
} 
"use client";
import TemplateGrid from '@/components/TemplateGrid';
import { templates, categories } from '@/data/templates';
import Navigation from '@/components/Navigation';
import { FaArrowRight, FaRegClone } from 'react-icons/fa';
import type { Category } from '@/data/templates';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import './category-carousel.css'; // Add this import for custom animation
import './category-chips.css';
import { useTranslation } from "@/hooks/useTranslation";

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
        <FaRegClone className="mr-1 text-xs" /> {category.templateCount} templates
      </div>
      {/* Bottom-left: name + desc */}
      <div className="absolute left-6 bottom-6">
        <div className="text-white text-2xl font-bold mb-1 drop-shadow">{category.name}</div>
        {/* Removed description as per user request */}
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

function CategoryCarousel({ categories, onClick }: { categories: Category[]; onClick: (id: string) => void }) {
  // Remove JS auto-scroll logic, use CSS animation instead
  return (
    <div className="category-carousel py-2 px-1">
      <div className="category-carousel-track snap-x snap-mandatory">
        {categories.concat(categories).map((cat, idx) => (
          <div key={cat.id + '-' + idx} className="min-w-[320px] max-w-[340px] snap-center">
            <CategoryCard category={cat} onClick={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryChips({ categories, onClick }: { categories: Category[]; onClick: (id: string) => void }) {
  return (
    <div className="category-chips-carousel overflow-x-hidden py-2 px-1">
      <div className="category-chips-track flex gap-4 w-max">
        {categories.concat(categories).map((cat, idx) => (
          <button
            key={cat.id + '-' + idx}
            onClick={() => onClick(cat.id)}
            className="px-6 py-2 rounded-full bg-[#F4EBD0] text-[#095764] font-semibold shadow-md border border-[#F18701] hover:bg-[#F18701] hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap text-base drop-shadow-md chip-shadow"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const t = useTranslation();
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
    <div className="min-h-screen bg-[#FFFCF0] font-sans">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8 bg-[#FFFCF0] text-[#095764]">
        {/* Main Heading & Subheading */}
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-[#095764] text-center mb-2 mt-4">{t('templates_choose_heading')}</h1>
        <p className="text-lg text-[#2F2F2F] text-center mb-10 max-w-2xl mx-auto">{t('templates_choose_subheading')}</p>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] text-left mb-6">{t('templates_categories')}</h2>
        {/* Categories Grid */}
        <CategoryChips categories={categories} onClick={scrollToSection} />
        <div className="mb-10" />
        {/* Wedding Templates Section */}
        <div id="wedding">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] text-left mb-2">{t('templates_wedding_heading')}</h2>
          <p className="text-[#2F2F2F] mb-6 text-base">{t('templates_wedding_desc')}</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'wedding')} />
        </div>
        {/* Birthday Templates Section */}
        <div id="birthday">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] text-left mt-16 mb-2">{t('templates_birthday_heading')}</h2>
          <p className="text-[#2F2F2F] mb-6 text-base">{t('templates_birthday_desc')}</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'birthday')} />
        </div>
        {/* Graduation Templates Section */}
        <div id="graduation">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] text-left mt-16 mb-2">{t('templates_graduation_heading')}</h2>
          <p className="text-[#2F2F2F] mb-6 text-base">{t('templates_graduation_desc')}</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'graduation').slice(0,2)} />
        </div>
        {/* Corporate Templates Section */}
        <div id="corporate">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] text-left mt-16 mb-2">{t('templates_corporate_heading')}</h2>
          <p className="text-[#2F2F2F] mb-6 text-base">{t('templates_corporate_desc')}</p>
          <TemplateGrid templates={templates.filter(t => t.category === 'corporate')} />
        </div>
        {/* Can't Find Section */}
        <div className="mt-16 mb-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-[#095764] mb-2">{t('templates_cant_find_heading')}</h2>
          <p className="text-[#2F2F2F] mb-6">{t('templates_cant_find_desc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about" className="px-6 py-3 bg-[#F18701] text-white font-medium rounded-lg shadow hover:bg-[#d46e00] transition text-base flex items-center justify-center">{t('learn_more_about_us')}</Link>
          </div>
        </div>
      </main>
      <footer className="bg-[#EAE7DC] py-4 mt-8 text-[#095764]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-base font-sans text-[#095764]">&copy; {new Date().getFullYear()} InviteEasy. All rights reserved.</div>
          <div className="flex gap-6">
           <Link href="/privacy-policy" className="hover:underline text-[#095764] font-medium">{t('privacy_policy')}</Link>
           <Link href="/about" className="hover:underline text-[#095764] font-medium">{t('about_us')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 
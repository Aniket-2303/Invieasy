'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaRegClone } from 'react-icons/fa';
import { useTranslation } from "@/hooks/useTranslation";

export default function Navigation() {
  const t = useTranslation();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav_home'), href: '/', icon: <FaHome className="mr-2" /> },
    { name: t('nav_templates'), href: '/templates', icon: <FaRegClone className="mr-2" /> },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center h-24">
              <img src="/Logo/invieasy_logo-rbg.png" alt="InviteEasy logo" className="h-25 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-3 rounded-xl text-base font-poppins transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-[#095764] bg-[#e0f1f3]'
                      : 'text-[#095764] hover:text-[#07414a] hover:bg-[#e0f1f3]'
                  }`}
                >
                  <span className="flex items-center">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#095764] hover:text-[#07414a] focus:outline-none focus:text-[#07414a] transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-7 w-7" />
              ) : (
                <FaBars className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-[#e0f1f3]/95 backdrop-blur-sm rounded-b-2xl mx-4 shadow-sm border border-[#095764]/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-poppins transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#095764] bg-[#e0f1f3]'
                    : 'text-[#095764] hover:text-[#07414a] hover:bg-[#e0f1f3]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaRegClone, FaRegQuestionCircle } from 'react-icons/fa';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: <FaHome className="inline mr-2 align-text-bottom" /> },
    { name: 'Templates', href: '/templates', icon: <FaRegClone className="inline mr-2 align-text-bottom" /> },
    { name: 'About', href: '/about', icon: <FaRegQuestionCircle className="inline mr-2 align-text-bottom" /> },
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
              <img src="/Logo/invieasy_logo-rbg.png" alt="InviteEasy Logo" className="h-25 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-3 rounded-xl text-base font-sans transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-[#8B7355] bg-[#f3efe7]' // active
                      : 'text-[#7c6a4d] hover:text-[#8B7355] hover:bg-[#f9f7f3]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#7c6a4d] hover:text-[#8B7355] focus:outline-none focus:text-[#8B7355] transition-colors duration-200"
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
          <div className="px-4 pt-2 pb-4 space-y-2 bg-[#f9f7f3]/95 backdrop-blur-sm rounded-b-2xl mx-4 shadow-sm border border-[#ede6d6]/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-sans transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#8B7355] bg-[#f3efe7]'
                    : 'text-[#7c6a4d] hover:text-[#8B7355] hover:bg-[#f9f7f3]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 
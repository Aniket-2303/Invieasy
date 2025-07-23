'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { FaArrowRight, FaRegClone } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-[#FFFCF0] min-h-screen font-sans text-[#095764]">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Removed icon above main heading as requested */}
          <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-[#095764] mb-2 leading-tight">
            Create Beautiful <span className="text-[#095764]">Invitation Cards</span>
          </h1>
          <p className="text-lg md:text-xl text-[#2F2F2F] mb-8 mt-2 font-sans">
            Design stunning wedding and birthday invitations with our easy-to-use templates. Customize text, export as PNG or PDF, and share your perfect invitations in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/templates" className="inline-flex items-center justify-center px-8 py-4 bg-[#F18701] text-[#FFFCF0] font-medium rounded-xl shadow-lg hover:bg-[#d46e00] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg font-sans border-2 border-[#F18701]">
              Get Started Free <FaArrowRight className="ml-2" />
            </Link>
          </div>
          {/* HERO FEATURE ROW */}
          <div className="flex flex-wrap justify-center gap-10 text-[#2F2F2F] text-lg mb-8 items-center font-sans">
            <span className="flex items-center gap-2"><svg className="w-5 h-5" fill="none" stroke="#2F2F2F" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> No Design Skills Required</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5" fill="none" stroke="#2F2F2F" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Professional Templates</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5" fill="none" stroke="#2F2F2F" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg> Instant Export</span>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#FFFCF0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#095764] text-center mb-10">Why Choose Invieasy?</h2>
          <p className="text-lg text-[#2F2F2F] text-center mb-12 max-w-2xl mx-auto font-sans">
            Everything you need to create professional invitation cards without the complexity of traditional design tools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WHY CHOOSE INVITEEASY SECTION */}
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">edit</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Easy Text Editing</div>
              <div className="text-[#7A7A7A] text-base font-sans">Click and edit text directly on your invitation cards. No complex tools or learning curve required.</div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">view_agenda</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Professional Templates</div>
              <div className="text-[#7A7A7A] text-base font-sans">Choose from beautifully designed wedding and birthday templates created by professional designers.</div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">download</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Multiple Export Options</div>
              <div className="text-[#7A7A7A] text-base font-sans">Export your invitations as high-quality PNG images or PDF files ready for printing or sharing.</div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">smartphone</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Mobile Friendly</div>
              <div className="text-[#7A7A7A] text-base font-sans">Create and edit invitations on any device. Our responsive design works perfectly on mobile and desktop.</div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">bolt</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Lightning Fast</div>
              <div className="text-[#7A7A7A] text-base font-sans">Create stunning invitations in minutes, not hours. Our streamlined process gets you results quickly.</div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-8 flex flex-col items-start min-h-[220px] text-[#095764]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] bg-[#FDEACC] rounded-xl p-2 mb-4">share</span>
              <div className="text-lg font-bold text-[#2F2F2F] mb-2 font-serif">Easy Sharing</div>
              <div className="text-[#7A7A7A] text-base font-sans">Share your invitations digitally or print them at home. Perfect for both online and offline distribution.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#095764] text-center mb-4">Beautiful Templates Ready to Use</h2>
          <p className="text-lg text-[#2F2F2F] text-center mb-8 max-w-2xl mx-auto font-sans">
            Browse our collection of professionally designed invitation templates. Each template is fully customizable to match your event's style.
          </p>
          <div className="flex justify-center mb-8">
            <Link href="/templates" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F18701] text-[#FFFCF0] font-medium rounded-xl shadow-lg hover:bg-[#d46e00] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg font-sans border-2 border-[#F18701]">
              <FaRegClone /> View All Templates
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Example template cards, now with Unsplash images matching the title */}
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-0 overflow-hidden flex flex-col text-[#095764]">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1600224503282-8a4e3b876808?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEVsZWdhbnQlMjBSb3NlJTIwV2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Elegant Rose Wedding invitation card" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-lg text-[#2F2F2F] mb-1 font-serif">Elegant Rose Wedding</div>
                <div className="text-[#7A7A7A] text-base mb-2 font-sans">Classic and romantic design perfect for traditional weddings</div>
              </div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-0 overflow-hidden flex flex-col text-[#095764]">
              <div className="relative">
                <span className="absolute top-3 left-3 bg-[#F18701] text-white text-xs font-bold px-3 py-1 rounded-full shadow font-sans">Wedding</span>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern Minimalist invitation card" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-lg text-[#2F2F2F] mb-1 font-serif">Modern Minimalist</div>
                <div className="text-[#7A7A7A] text-base mb-2 font-sans">Clean and contemporary design for modern couples</div>
              </div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-0 overflow-hidden flex flex-col text-[#095764]">
                <div className="relative">
                <span className="absolute top-3 left-3 bg-[#F18701] text-white text-xs font-bold px-3 py-1 rounded-full shadow font-sans">Popular</span>
                <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Colorful Celebration invitation card" className="w-full h-48 object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                <div className="text-lg text-[#2F2F2F] mb-1 font-serif">Colorful Celebration</div>
                <div className="text-[#7A7A7A] text-base mb-2 font-sans">Vibrant and fun design perfect for birthday parties</div>
              </div>
            </div>
            <div className="bg-[#F4EBD0] rounded-2xl shadow p-0 overflow-hidden flex flex-col text-[#095764]">
              <div className="relative">
                <img src="https://plus.unsplash.com/premium_photo-1691872437494-ef75b3a00d6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fDFzdCUyMGJpcnRoZGF5fGVufDB8fDB8fHww" alt="Sweet Sixteen invitation card" className="w-full h-48 object-cover" />
                </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-lg text-[#2F2F2F] mb-1 font-serif">One-derful</div>
                <div className="text-[#7A7A7A] text-base mb-2 font-sans">Glamorous design perfect for milestone birthday celebrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#FFFCF0]">
        <div className="max-w-3xl mx-auto text-center px-4">
          {/* Removed icon above final CTA as requested */}
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#095764] mb-4">Ready to Create Your Perfect Invitation?</h2>
          <p className="text-lg text-[#2F2F2F] mb-8 font-sans">
            Join thousands of users who have created beautiful invitations with InviteEasy. Start designing your perfect invitation card today – it&apos;s completely free!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/templates" className="inline-flex items-center justify-center px-8 py-4 bg-[#F18701] text-[#FFFCF0] font-medium rounded-xl shadow-lg hover:bg-[#d46e00] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg font-sans border-2 border-[#F18701]">
              Start Creating Now <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-[#F18701] text-[#FFFCF0] font-medium rounded-xl shadow-lg hover:bg-[#d46e00] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg font-sans border-2 border-[#F18701]">
              Learn More
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-base font-sans mt-10">
            <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[220px]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] mb-2">schedule</span>
              <span className="font-bold text-[#2F2F2F] text-lg">Quick Setup</span>
              <span className="text-sm text-[#7A7A7A]">Create in minutes</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[180px] max-w-[220px]">
              <span className="material-symbols-rounded text-4xl text-[#F18701] mb-2">favorite</span>
              <span className="font-bold text-[#2F2F2F] text-lg">Made with Love</span>
              <span className="text-sm text-[#7A7A7A]">Crafted for you</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#EAE7DC] py-4 mt-8 text-[#095764]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-base font-sans text-[#095764]">&copy; {new Date().getFullYear()} InviteEasy. All rights reserved.</div>
          <div className="flex gap-6">
           <Link href="/privacy-policy" className="hover:underline text-[#095764] font-medium">Privacy Policy</Link>
           <Link href="/about" className="hover:underline text-[#095764] font-medium">About Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

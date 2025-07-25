"use client";

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-[#FFFCF0] font-sans text-[#095764]">
      <Navigation />
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-4">
        <div className="bg-[#F4EBD0] rounded-xl p-8 mb-10 shadow text-center text-[#095764]">
          <blockquote className="text-2xl md:text-3xl font-serif text-[#095764] font-medium leading-relaxed">
            <span className="text-4xl align-top text-[#F18701]">“</span>
            {t('about_quote')}
            <span className="text-4xl align-bottom text-[#F18701]">”</span>
          </blockquote>
        </div>
        <div className="text-[#7A7A7A] text-base md:text-lg mb-8 text-center">
          {t('about_thank_you')}
        </div>
        <div className="text-[#7A7A7A] text-base mb-6">
          {t('about_belief')}
        </div>
        <div className="text-[#7A7A7A] text-base mb-6">
          <span className="font-semibold">{t('about_our_story')}</span> {t('about_our_story_text')}
        </div>
        <div className="text-[#7A7A7A] text-base mb-10">
          <span className="font-semibold">{t('about_what_we_offer')}</span> {t('about_what_we_offer_text')}
        </div>
        <div className="text-center text-[#F18701] font-medium text-base">
          <span className="text-xl mr-2">❤️</span>
          {t('about_care')}
        </div>
      </section>
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
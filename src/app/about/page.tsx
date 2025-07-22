import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFCF0] font-sans text-[#095764]">
      <Navigation />
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-4">
        {/* <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[#2F2F2F]">About InviteEasy</h1> */}
        <div className="bg-[#F4EBD0] rounded-xl p-8 mb-10 shadow text-center text-[#095764]">
          <blockquote className="text-2xl md:text-3xl font-serif text-[#095764] font-medium leading-relaxed">
            <span className="text-4xl align-top text-[#F18701]">“</span>
            We make designing personalized invitations easy and simple, letting you focus on what matters most—your celebration.
            <span className="text-4xl align-bottom text-[#F18701]">”</span>
          </blockquote>
        </div>
        <div className="text-[#7A7A7A] text-base md:text-lg mb-8 text-center">
          Thank you for choosing <span className="font-semibold text-[#F18701]">InviteEasy</span>. We're excited to be a part of your special moments and help you create beautiful, memorable invitations—effortlessly.
        </div>
        <div className="text-[#7A7A7A] text-base mb-6">
          At InviteEasy, we believe everyone should be able to design stunning invitations without any design skills. Our user-friendly platform lets you create, customize, and share invitations for weddings, birthdays, baby showers, and more—all in just a few clicks.
          </div>
        <div className="text-[#7A7A7A] text-base mb-6">
          <span className="font-semibold">Our story:</span> Founded in 2024, InviteEasy was born from a passion for design and a love for celebrating life's milestones. What started as a small project for friends and family quickly grew into a full-featured app dedicated to making invitation creation simple, fast, and fun for everyone.
        </div>
        <div className="text-[#7A7A7A] text-base mb-10">
          <span className="font-semibold">What we offer:</span> A curated collection of professionally designed templates, an intuitive editor, instant export options, and a commitment to privacy and ease of use.
        </div>
        <div className="text-center text-[#F18701] font-medium text-base">
          <span className="text-xl mr-2">❤️</span>
          We put a lot of care and creativity into InviteEasy, so you can focus on celebrating your moments.
        </div>
      </section>
      <footer className="bg-[#EAE7DC] py-8 mt-12 text-[#095764]">
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
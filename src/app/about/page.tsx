import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { FaEnvelope, FaPalette, FaUserFriends, FaCogs, FaLock, FaRocket, FaGlobe, FaEdit, FaEye, FaComments, FaBook } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9f7f3] font-sans">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-16 pb-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#b49b6c] flex items-center justify-center">
            <FaEnvelope className="text-white text-3xl" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#2d2212] mb-2">About InviteEasy</h1>
        <p className="text-lg text-[#7c6a4d] mb-6 max-w-2xl mx-auto">Simplifying invitation creation with beautiful templates and intuitive editing tools. Create stunning invitations for your special moments in minutes, not hours.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-4">
          <Link href="/templates" className="px-6 py-3 bg-[#b49b6c] text-white font-medium rounded-lg shadow hover:bg-[#a68a5b] transition text-base flex items-center gap-2 justify-center"><FaPalette /> Browse Templates</Link>
          <Link href="/about" className="px-6 py-3 border-2 border-[#b49b6c] text-[#b49b6c] font-medium rounded-lg hover:bg-[#b49b6c]/10 transition text-base flex items-center gap-2 justify-center"><FaBook /> Learn More</Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d2212] text-center mb-2">Our Mission</h2>
        <p className="text-[#7c6a4d] text-center mb-10 max-w-2xl mx-auto">To democratize invitation design by providing powerful yet simple tools that help people celebrate life's special moments with beautiful, personalized invitations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-3xl mb-3 text-[#b49b6c]" />
            <h3 className="text-lg font-serif text-[#2d2212] mb-1">Simplicity First</h3>
            <p className="text-[#7c6a4d] text-base">We use simple, beautiful interfaces so anyone can create invitations—no design skills needed. Our tools are intuitive and easy to use, yet powerful enough to create professional-looking invitations.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaPalette className="text-3xl mb-3 text-[#b49b6c]" />
            <h3 className="text-lg font-serif text-[#2d2212] mb-1">Beautiful Templates</h3>
            <p className="text-[#7c6a4d] text-base">Every template is carefully crafted by professional designers, giving you a variety of styles for every occasion. Easily customize colors, text, and styles to suit your event.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUserFriends className="text-3xl mb-3 text-[#b49b6c]" />
            <h3 className="text-lg font-serif text-[#2d2212] mb-1">User-Centered Design</h3>
            <p className="text-[#7c6a4d] text-base">We build for real users, not for show. Our platform is shaped by your feedback and needs, making invitation creation fast, fun, and delightful.</p>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d2212] text-center mb-2">Powerful Features</h2>
        <p className="text-[#7c6a4d] text-center mb-10 max-w-2xl mx-auto">Everything you need to create, customize, and share beautiful invitations for your special occasions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaEdit className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">HTML-Based Editor</h4>
            <p className="text-[#7c6a4d] text-sm">Our powerful HTML-based editor lets you customize every detail of your invitation with live preview.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaPalette className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Template Variety</h4>
            <p className="text-[#7c6a4d] text-sm">Choose from professionally designed templates for weddings, birthdays, and more. Easily switch styles and colors.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaRocket className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Export Capabilities</h4>
            <p className="text-[#7c6a4d] text-sm">Export your invitations as high-quality PNG images or PDFs, ready for printing or sharing.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaGlobe className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Responsive Design</h4>
            <p className="text-[#7c6a4d] text-sm">Create and edit invitations on any device. Our responsive design works perfectly on mobile and desktop.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaEye className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Instant Preview</h4>
            <p className="text-[#7c6a4d] text-sm">See your changes live as you edit. Instantly preview your invitation before saving or sharing.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border border-[#ede6d6]">
            <FaLock className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Secure & Reliable</h4>
            <p className="text-[#7c6a4d] text-sm">Your data is protected with industry-standard security and privacy best practices.</p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2d2212] text-center mb-2">Get in Touch</h2>
        <p className="text-[#7c6a4d] text-center mb-10 max-w-2xl mx-auto">Have questions, feedback, or need assistance? We’re here to help you create amazing invitations and make your events memorable.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 border border-[#ede6d6] flex flex-col items-center text-center">
            <FaEnvelope className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Email Support</h4>
            <p className="text-[#7c6a4d] text-sm">Get in touch via email for quick answers or general inquiries.</p>
            <a href="mailto:support@inviteeasy.com" className="mt-2 text-[#b49b6c] underline">Send Email</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-[#ede6d6] flex flex-col items-center text-center">
            <FaComments className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Live Chat</h4>
            <p className="text-[#7c6a4d] text-sm">Chat with our support team during business hours for instant help.</p>
            <a href="#" className="mt-2 text-[#b49b6c] underline">Start Chat</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-[#ede6d6] flex flex-col items-center text-center">
            <FaBook className="text-2xl mb-2 text-[#b49b6c]" />
            <h4 className="text-base font-serif text-[#2d2212] mb-1">Documentation</h4>
            <p className="text-[#7c6a4d] text-sm">Browse our comprehensive help guides and documentation.</p>
            <a href="#" className="mt-2 text-[#b49b6c] underline">View Docs</a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#2d2212] mb-2">Ready to Create Beautiful Invitations?</h2>
          <p className="text-[#7c6a4d] mb-6">Join thousands of users who trust InviteEasy for their special occasions. Start creating your perfect invitation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/templates" className="px-6 py-3 bg-[#b49b6c] text-white font-medium rounded-lg shadow hover:bg-[#a68a5b] transition text-base flex items-center gap-2 justify-center"><FaPalette /> Browse Templates</Link>
            <Link href="/about" className="px-6 py-3 border-2 border-[#b49b6c] text-[#b49b6c] font-medium rounded-lg hover:bg-[#b49b6c]/10 transition text-base flex items-center gap-2 justify-center"><FaBook /> Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
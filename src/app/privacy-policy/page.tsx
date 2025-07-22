"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF0] text-[#095764] font-sans">
      <Navigation />
      <main className="max-w-3xl mx-auto py-16 px-4 bg-[#FFFCF0] text-[#095764]">
        <div className="p-0">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-left border-b-2 border-[#F4EBD0] pb-4 text-[#095764]">Privacy Policy</h1>
          <div className="mb-8 text-base md:text-lg text-left text-[#7A7A7A]">
            At InviteEasy, your privacy is our priority. We are committed to protecting your data and being transparent about how we use it.
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li><span className="font-semibold">Account Information:</span> Email address, password (encrypted), and profile details you provide when signing up or contacting us.</li>
              <li><span className="font-semibold">Invitation Content:</span> All text, images, and design elements you add to your invitations are stored securely so you can edit, save, or export them later.</li>
              <li><span className="font-semibold">Uploaded Images:</span> Any images or media files you upload (e.g., personal photos, logos) are stored securely using trusted cloud services.</li>
              <li><span className="font-semibold">Device & Usage Data:</span> We collect anonymized data such as page views, browser/device type, session duration, and click activity to improve our platform. We may use analytics tools like Google Analytics.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">2. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>Enable invitation editing, saving, and exporting (PDF/PNG/MP4)</li>
              <li>Personalize your experience and remember your settings (e.g., language, recent projects)</li>
              <li>Improve site performance, detect bugs, and analyze user behavior</li>
              <li>Send support emails or service updates (only if necessary)</li>
              <li>Ensure platform safety, prevent abuse, and maintain integrity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">3. Data Sharing & Disclosure</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li><span className="font-semibold">Service Providers:</span> We work with trusted third-party providers (like AWS, Cloudinary, and analytics services) to store images, monitor performance, and deliver features. These providers only access data necessary for their functions and are under confidentiality agreements.</li>
              <li><span className="font-semibold">Legal Compliance:</span> We may disclose your information when required to do so by law, regulation, or court order.</li>
              <li><span className="font-semibold">Business Transfers:</span> If our business is acquired or merged, user data may be transferred as part of that transaction, following applicable privacy regulations.</li>
              <li className="text-[#E57373] font-semibold">We do <span className="underline">not</span> sell, trade, or rent your personal information to third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">4. Data Security</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>All data is encrypted in transit (HTTPS) and stored securely with reputable cloud platforms</li>
              <li>Access controls and monitoring to prevent unauthorized use</li>
              <li>Regular security reviews and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">5. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>Access or request deletion of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Opt-out of email communication</li>
              <li>Contact us regarding any privacy-related concerns</li>
            </ul>
            <div className="mt-2 text-base text-[#7A7A7A]">To make a request, email us at <span className="font-semibold text-[#F18701]">support@inviteeasy.app</span></div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">6. Children’s Privacy</h2>
            <div className="text-base text-[#7A7A7A]">InviteEasy is designed for all age groups, but we do not knowingly collect personal information from children under 13 without verified parental consent. If we learn such data has been collected, it will be deleted promptly.</div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">7. Updates to This Policy</h2>
            <div className="text-base text-[#7A7A7A]">This Privacy Policy may be updated from time to time to reflect changes in technology, law, or our services. Updates will be posted on this page with a new Effective Date.</div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 mt-0 text-[#2F2F2F]">8. Contact Us</h2>
            <div className="text-base mb-2 text-[#7A7A7A]">If you have any questions, suggestions, or data-related requests, you can contact our support team:</div>
            <div className="font-semibold text-[#F18701] mb-4">support@inviteeasy.app</div>
          </section>

          <div className="mt-10">
            <Link href="/" className="text-[#095764] hover:underline font-medium text-base">&larr; Back to Home</Link>
          </div>
        </div>
      </main>
      {/* Footer removed as requested */}
    </div>
  );
} 
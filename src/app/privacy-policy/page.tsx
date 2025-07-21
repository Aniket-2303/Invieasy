"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f3efe7] text-black" style={{ fontFamily: 'Helvetica, sans-serif' }}>
      <Navigation />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-center flex items-center gap-2 justify-center">
          <span className="text-black text-4xl">Privacy Policy</span>
        </h1>
        <div className="space-y-8 text-lg">
          <section>
            <p>At InviteEasy, your privacy is important to us. This Privacy Policy outlines how we collect, use, share, and protect your information when you use our invitation creation platform.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">1. Information We Collect</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">User Email Address:</span> Collected during login, sign-up, or contact forms to identify users and provide account-related features.</li>
              <li><span className="font-semibold">Invitation Card Content:</span> All text, design elements, and customization data you enter while editing cards are saved to ensure you can access or export them later.</li>
              <li><span className="font-semibold">Uploaded Images:</span> Any images or media files (e.g., personal photos, logos) that you upload are stored securely using cloud services (e.g., AWS S3 or Cloudinary).</li>
              <li><span className="font-semibold">Device & Usage Data (Analytics):</span> We collect anonymized data such as page views, browser/device type, session duration, and click activity to understand how users interact with the platform. We may use tools like Google Analytics for this.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">2. How We Use Your Data</h2>
            <ul className="space-y-2">
              <li>Enable invitation editing, saving, and exporting (PDF/PNG/MP4)</li>
              <li>Personalize your experience and remember settings (e.g., language)</li>
              <li>Improve site performance, detect bugs, and analyze user behavior</li>
              <li>Send support emails or service updates (only if necessary)</li>
              <li>Ensure platform safety and integrity</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">3. Data Sharing & Disclosure</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">Service Providers:</span> We work with trusted third-party providers (like AWS, Cloudinary, and analytics services) to store images, monitor performance, and deliver key features. These providers only access data necessary for their functions and are under confidentiality agreements.</li>
              <li><span className="font-semibold">Legal Compliance:</span> We may disclose your information when required to do so by law, regulation, or court order.</li>
              <li><span className="font-semibold">Business Transfers:</span> If our business is acquired or merged, user data may be transferred as part of that transaction, following applicable privacy regulations.</li>
              <li className="text-red-600 font-semibold">❌ We do not sell, trade, or rent your personal information to third parties.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">4. Data Security</h2>
            <ul className="space-y-2">
              <li>HTTPS encryption for all data transfer</li>
              <li>Secure storage via reputable cloud platforms</li>
              <li>Access controls and monitoring to prevent unauthorized use</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">5. Your Rights</h2>
            <ul className="space-y-2">
              <li>Access or request deletion of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Opt-out of email communication</li>
              <li>Contact us regarding any privacy-related concerns</li>
            </ul>
            <p>To make a request, please email us at <span className="font-semibold">📧 support@inviteeasy.app</span></p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">6. Children’s Privacy</h2>
            <p>InviteEasy is designed to be accessible to all age groups. However, we do not knowingly collect personal information from children under 13 without verified parental consent. If we learn such data has been collected, it will be deleted promptly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">7. Updates to This Policy</h2>
            <p>This Privacy Policy may be updated from time to time to reflect changes in technology, law, or services. Updates will be posted on this page with a new Effective Date.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-2 mt-0 border-b border-gray-200 pb-2">8. Contact Us</h2>
            <p>If you have any questions, suggestions, or data-related requests, you can contact our support team:</p>
            <p className="font-semibold">📧 support@inviteeasy.app</p>
          </section>
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="text-brand-primary hover:underline font-medium text-lg">&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
} 
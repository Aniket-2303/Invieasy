"use client";
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from "@/hooks/useTranslation";

export default function PrivacyPolicyPage() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-[#FFFCF0] text-[#095764] font-sans">
      <Navigation />
      <main className="max-w-3xl mx-auto py-16 px-4 bg-[#FFFCF0] text-[#095764]">
        <div className="p-0">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-left border-b-2 border-[#F4EBD0] pb-4 text-[#095764]">{t('privacy_policy')}</h1>
          <div className="mb-8 text-base md:text-lg text-left text-[#7A7A7A]">
            {t('privacy_intro')}
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section1')}</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li><span className="font-semibold">{t('privacy_account_info')}</span> {t('privacy_account_info_desc')}</li>
              <li><span className="font-semibold">{t('privacy_invitation_content')}</span> {t('privacy_invitation_content_desc')}</li>
              <li><span className="font-semibold">{t('privacy_uploaded_images')}</span> {t('privacy_uploaded_images_desc')}</li>
              <li><span className="font-semibold">{t('privacy_device_usage')}</span> {t('privacy_device_usage_desc')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section2')}</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>{t('privacy_editing_saving')}</li>
              <li>{t('privacy_personalize')}</li>
              <li>{t('privacy_improve_site')}</li>
              <li>{t('privacy_support_emails')}</li>
              <li>{t('privacy_safety')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section3')}</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li><span className="font-semibold">{t('privacy_service_providers')}</span> {t('privacy_service_providers_desc')}</li>
              <li><span className="font-semibold">{t('privacy_legal_compliance')}</span> {t('privacy_legal_compliance_desc')}</li>
              <li><span className="font-semibold">{t('privacy_business_transfers')}</span> {t('privacy_business_transfers_desc')}</li>
              <li className="text-[#E57373] font-semibold">{t('privacy_no_sell')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section4')}</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>{t('privacy_encrypted')}</li>
              <li>{t('privacy_access_controls')}</li>
              <li>{t('privacy_security_reviews')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section5')}</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-[#7A7A7A]">
              <li>{t('privacy_rights_access')}</li>
              <li>{t('privacy_rights_correction')}</li>
              <li>{t('privacy_rights_optout')}</li>
              <li>{t('privacy_rights_contact')}</li>
            </ul>
            <div className="mt-2 text-base text-[#7A7A7A]">{t('privacy_rights_request')} <span className="font-semibold text-[#F18701]">support@inviteeasy.app</span></div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section6')}</h2>
            <div className="text-base text-[#7A7A7A]">{t('privacy_children')}</div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section7')}</h2>
            <div className="text-base text-[#7A7A7A]">{t('privacy_updates')}</div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold font-poppins mb-2 mt-0 text-[#2F2F2F]">{t('privacy_section8')}</h2>
            <div className="text-base mb-2 text-[#7A7A7A]">{t('privacy_contact')}</div>
            <div className="font-semibold text-[#F18701] mb-4">support@inviteeasy.app</div>
          </section>

          <div className="mt-10">
            <Link href="/" className="text-[#095764] hover:underline font-medium text-base">&larr; {t('back_to_home')}</Link>
          </div>
        </div>
      </main>
    </div>
  );
} 
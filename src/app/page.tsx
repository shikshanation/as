'use client'

import HeroGrid from '@/components/homepage/HeroGrid';
import FeaturedSection from '@/components/homepage/FeaturedSection';
import LatestNews from '@/components/homepage/LatestNews';
import EventHighlights from '@/components/homepage/EventHighlights';
import CommunityTV from '@/components/homepage/CommunityTV';
import PressRelease from '@/components/homepage/PressRelease';
import PartnerLogos from '@/components/homepage/PartnerLogos';
import WebinarBanner from '@/components/WebinarBanner';
import Modal from '@/components/ui/Modal';
import NewsletterModal from '@/components/NewsletterModal';
import MemberRegistrationForm from '@/components/MemberRegistrationForm';
import { useAppStore } from '@/store/useAppStore';

export default function Home() {
  const { modalContent } = useAppStore()

  return (
    <main className="min-h-screen">
      <HeroGrid />
      <section className="py-8 px-4">
        <WebinarBanner />
      </section>
      <FeaturedSection />
      <LatestNews />
      <PressRelease />
      <EventHighlights />
      <CommunityTV />
      {/* <NewsletterForm /> */}
      <PartnerLogos />

      {/* Modal */}
      <Modal>
        {modalContent === 'newsletter' && <NewsletterModal />}
        {modalContent === 'member-registration' && <MemberRegistrationForm />}
      </Modal>
    </main>
  );
}

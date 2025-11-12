import HeroGrid from '@/components/homepage/HeroGrid';
import FeaturedSection from '@/components/homepage/FeaturedSection';
import LatestNews from '@/components/homepage/LatestNews';
import EventHighlights from '@/components/homepage/EventHighlights';
import CommunityTV from '@/components/homepage/CommunityTV';
import NewsletterForm from '@/components/homepage/NewsletterForm';
import PartnerLogos from '@/components/homepage/PartnerLogos';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroGrid />
      <FeaturedSection />
      <LatestNews />
      <EventHighlights />
      <CommunityTV />
      <NewsletterForm />
      <PartnerLogos />
    </main>
  );
}

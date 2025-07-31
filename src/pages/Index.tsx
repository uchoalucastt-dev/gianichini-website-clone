import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import CasesSection from '@/components/CasesSection';
import ContentSection from '@/components/ContentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CasesSection />
      <ContentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

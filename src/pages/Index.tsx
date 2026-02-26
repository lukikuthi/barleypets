import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StructureSection from '@/components/StructureSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PlansSection from '@/components/PlansSection';
import BlogSection from '@/components/BlogSection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StructureSection />
      <TeamSection />
      <TestimonialsSection />
      <PlansSection />
      <BlogSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

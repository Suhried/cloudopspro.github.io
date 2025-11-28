import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Experience from './components/Experience';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Experience />
        <CTA />
      </div>
      <Footer />
    </>
  );
}

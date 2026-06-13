import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Teachers from '@/components/Teachers';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Stats />
      <Teachers />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}

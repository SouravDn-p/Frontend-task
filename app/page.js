import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BuildSection from "@/components/BuildSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <BuildSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

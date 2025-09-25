import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BuildSection from "@/components/BuildSection";
import TaskSection from "@/components/TaskSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <BuildSection />
      <TaskSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

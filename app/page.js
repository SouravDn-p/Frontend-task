import Hero from "../components/Hero";
import Features from "../components/Features";

import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BuildSection from "@/components/BuildSection";
import TaskSection from "@/components/TaskSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AssignJobSection from "@/components/AssignJobSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="w-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BuildSection />
      <AssignJobSection />
      <TaskSection />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </main>
  );
}

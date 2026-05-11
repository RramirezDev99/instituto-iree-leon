import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingDonate from "@/components/FloatingDonate";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Gallery />
      <Donate />
      <Contact />
      <Footer />
      <FloatingDonate />
    </main>
  );
}

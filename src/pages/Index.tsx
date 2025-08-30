import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="beneficios">
          <Benefits />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="contato">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

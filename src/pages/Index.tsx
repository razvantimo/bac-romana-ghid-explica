
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Author from "@/components/Author";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Content />
      <Benefits />
      <Testimonials />
      <Author />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;

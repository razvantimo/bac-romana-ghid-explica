
import React from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-navy">Ai nevoie de ajutor?</h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Dezvoltăm principala resursă educațională complementară sistemului de educație din România.
          </p>

          <ContactInfo />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <FAQ />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

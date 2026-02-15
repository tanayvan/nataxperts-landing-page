import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromotionBanner from "./components/PromotionBanner";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PromotionBanner />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

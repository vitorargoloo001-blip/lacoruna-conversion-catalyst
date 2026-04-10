import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

const About = lazy(() => import("@/components/sections/About"));
const Differentials = lazy(() => import("@/components/sections/Differentials"));
const Amenities = lazy(() => import("@/components/sections/Amenities"));
const FloorPlans = lazy(() => import("@/components/sections/FloorPlans"));
const Location = lazy(() => import("@/components/sections/Location"));
const Conditions = lazy(() => import("@/components/sections/Conditions"));
const TechnicalSheet = lazy(() => import("@/components/sections/TechnicalSheet"));
const ContactForm = lazy(() => import("@/components/sections/ContactForm"));
const Footer = lazy(() => import("@/components/layout/Footer"));
const WhatsAppButton = lazy(() => import("@/components/layout/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Differentials />
          <Amenities />
          <FloorPlans />
          <Location />
          <Conditions />
          <TechnicalSheet />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;

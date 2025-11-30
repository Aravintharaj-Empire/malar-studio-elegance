import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AppointmentForm from "@/components/AppointmentForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <AppointmentForm />
      
      {/* Footer */}
      <footer className="bg-rich-brown text-vanilla py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">MALAR Makeup Studio</h3>
          <p className="font-sans text-vanilla/80 mb-6">Beauty Crafted with Grace</p>
          <p className="font-sans text-sm text-vanilla/60">
            © 2025 MALAR Makeup Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

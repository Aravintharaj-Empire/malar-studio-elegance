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
      <footer className="bg-rich-brown text-vanilla py-8 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Brand */}
    <div className="text-center mb-6">
      <h3 className="font-serif text-2xl font-semibold mb-2">
        MALAR Makeup & Learning Space
      </h3>
      <p className="text-sm text-vanilla/70">
        Beauty Crafted with Grace
      </p>
    </div>

    {/* Contact Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

      {/* Instagram */}
      <div>
        <h4 className="font-serif text-lg font-semibold mb-2">Instagram</h4>
        <a
          href="https://instagram.com/malar.makeup_artistry"
          target="_blank"
          className="text-sm text-vanilla/80 hover:text-vanilla underline underline-offset-4 transition"
        >
          @malar.makeup_artistry
        </a>
      </div>

      {/* Phone */}
      <div>
        <h4 className="font-serif text-lg font-semibold mb-2">Call Us</h4>
        <a
          href="tel:+919791079827"
          className="text-sm text-vanilla/80 hover:text-vanilla transition"
        >
          +91 97910 79827
        </a>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-serif text-lg font-semibold mb-2">Location</h4>
        <a
          href="https://maps.app.goo.gl/iKNXdXifqyAjwRzn8"
          target="_blank"
          className="text-sm text-vanilla/80 hover:text-vanilla underline underline-offset-4 transition"
        >
          Open on Google Maps
        </a>
      </div>
    </div>

    {/* Divider */}
    <div className="my-6 border-t border-vanilla/10"></div>

    {/* Copyright */}
    <p className="text-center text-xs text-vanilla/50">
      © 2025 MALAR Makeup Studio. All rights reserved.
    </p>
  </div>
</footer>


    </main>
  );
};

export default Index;

"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-elementor-pink rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-yellow-500 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Elementor Badge */}
          <div className="inline-flex items-center bg-elementor-pink/20 border border-elementor-pink/30 rounded-full px-6 py-3 mb-8">
            <div className="w-8 h-8 bg-elementor-pink rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-white font-semibold font-poppins">
              Spesialis Website Elementor Pro - Mudah Dikelola Sendiri
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
            Website{" "}
            <span className="text-elementor-pink relative">
              Elementor
              <div className="absolute bottom-0 left-0 w-full h-2 bg-elementor-pink opacity-30 -skew-x-12"></div>
            </span>
            <br />
            yang Mudah Dikelola!
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-inter">
            Dapatkan website WordPress dengan{" "}
            <span className="text-brand-yellow-300 font-semibold">
              Elementor Pro
            </span>{" "}
            yang bisa Anda edit sendiri dengan mudah - tanpa coding, tanpa ribet!
          </p>

          {/* Key Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium font-inter text-sm">
              ✨ Drag & Drop Editor
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium font-inter text-sm">
              🚀 Loading Super Cepat
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium font-inter text-sm">
              📱 Mobile Responsive
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-medium font-inter text-sm">
              💰 Harga Terjangkau
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("#paket")}
              size="lg"
              className="btn-elementor text-lg px-8 py-4 font-poppins shadow-2xl"
            >
              Lihat Paket & Harga Elementor
            </Button>
            <Button
              onClick={() => scrollToSection("#portofolio")}
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue-800 text-lg px-8 py-4 font-poppins transition-all duration-300"
            >
              Lihat Demo Website
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100+
              </div>
              <div className="text-white/80 font-inter text-sm">
                Website Elementor Selesai
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                24 Jam
              </div>
              <div className="text-white/80 font-inter text-sm">Pengerjaan Express</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100%
              </div>
              <div className="text-white/80 font-inter text-sm">Mudah Dikelola</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                Garansi
              </div>
              <div className="text-white/80 font-inter text-sm">30 Hari Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#keunggulan")}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
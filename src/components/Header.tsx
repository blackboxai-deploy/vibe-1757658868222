"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Paket & Harga", href: "#paket" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Hubungi Kami", href: "#kontak" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              {/* Elementor-style Logo */}
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-elementor-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg lg:text-xl font-poppins">
                    E
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-yellow-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-brand-blue-900 font-bold text-xl lg:text-2xl font-poppins">
                  Elementor
                </span>
                <br />
                <span className="text-elementor-pink font-semibold text-sm lg:text-base font-poppins leading-none">
                  Website Pro
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-elementor-pink font-medium transition-colors duration-200 font-poppins relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elementor-pink transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={() => scrollToSection("#paket")}
              className="btn-elementor font-poppins"
            >
              Lihat Paket Elementor
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-elementor-pink focus:outline-none focus:text-elementor-pink p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-elementor-pink font-medium transition-colors duration-200 font-poppins"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection("#paket")}
                  className="w-full btn-elementor font-poppins"
                >
                  Lihat Paket Elementor
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
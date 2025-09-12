"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Toko Fashion Online",
      category: "e-commerce",
      description: "E-commerce Elementor dengan WooCommerce untuk brand fashion lokal. Fitur wishlist, quick view, dan sistem review terintegrasi.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf52e4b9-6878-4b2d-8ec7-2262e0404c6f.png",
      technologies: ["Elementor Pro", "WooCommerce", "WordPress", "Payment Gateway"],
      completionTime: "5 hari",
      client: "Fashion Brand Local",
      elementorFeatures: ["Product Builder", "Cart Widget", "Checkout Form"]
    },
    {
      id: 2,
      title: "Klinik Kesehatan",
      category: "medical",
      description: "Website Elementor untuk klinik dengan sistem booking appointment, profil dokter, dan informasi layanan yang mudah diupdate.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a82968f-d7b9-4b57-a360-68c539f41ed7.png",
      technologies: ["Elementor Pro", "Appointment Plugin", "WordPress", "Contact Forms"],
      completionTime: "4 hari",
      client: "Klinik Sehat Prima",
      elementorFeatures: ["Form Builder", "Popup Builder", "Theme Builder"]
    },
    {
      id: 3,
      title: "Digital Marketing Agency",
      category: "business",
      description: "Portfolio agency dengan Elementor Pro menampilkan case studies, team profiles, dan blog yang mudah dikelola client sendiri.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4c23a3d-11f8-4074-ad77-dc212d03a0a6.png",
      technologies: ["Elementor Pro", "Portfolio Plugin", "Blog System", "SEO"],
      completionTime: "6 hari",
      client: "Creative Digital Agency",
      elementorFeatures: ["Portfolio Widget", "Team Widget", "Blog Builder"]
    },
    {
      id: 4,
      title: "Restaurant Premium",
      category: "food",
      description: "Website restoran dengan Elementor featuring menu online, reservasi meja, dan galeri makanan yang menggugah selera.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3220a2a1-16e1-48a5-9a42-338aa62d6c79.png",
      technologies: ["Elementor Pro", "Reservation System", "Menu Builder", "Gallery"],
      completionTime: "4 hari",
      client: "Fine Dining Restaurant",
      elementorFeatures: ["Menu Widget", "Image Gallery", "Reservation Form"]
    },
    {
      id: 5,
      title: "Property Developer",
      category: "real-estate",
      description: "Showcase properti dengan Elementor Pro menampilkan unit tersedia, virtual tour, dan sistem inquiry yang terintegrasi WhatsApp.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aac97ada-94fd-41d4-a2c1-c779fb8a21e5.png",
      technologies: ["Elementor Pro", "Property Plugin", "WhatsApp API", "Virtual Tour"],
      completionTime: "7 hari",
      client: "Premium Property Developer",
      elementorFeatures: ["Custom Fields", "Search Widget", "WhatsApp Widget"]
    },
    {
      id: 6,
      title: "Tech Startup Landing",
      category: "technology",
      description: "Landing page startup dengan Elementor Pro untuk SaaS product, featuring pricing tables, testimonials, dan conversion-focused design.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5738242-bb7a-4688-84a5-892502e372f3.png",
      technologies: ["Elementor Pro", "Landing Page", "Pricing Tables", "Analytics"],
      completionTime: "3 hari",
      client: "Tech Startup SaaS",
      elementorFeatures: ["Pricing Table", "Testimonial Slider", "CTA Buttons"]
    }
  ];

  const categories = [
    { key: "all", label: "Semua Portfolio" },
    { key: "e-commerce", label: "E-Commerce" },
    { key: "business", label: "Business" },
    { key: "medical", label: "Medical" },
    { key: "food", label: "Food & Beverage" },
    { key: "real-estate", label: "Real Estate" },
    { key: "technology", label: "Technology" }
  ];

  const filteredPortfolio = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-elementor-pink/10 border border-elementor-pink/20 rounded-full px-6 py-2 mb-6">
            <div className="w-6 h-6 bg-elementor-pink rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xs">🎨</span>
            </div>
            <span className="text-elementor-pink font-semibold font-poppins text-sm">
              Portfolio Website Elementor
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Hasil Karya Website Elementor
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Setiap website dibuat dengan{" "}
            <span className="text-elementor-pink font-semibold">
              Elementor Pro
            </span>{" "}
            dan diserahkan dengan training lengkap agar client bisa mengelola sendiri
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-poppins ${
                activeFilter === category.key
                  ? "bg-elementor-gradient text-white shadow-lg scale-105"
                  : "bg-brand-gray-100 text-brand-gray-500 hover:bg-elementor-pink hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <Card key={item.id} className="hover-lift overflow-hidden border-0 shadow-lg bg-white">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-elementor-gradient text-white px-3 py-1 rounded-full text-xs font-semibold font-poppins">
                    {item.completionTime}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-elementor-pink/90 text-white px-2 py-1 rounded text-xs font-bold font-poppins">
                    ELEMENTOR PRO
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Project Title & Client */}
                <div>
                  <h3 className="text-xl font-bold text-brand-blue-900 mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-sm text-elementor-pink font-semibold font-poppins">
                    {item.client}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-brand-gray-500 text-sm leading-relaxed font-inter">
                  {item.description}
                </p>

                {/* Elementor Features */}
                <div>
                  <p className="text-xs font-semibold text-brand-blue-900 mb-2 font-poppins uppercase tracking-wide">
                    Elementor Features Used:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.elementorFeatures.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-elementor-pink/10 text-elementor-pink px-2 py-1 rounded text-xs font-medium font-inter border border-elementor-pink/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-xs font-semibold text-brand-blue-900 mb-2 font-poppins uppercase tracking-wide">
                    Technology Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-brand-blue-800 text-white px-2 py-1 rounded text-xs font-medium font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-elementor-pink font-poppins">100%</div>
                    <div className="text-xs text-brand-gray-500 font-inter">Self-Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-elementor-pink font-poppins">95+</div>
                    <div className="text-xs text-brand-gray-500 font-inter">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-elementor-pink font-poppins">SEO</div>
                    <div className="text-xs text-brand-gray-500 font-inter">Optimized</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-elementor-gradient rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
              Siap Punya Website Elementor Seperti Ini?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-inter">
              Bergabunglah dengan client-client kami yang sudah merasakan kemudahan mengelola website Elementor sendiri
            </p>
            <button
              onClick={() => {
                const message = "Halo, saya tertarik dengan portfolio website Elementor yang saya lihat. Bisa konsultasi untuk website serupa?";
                const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-elementor-pink px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-yellow-300 hover:text-brand-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO",
      company: "Fashion Store Jakarta",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96c27ad2-6b02-4680-a399-3b477b9559ff.png",
      content: "Website Elementor kami sangat mudah dikelola! Saya bisa update produk dan konten sendiri tanpa harus selalu hubungi developer. ROI meningkat 200% dalam 3 bulan!",
      rating: 5,
      revenue_increase: "+200%",
      conversion_rate: "8.5%",
      website_type: "E-Commerce Elementor"
    },
    {
      id: 2,
      name: "Dr. Sarah Wijaya",
      position: "Medical Director",
      company: "Klinik Sehat Prima",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6227577-279d-4cb6-ae4a-926e155e0387.png",
      content: "Interface Elementor sangat user-friendly. Tim saya bisa langsung update jadwal dokter dan informasi layanan. Pasien online naik drastis sejak pakai website Elementor.",
      rating: 5,
      revenue_increase: "+150%",
      conversion_rate: "12.3%",
      website_type: "Medical Website"
    },
    {
      id: 3,
      name: "Rizky Pratama",
      position: "Founder",
      company: "Digital Marketing Agency",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20028d93-843c-4fc0-88fe-3a58edf49b12.png",
      content: "Sebagai agency, kami butuh website yang bisa kami customize sendiri. Elementor Pro memberikan fleksibilitas luar biasa. Client kami juga puas dengan hasilnya!",
      rating: 5,
      revenue_increase: "+300%",
      conversion_rate: "15.7%",
      website_type: "Agency Portfolio"
    },
    {
      id: 4,
      name: "Amanda Putri",
      position: "Business Owner",
      company: "Catering Premium",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/085b73aa-e2c2-4737-9ccd-a8c8a7a21815.png",
      content: "Training Elementor yang diberikan sangat lengkap. Sekarang saya bisa update menu, harga, dan gallery sendiri. Order online naik 400% berkat website yang menarik!",
      rating: 5,
      revenue_increase: "+400%",
      conversion_rate: "18.2%",
      website_type: "Business Website"
    },
    {
      id: 5,
      name: "Michael Chen",
      position: "Startup Founder",
      company: "Tech Startup",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e42f8dc0-81d4-414e-a849-34cde21fdca2.png",
      content: "Budget startup terbatas, tapi butuh website profesional. Elementor Website Pro memberikan solusi perfect - website bagus, bisa edit sendiri, harga terjangkau!",
      rating: 5,
      revenue_increase: "+250%",
      conversion_rate: "11.8%",
      website_type: "Startup Landing"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-brand-yellow-300 text-xl">★</span>
    ));
  };

  return (
    <section id="testimoni" className="py-20 bg-brand-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-elementor-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-yellow-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-elementor-pink/20 border border-elementor-pink/30 rounded-full px-6 py-2 mb-6">
            <div className="w-6 h-6 bg-elementor-pink rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xs">⭐</span>
            </div>
            <span className="text-white font-semibold font-poppins text-sm">
              Testimoni Client Elementor
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Kata Mereka yang Sudah Merasakan
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
            Ribuan client sudah merasakan{" "}
            <span className="text-elementor-pink font-semibold">
              kemudahan mengelola website Elementor
            </span>{" "}
            dan hasil bisnis yang meningkat drastis
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                {/* Client Image */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-elementor-pink">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Website Type Badge */}
                <div className="inline-block bg-elementor-pink/20 border border-elementor-pink/40 rounded-full px-4 py-1 mb-4">
                  <span className="text-elementor-pink font-semibold text-sm font-poppins">
                    {testimonials[currentTestimonial].website_type}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-inter italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-elementor-pink mb-1 font-poppins">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-white/80 font-inter">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-brand-yellow-300 font-semibold font-poppins">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>

                {/* Results */}
                <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow-300 mb-1 font-poppins">
                      {testimonials[currentTestimonial].revenue_increase}
                    </div>
                    <div className="text-white/80 text-sm font-inter">Revenue Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-yellow-300 mb-1 font-poppins">
                      {testimonials[currentTestimonial].conversion_rate}
                    </div>
                    <div className="text-white/80 text-sm font-inter">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center gap-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-elementor-pink scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100+
              </div>
              <div className="text-white/80 font-inter">Website Elementor Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                100%
              </div>
              <div className="text-white/80 font-inter">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                250%
              </div>
              <div className="text-white/80 font-inter">Avg. ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow-300 mb-2 font-poppins">
                24/7
              </div>
              <div className="text-white/80 font-inter">Elementor Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
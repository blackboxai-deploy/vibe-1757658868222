"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ElementorPackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "3.5 juta",
      originalPrice: "5 juta",
      period: "sekali bayar",
      description: "Perfect untuk bisnis kecil dan personal branding",
      popular: false,
      features: [
        "5 Halaman (Home, About, Services, Gallery, Contact)",
        "Elementor Pro License (1 tahun)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Social Media Links",
        "Google Maps Integration",
        "SSL Certificate",
        "30 Hari Support Gratis",
        "Tutorial Mengelola Website"
      ],
      includes: [
        "WordPress + Hosting 1 Tahun",
        "Domain .com/.id gratis",
        "Email bisnis 5 akun"
      ]
    },
    {
      name: "Business",
      price: "6.5 juta",
      originalPrice: "9 juta",
      period: "sekali bayar",
      description: "Ideal untuk bisnis menengah dengan fitur lengkap",
      popular: true,
      features: [
        "10 Halaman + Blog System",
        "Elementor Pro License (1 tahun)",
        "Premium Template Design",
        "Advanced SEO (Yoast Premium)",
        "WhatsApp Integration",
        "Live Chat Widget",
        "Google Analytics Setup",
        "Speed Optimization",
        "Backup Otomatis",
        "60 Hari Support Prioritas",
        "Training Video Lengkap"
      ],
      includes: [
        "WordPress + Hosting Premium 1 Tahun",
        "Domain gratis + Email unlimited",
        "CDN untuk loading cepat"
      ]
    },
    {
      name: "E-Commerce",
      price: "12 juta",
      originalPrice: "18 juta",
      period: "sekali bayar",
      description: "Solusi lengkap untuk toko online profesional",
      popular: false,
      features: [
        "Unlimited Halaman + WooCommerce",
        "Elementor Pro + WooCommerce Builder",
        "Payment Gateway (Midtrans/DOKU)",
        "Ongkir JNE/TIKI/POS otomatis",
        "Sistem Member & Point",
        "WhatsApp Order Integration",
        "Invoice & Receipt Otomatis",
        "Inventory Management",
        "Multi Currency Support",
        "90 Hari Support Premium",
        "Training Mengelola Toko Online"
      ],
      includes: [
        "WordPress + Hosting E-Commerce 1 Tahun",
        "Domain + Email + SSL Premium",
        "CDN + Security Premium"
      ]
    }
  ];

  const handleWhatsAppContact = (packageName: string) => {
    const message = `Halo, saya tertarik dengan paket ${packageName} untuk website Elementor. Bisa info lebih detail?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="paket" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-elementor-pink/10 border border-elementor-pink/20 rounded-full px-6 py-2 mb-6">
            <span className="text-elementor-pink font-semibold font-poppins text-sm">
              💰 Paket & Harga Terbaik
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Paket Website Elementor
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter mb-8">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk{" "}
            <span className="text-elementor-pink font-semibold">
              Elementor Pro License!
            </span>
          </p>

          {/* Promo Banner */}
          <div className="bg-brand-yellow-300 text-brand-blue-900 px-6 py-3 rounded-full inline-block mb-8 font-semibold font-poppins">
            🔥 Promo Akhir Tahun: Hemat hingga 40% - Berlaku sampai 31 Desember!
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 shadow-xl hover-lift ${
                pkg.popular ? 'ring-2 ring-elementor-pink scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-elementor-gradient text-white px-4 py-2 rounded-bl-lg font-semibold font-poppins text-sm">
                  PALING POPULER ⭐
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-blue-900 font-poppins mb-2">
                  {pkg.name}
                </CardTitle>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-sm text-brand-gray-500 line-through font-inter">
                      Rp {pkg.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                      HEMAT {Math.round(((parseFloat(pkg.originalPrice.replace(/[^\d]/g, '')) - parseFloat(pkg.price.replace(/[^\d]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-elementor-pink font-poppins">
                    Rp {pkg.price}
                  </div>
                  <div className="text-sm text-brand-gray-500 font-inter">
                    {pkg.period}
                  </div>
                </div>

                <p className="text-brand-gray-500 font-inter text-sm">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div>
                  <h4 className="text-sm font-semibold text-brand-blue-900 mb-3 font-poppins uppercase tracking-wide">
                    Fitur Utama:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                        <div className="w-5 h-5 bg-elementor-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white font-bold text-xs">✓</span>
                        </div>
                        <span className="text-brand-gray-500 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="bg-brand-gray-100 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-brand-blue-900 mb-2 font-poppins">
                    Yang Termasuk:
                  </h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((include, includeIndex) => (
                      <li key={includeIndex} className="flex items-center space-x-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-elementor-pink rounded-full"></div>
                        <span className="text-brand-gray-500 font-inter">{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppContact(pkg.name)}
                  className={`w-full ${
                    pkg.popular 
                      ? 'btn-elementor text-lg py-6' 
                      : 'btn-secondary hover:bg-elementor-pink hover:text-white hover:border-elementor-pink text-lg py-6'
                  } font-poppins`}
                >
                  {pkg.popular ? '🚀 Pilih Paket Ini' : 'Konsultasi Gratis'}
                </Button>

                <p className="text-center text-xs text-brand-gray-500 font-inter">
                  💬 Konsultasi gratis via WhatsApp • ⚡ Mulai dalam 24 jam
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-brand-gray-100 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-elementor-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🛡️</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-6 font-poppins">
              100% Money Back Guarantee
            </h3>
            
            <p className="text-lg text-brand-gray-500 mb-8 font-inter leading-relaxed">
              Kami sangat percaya diri dengan kualitas website Elementor kami. Jika dalam 30 hari pertama Anda tidak puas, 
              kami akan mengembalikan 100% uang Anda tanpa pertanyaan yang rumit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-brand-blue-900 mb-2 font-poppins">Pengerjaan Cepat</h4>
                <p className="text-sm text-brand-gray-500 font-inter">Website selesai dalam 1-3 hari kerja</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-brand-blue-900 mb-2 font-poppins">Training Lengkap</h4>
                <p className="text-sm text-brand-gray-500 font-inter">Video tutorial dan panduan step-by-step</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-brand-blue-900 mb-2 font-poppins">Support Premium</h4>
                <p className="text-sm text-brand-gray-500 font-inter">Tim support siap membantu kapan saja</p>
              </div>
            </div>

            <Button
              onClick={() => handleWhatsAppContact('Konsultasi')}
              size="lg"
              className="btn-elementor text-lg px-8 py-4 font-poppins"
            >
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementorPackages;
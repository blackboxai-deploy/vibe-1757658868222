"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Website Elementor Starter",
      description: "Website sederhana dengan Elementor Pro untuk bisnis kecil atau personal branding yang ingin tampil profesional dengan mudah.",
      features: ["5 Halaman Utama", "Elementor Pro License", "Mobile Responsive", "Basic SEO Setup"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/527f23bc-5ca3-4c45-875f-6c48f9b24135.png",
      price: "Mulai Rp 3.5 juta"
    },
    {
      title: "Website Elementor Business",
      description: "Solusi lengkap untuk bisnis menengah dengan fitur advanced, sistem blog, dan integrasi WhatsApp untuk maksimalkan konversi.",
      features: ["10+ Halaman", "Blog System", "WhatsApp Integration", "Advanced SEO"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/870bec27-d753-4cf7-b477-add5bd3fc992.png",
      price: "Mulai Rp 6.5 juta"
    },
    {
      title: "Toko Online Elementor",
      description: "E-commerce lengkap dengan WooCommerce dan Elementor Pro Builder untuk toko online yang mudah dikelola dan menguntungkan.",
      features: ["WooCommerce Setup", "Payment Gateway", "Sistem Ongkir", "Member System"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e001ad3-7951-4ce8-8286-ca1c2f68fcfd.png",
      price: "Mulai Rp 12 juta"
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-elementor-pink/10 border border-elementor-pink/20 rounded-full px-6 py-2 mb-6">
            <div className="w-6 h-6 bg-elementor-pink rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="text-elementor-pink font-semibold font-poppins text-sm">
              Paket Layanan Website Elementor
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Paket Website Elementor
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Pilih paket yang sesuai kebutuhan bisnis Anda. Semua paket sudah termasuk{" "}
            <span className="text-elementor-pink font-semibold">
              Elementor Pro License
            </span>{" "}
            dan training cara mengelolanya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-lg overflow-hidden bg-white relative group"
            >
              {/* Elementor Pro Badge */}
              <div className="absolute top-4 right-4 bg-elementor-pink text-white px-3 py-1 rounded-full text-xs font-bold font-poppins z-10">
                ELEMENTOR PRO
              </div>
              
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-brand-blue-900 font-poppins">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-brand-gray-500 leading-relaxed font-inter">
                  {service.description}
                </CardDescription>
                <div className="text-lg font-bold text-elementor-pink font-poppins">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center space-x-3 text-sm text-brand-gray-500 font-inter"
                    >
                      <div className="w-5 h-5 bg-elementor-pink rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => {
                    const element = document.querySelector("#paket");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full bg-elementor-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-poppins"
                >
                  Lihat Detail Paket
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Elementor Section */}
        <div className="bg-brand-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4 font-poppins">
              Mengapa Pilih Website Elementor?
            </h3>
            <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto font-inter">
              Platform website builder #1 di dunia dengan 10+ juta pengguna aktif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-elementor-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Drag & Drop
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Edit website dengan mudah tanpa coding sama sekali.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elementor-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Loading Cepat
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Optimasi khusus untuk performance dan SEO terbaik.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elementor-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Hemat Biaya
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Tidak perlu bayar developer lagi untuk update konten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-elementor-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-brand-blue-900 mb-2 font-poppins">
                Training Lengkap
              </h4>
              <p className="text-brand-gray-500 text-sm font-inter">
                Video tutorial dan panduan step-by-step disediakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
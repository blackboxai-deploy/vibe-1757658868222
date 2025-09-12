"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ElementorFeatures = () => {
  const features = [
    {
      title: "Drag & Drop Editor",
      subtitle: "Edit website sendiri tanpa coding!",
      description: "Interface Elementor yang user-friendly memungkinkan Anda mengubah konten, gambar, dan layout kapan saja dengan mudah.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbd987a9-b276-4074-a3a0-86c7e9761fc8.png",
      icon: "🎨",
      benefits: ["Visual Editor yang Intuitif", "Real-time Preview", "No Coding Required", "Save & Publish Instant"]
    },
    {
      title: "Loading Super Cepat",
      subtitle: "Website cepat = pengunjung betah + SEO bagus",
      description: "Optimasi khusus Elementor dengan teknik caching dan kompresi untuk memastikan website loading di bawah 3 detik.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d847c93-cd78-4b3c-a8d8-22f12ea63246.png",
      icon: "⚡",
      benefits: ["GTMetrix Score A", "Page Speed 95+", "Optimasi Gambar Auto", "CDN Ready"]
    },
    {
      title: "Mobile Responsive",
      subtitle: "Tampil sempurna di semua perangkat",
      description: "Setiap template Elementor kami sudah dioptimalkan untuk tampil perfect di desktop, tablet, dan smartphone.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c0b054b-589d-44a4-880c-54f6b15025c4.png",
      icon: "📱",
      benefits: ["Mobile-First Design", "Touch-Friendly", "Auto Adapt Layout", "Cross-Browser Compatible"]
    },
    {
      title: "SEO & Google Ready",
      subtitle: "Website yang mudah ditemukan di Google",
      description: "Setup SEO lengkap dengan plugin terbaik dan struktur kode yang Google-friendly untuk ranking optimal.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/938ed6bb-0179-43b1-a140-ab8e6f70492a.png",
      icon: "📈",
      benefits: ["Yoast SEO Premium", "Schema Markup", "Sitemap Auto", "Google Analytics"]
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-brand-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-elementor-pink/10 border border-elementor-pink/20 rounded-full px-6 py-2 mb-6">
            <div className="w-6 h-6 bg-elementor-pink rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="text-elementor-pink font-semibold font-poppins text-sm">
              Keunggulan Website Elementor
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Mengapa Memilih Elementor?
          </h2>
          <p className="text-xl text-brand-gray-500 max-w-3xl mx-auto leading-relaxed font-inter">
            Platform website builder terpopuler di dunia dengan{" "}
            <span className="text-elementor-pink font-semibold">
              10+ juta pengguna aktif
            </span>{" "}
            dan kemudahan penggunaan yang tak tertandingi
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Feature Image */}
              <div className="flex-1">
                <div className="relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Elementor Badge */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-elementor-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  {/* Pro Badge */}
                  <div className="absolute top-4 right-4 bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-full text-xs font-bold font-poppins">
                    ELEMENTOR PRO
                  </div>
                </div>
              </div>

              {/* Feature Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-elementor-pink font-semibold mb-4 font-poppins">
                    {feature.subtitle}
                  </p>
                  <p className="text-lg text-brand-gray-500 leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Benefits */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-elementor-pink">
                  <h4 className="text-lg font-semibold text-brand-blue-900 mb-4 font-poppins flex items-center">
                    <span className="w-6 h-6 bg-elementor-pink rounded-md flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">✓</span>
                    </span>
                    Yang Anda Dapatkan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-elementor-pink rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-brand-gray-500 font-inter">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      const element = document.querySelector("#paket");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-elementor-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-poppins"
                  >
                    Mulai Sekarang →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-elementor-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-poppins">
              Siap Punya Website Elementor Sendiri?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-inter">
              Bergabunglah dengan ribuan pemilik bisnis yang sudah merasakan kemudahan mengelola website dengan Elementor
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#paket");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-elementor-pink px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-yellow-300 hover:text-brand-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Lihat Paket & Harga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementorFeatures;
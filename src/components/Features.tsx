"use client";

const Features = () => {
  const features = [
    {
      title: "Drag & Drop Editor",
      subtitle: "Edit website sendiri tanpa coding!",
      description: "Interface Elementor yang user-friendly memungkinkan Anda mengubah konten, gambar, dan layout kapan saja dengan mudah seperti menyusun puzzle.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80c6bd7f-6875-437b-9743-c9b5665588e3.png",
      icon: "🎨"
    },
    {
      title: "Loading Super Cepat",
      subtitle: "Website cepat = pengunjung betah + SEO bagus",
      description: "Optimasi khusus Elementor dengan teknik caching dan kompresi untuk memastikan website loading di bawah 3 detik dan ranking Google yang baik.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/34a340e4-a9c1-43e9-98f4-4841bf68feb6.png",
      icon: "⚡"
    },
    {
      title: "Mobile Responsive",
      subtitle: "Tampil sempurna di semua perangkat",
      description: "Setiap template Elementor kami sudah dioptimalkan untuk tampil perfect di desktop, tablet, dan smartphone tanpa perlu setting tambahan.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a3deb12-1a88-4aaf-b2a4-0a50d893d20c.png",
      icon: "📱"
    },
    {
      title: "SEO & Google Ready",
      subtitle: "Website yang mudah ditemukan di Google",
      description: "Setup SEO lengkap dengan plugin Yoast Premium dan struktur kode yang Google-friendly untuk ranking optimal dan traffic organic maksimal.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c027c08-6d29-4552-8070-039d2a7aa7c9.png",
      icon: "📈"
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
              4 Keunggulan Utama Elementor
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-6 font-poppins">
            Mengapa Elementor?
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
                    {index === 0 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Visual Editor Intuitif</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Real-time Preview</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">No Coding Required</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Save &amp; Publish Instant</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">GTMetrix Score A</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Page Speed 95+</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Optimasi Gambar Auto</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">CDN Ready</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Mobile-First Design</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Touch-Friendly Interface</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Auto Adapt Layout</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Cross-Browser Compatible</span>
                        </div>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Yoast SEO Premium</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Schema Markup</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Sitemap Auto Generated</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-elementor-pink rounded-full"></div>
                          <span className="text-sm text-brand-gray-500 font-inter">Google Analytics Setup</span>
                        </div>
                      </>
                    )}
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
      </div>
    </section>
  );
};

export default Features;
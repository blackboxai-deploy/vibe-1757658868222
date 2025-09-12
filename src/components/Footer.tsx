"use client";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppContact = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-brand-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-elementor-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-elementor-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl font-poppins">E</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-yellow-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-white font-bold text-2xl font-poppins">Elementor</span>
                <br />
                <span className="text-elementor-pink font-semibold text-lg font-poppins leading-none">Website Pro</span>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6 font-inter">
              Spesialis pembuatan website WordPress dengan <span className="text-elementor-pink font-semibold">Elementor Pro</span> yang 
              mudah dikelola sendiri. Kami membantu bisnis Anda tampil profesional online tanpa ribet coding.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-elementor-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Konsultasi Gratis</p>
                  <p className="text-white/80 font-inter">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-elementor-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">💬</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">WhatsApp</p>
                  <button 
                    onClick={() => handleWhatsAppContact("Halo, saya tertarik dengan jasa website Elementor. Bisa konsultasi gratis?")}
                    className="text-elementor-pink hover:text-brand-yellow-300 transition-colors duration-200 font-inter"
                  >
                    Chat Langsung via WhatsApp
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-elementor-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✉️</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Email Support</p>
                  <p className="text-white/80 font-inter">hello@elementorwebsitepro.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-elementor-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div>
                  <p className="font-semibold font-poppins">Studio Kreatif</p>
                  <p className="text-white/80 font-inter">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins text-elementor-pink">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#beranda")}
                  className="text-white/80 hover:text-elementor-pink transition-colors duration-200 font-inter"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#keunggulan")}
                  className="text-white/80 hover:text-elementor-pink transition-colors duration-200 font-inter"
                >
                  Keunggulan Elementor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#layanan")}
                  className="text-white/80 hover:text-elementor-pink transition-colors duration-200 font-inter"
                >
                  Layanan Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#paket")}
                  className="text-white/80 hover:text-elementor-pink transition-colors duration-200 font-inter"
                >
                  Paket & Harga
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#testimoni")}
                  className="text-white/80 hover:text-elementor-pink transition-colors duration-200 font-inter"
                >
                  Testimoni Klien
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-poppins text-elementor-pink">
              Layanan Elementor
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 font-inter text-sm">Website Elementor Starter</li>
              <li className="text-white/80 font-inter text-sm">Website Elementor Business</li>
              <li className="text-white/80 font-inter text-sm">Toko Online WooCommerce</li>
              <li className="text-white/80 font-inter text-sm">Landing Page Converter</li>
              <li className="text-white/80 font-inter text-sm">Elementor Pro Training</li>
              <li className="text-white/80 font-inter text-sm">Website Maintenance</li>
            </ul>

            <div className="mt-6 p-4 bg-elementor-pink/20 rounded-lg border border-elementor-pink/30">
              <p className="text-sm text-white/90 font-inter mb-2">
                💡 <strong>Tips Gratis:</strong>
              </p>
              <p className="text-xs text-white/80 font-inter">
                Download panduan "10 Tips Optimasi Website Elementor" gratis via WhatsApp!
              </p>
              <button
                onClick={() => handleWhatsAppContact("Halo, saya mau download panduan 10 Tips Optimasi Website Elementor gratis")}
                className="text-brand-yellow-300 hover:text-brand-yellow-500 text-xs font-semibold mt-2 font-poppins"
              >
                Download Sekarang →
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-elementor-pink text-center lg:text-left">
                Ikuti Journey Elementor Kami
              </h3>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a
                  href="https://instagram.com/elementorwebsitepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-elementor-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">IG</span>
                </a>
                <a
                  href="https://linkedin.com/company/elementorwebsitepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-elementor-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">LI</span>
                </a>
                <a
                  href="https://facebook.com/elementorwebsitepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-elementor-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">FB</span>
                </a>
                <button
                  onClick={() => handleWhatsAppContact("Halo, saya tertarik dengan layanan Elementor Website Pro")}
                  className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold">WA</span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-bold mb-4 font-poppins text-elementor-pink">
                Siap Mulai Proyek Elementor?
              </h3>
              <p className="text-white/80 mb-4 font-inter">
                Konsultasi gratis untuk website impian Anda
              </p>
              <button
                onClick={() => handleWhatsAppContact("Halo, saya tertarik untuk konsultasi gratis tentang website Elementor untuk bisnis saya")}
                className="bg-elementor-gradient hover:bg-elementor-dark-pink text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
              >
                Konsultasi Gratis Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-white/60 text-sm font-inter">
              <p>&copy; {currentYear} Elementor Website Pro. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <button className="hover:text-elementor-pink transition-colors duration-200">
                  Kebijakan Privasi
                </button>
                <span className="hidden lg:inline">|</span>
                <button className="hover:text-elementor-pink transition-colors duration-200">
                  Syarat & Ketentuan
                </button>
                <span className="hidden lg:inline">|</span>
                <button className="hover:text-elementor-pink transition-colors duration-200">
                  FAQ Elementor
                </button>
              </div>
            </div>

            <div className="text-white/60 text-sm font-inter text-center lg:text-right">
              <p>Crafted with ❤️ using Elementor Pro</p>
              <p className="text-elementor-pink">🏆 Spesialis Website Elementor Terpercaya</p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-elementor-gradient rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <span className="text-white font-bold">↑</span>
        </button>

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => handleWhatsAppContact("Halo, saya tertarik dengan jasa website Elementor. Bisa bantu saya?")}
          className="fixed bottom-24 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
        >
          <span className="text-white font-bold text-lg">💬</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
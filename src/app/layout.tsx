import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Jasa Website Elementor Premium - Mudah Dikelola & Professional",
  description: "Dapatkan website WordPress dengan Elementor Pro yang mudah dikelola sendiri. Desain professional, loading cepat, SEO-friendly, dan hasil yang mengkonversi. Mulai dari Rp 3 juta!",
  keywords: "jasa website elementor, website wordpress elementor, elementor pro, website murah, website professional",
  authors: [{ name: "Elementor Website Services" }],
  creator: "Elementor Website Services",
  openGraph: {
    title: "Jasa Website Elementor Premium - Mudah Dikelola & Professional",
    description: "Website WordPress dengan Elementor Pro yang mudah dikelola sendiri. Desain professional, loading cepat, dan mengkonversi.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Elementor Premium",
    description: "Website WordPress Elementor Pro yang mudah dikelola dan professional",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#E91E63" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
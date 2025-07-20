import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import 'leaflet/dist/leaflet.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Nearby Events App",
  description: "تطبيق الأحداث القريبة باستخدام React وGoogle Maps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
        style={{
          fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

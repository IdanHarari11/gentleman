import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Rubik font which has excellent Hebrew support
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Gentleman Time - מועדון תכנים אקסלוסיבי",
  description: "מועדון תכנים אקסלוסיבי לגברים איכותיים",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-[#e2dfce]">
        {children}
      </body>
    </html>
  );
}

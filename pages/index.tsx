import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/common/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen p-10`}
    >
      <main>
        <Hero />
      </main>
    </div>
  );
}

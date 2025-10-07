import { Geist, Geist_Mono } from "next/font/google";
import { GlobalProps } from "@/interfaces";
import Hero from "@/components/common/Hero";
import Filter from "@/components/common/Filter";
import Listing from "@/components/common/Listing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC<GlobalProps> = ({ query, setQuery, filtered }) => {
  return (
    <div className={`${geistSans.className} font-sans min-h-screen bg-gray-50`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Hero />
        </div>
        <div className="py-4">
          <Filter />
        </div>
        <div className="pb-8">
          <Listing query={query} setQuery={setQuery} filtered={filtered} />
        </div>
      </main>
    </div>
  );
};

export default Home;

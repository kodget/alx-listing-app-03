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
  const x: string = "montain view";
  console.log(x.length);
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen p-10`}
    >
      <main>
        <Hero />
        <Filter />
        <Listing query={query} setQuery={setQuery} filtered={filtered} />
      </main>
    </div>
  );
};

export default Home;

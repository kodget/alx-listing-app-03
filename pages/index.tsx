import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/common/Hero";
import Filter from "@/components/common/Filter";
import Listing from "@/components/common/Listing";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { PropertyProps } from "@/interfaces";
import api from "@/lib/axios";
import "@/lib/mockApi"; // VERY IMPORTANT - enables mock API

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch properties from API on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter properties based on search query
  const filtered: PropertyProps[] = properties.filter((item: PropertyProps) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout query={query} setQuery={setQuery} filtered={filtered}>
      <div
        className={`${geistSans.className} font-sans min-h-screen bg-gray-50`}
      >
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <Hero />
          </div>
          <div className="py-4">
            <Filter />
          </div>
          <div className="pb-8">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
                  <p className="text-gray-600">Loading properties...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <p className="text-red-600 mb-2">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : (
              <Listing query={query} setQuery={setQuery} filtered={filtered} />
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;

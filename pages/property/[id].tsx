import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { PropertyProps } from "@/interfaces";
import api from "@/lib/axios";
import "@/lib/mockApi"; // VERY IMPORTANT - enables mock API

interface Review {
  name: string;
  rating: number;
  avatar: string;
  comment: string;
}

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [query, setQuery] = useState("");
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch property details and reviews from API
  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id || typeof id !== "string") return;

      try {
        setLoading(true);
        setError(null);

        // Fetch property details
        const propertyResponse = await api.get(
          `/properties/${encodeURIComponent(id)}`
        );
        setProperty(propertyResponse.data);

        // Fetch reviews for this property
        const reviewsResponse = await api.get(
          `/properties/${encodeURIComponent(id)}/reviews`
        );
        setReviews(reviewsResponse.data);
      } catch (err) {
        console.error("Error fetching property data:", err);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <Layout query={query} setQuery={setQuery} filtered={[]}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state
  if (error) {
    return (
      <Layout query={query} setQuery={setQuery} filtered={[]}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 mb-2">{error}</p>
            <button
              onClick={() => router.reload()}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Retry
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Property not found state
  if (!property) {
    return (
      <Layout query={query} setQuery={setQuery} filtered={[]}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Property not found
            </h1>
            <p className="text-gray-600">
              The property you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 text-blue-600 hover:text-blue-800 underline"
            >
              Back to Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Success state - display property details
  return (
    <Layout query={query} setQuery={setQuery} filtered={[]}>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <PropertyDetail property={property} />
            <ReviewSection reviews={reviews} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <BookingSection property={property} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

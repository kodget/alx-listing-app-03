import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [query, setQuery] = useState("");
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      avatar: "/assets/avatar1.jpg",
      comment: "Amazing property with stunning views! The host was very responsive and the place was exactly as described."
    },
    {
      name: "Mike Chen",
      rating: 4,
      avatar: "/assets/avatar2.jpg",
      comment: "Great location and clean property. Everything we needed was provided. Highly recommend!"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      avatar: "/assets/avatar3.jpg",
      comment: "Perfect stay! Beautiful property and excellent host communication. Will definitely book again."
    }
  ];

  if (!property) {
    return (
      <Layout query={query} setQuery={setQuery} filtered={[]}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Property not found</h1>
            <p className="text-gray-600">The property you're looking for doesn't exist.</p>
          </div>
        </div>
      </Layout>
    );
  }

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
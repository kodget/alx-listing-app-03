import api from "./axios";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

// Mock API adapter function
export const mockApiAdapter = (config) => {
  const { url, method, data } = config;

  // GET /properties - Get all properties
  if (method === "get" && url === "/properties") {
    return {
      ...config,
      adapter: async () => ({
        data: PROPERTYLISTINGSAMPLE,
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      }),
    };
  }

  // GET /properties/:name - Get a specific property by name
  if (
    method === "get" &&
    url.startsWith("/properties/") &&
    !url.endsWith("/reviews")
  ) {
    const name = decodeURIComponent(url.split("/")[2]);
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === name);
    return {
      ...config,
      adapter: async () => ({
        data: property || null,
        status: property ? 200 : 404,
        statusText: property ? "OK" : "Not Found",
        headers: {},
        config,
      }),
    };
  }

  // GET /properties/:name/reviews - Get reviews for a specific property
  if (
    method === "get" &&
    url.startsWith("/properties/") &&
    url.endsWith("/reviews")
  ) {
    const name = decodeURIComponent(url.split("/")[2]);
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === name);

    // Mock reviews data (matching the structure in [id].tsx)
    const mockReviews = [
      {
        name: "Sarah Johnson",
        rating: 5,
        avatar: "/assets/avatar1.jpg",
        comment:
          "Amazing property with stunning views! The host was very responsive and the place was exactly as described.",
      },
      {
        name: "Mike Chen",
        rating: 4,
        avatar: "/assets/avatar2.jpg",
        comment:
          "Great location and clean property. Everything we needed was provided. Highly recommend!",
      },
      {
        name: "Emma Wilson",
        rating: 5,
        avatar: "/assets/avatar3.jpg",
        comment:
          "Perfect stay! Beautiful property and excellent host communication. Will definitely book again.",
      },
    ];

    return {
      ...config,
      adapter: async () => ({
        data: property ? mockReviews : [],
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      }),
    };
  }

  // POST /bookings - Create a new booking
  if (method === "post" && url === "/bookings") {
    const bookingData = JSON.parse(data);

    console.log("Saved booking (mock):", bookingData);

    return {
      ...config,
      adapter: async () => ({
        data: {
          success: true,
          message: "Booking created successfully",
          booking: bookingData,
        },
        status: 200,
        statusText: "OK",
        headers: {},
        config,
      }),
    };
  }

  // Return config unchanged if no mock matches
  return config;
};

// Setup mock interceptor
api.interceptors.request.use(mockApiAdapter);

export default api;

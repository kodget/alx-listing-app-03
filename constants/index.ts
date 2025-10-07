import { PropertyProps } from "@/interfaces";

// Property listings sample data
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["🏖️ Beachfront", "🏊 Pool", "🚗 Free Parking"],
    price: 320,
    offers: {
      bed: "3 beds",
      shower: "3 baths",
      occupants: "4-6 guests",
    },
    image: "2",
    discount: "",
    description: "Stunning beachfront villa with panoramic ocean views. Perfect for families or groups seeking luxury and relaxation by the sea.",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["🏔️ Mountain View", "🔥 Fireplace", "🔑 Self Check-in"],
    price: 180,
    offers: {
      bed: "4 beds",
      shower: "2 baths",
      occupants: "5-7 guests",
    },
    image: "3",
    discount: "30",
    description: "Cozy mountain chalet with breathtaking alpine views. Features a warm fireplace and easy self check-in for a perfect ski getaway.",
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["🌵 Desert View", "🐕 Pet Friendly", "🔑 Self Check-in"],
    price: 150,
    offers: {
      bed: "2 beds",
      shower: "1 bath",
      occupants: "2-3 guests",
    },
    image: "4",
    discount: "",
    description: "Peaceful desert oasis with stunning cactus garden views. Pet-friendly retreat perfect for couples seeking tranquility in Palm Springs.",
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["🏙️ City View", "📶 Free WiFi", "🕐 24h Check-in"],
    price: 450,
    offers: {
      bed: "2 beds",
      shower: "2 baths",
      occupants: "2-4 guests",
    },
    image: "5",
    discount: "15",
    description: "Sophisticated penthouse offering spectacular city skyline views. Modern amenities with 24-hour access in the heart of Manhattan.",
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["🏞️ Riverside", "⛵ Private Dock", "🛶 Free Kayaks"],
    price: 280,
    offers: {
      bed: "3 beds",
      shower: "2 baths",
      occupants: "4-6 guests",
    },
    image: "5 (1)",
    discount: "20",
    description: "Charming riverside cabin with private dock and complimentary kayaks. Ideal for adventure seekers in scenic Queenstown.",
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["🏖️ Beachfront", "🏊 Private Pool", "👨‍🍳 Chef Service"],
    price: 500,
    offers: {
      bed: "5 beds",
      shower: "4 baths",
      occupants: "8-10 guests",
    },
    image: "2",
    discount: "",
    description: "Luxurious beachfront villa with private pool and dedicated chef service. Ultimate tropical paradise for large groups in Bali.",
  },
  {
    name: "Luxury Urban Loft",
    address: {
      state: "Manhattan",
      city: "New York",
      country: "USA",
    },
    rating: 4.88,
    category: ["🏙️ City Center", "📶 Free WiFi", "🚇 Metro Access"],
    price: 380,
    offers: {
      bed: "2 beds",
      shower: "2 baths",
      occupants: "3-4 guests",
    },
    image: "container",
    discount: "25",
    description: "Sleek urban loft in prime Manhattan location with excellent metro connectivity. Modern design meets city convenience.",
  },
  {
    name: "Countryside Manor",
    address: {
      state: "Tuscany",
      city: "Florence",
      country: "Italy",
    },
    rating: 4.76,
    category: ["🌾 Countryside", "🍷 Wine Cellar", "🔥 Fireplace"],
    price: 290,
    offers: {
      bed: "4 beds",
      shower: "3 baths",
      occupants: "6-8 guests",
    },
    image: "2",
    discount: "15",
    description: "Elegant countryside manor surrounded by rolling hills and vineyards. Features wine cellar and cozy fireplace in historic Tuscany.",
  }
];

// API endpoints
export const API_BASE_URL = "https://api.example.com";

// Routes
export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
};

// Default values
export const DEFAULT_PAGE_SIZE = 10;

// Property amenity icons
export const AMENITY_ICONS = {
  bed: "🛏️",
  shower: "🚿",
  occupants: "👥",
  wifi: "📶",
  parking: "🚗",
  pool: "🏊",
  fireplace: "🔥",
  mountain: "🏔️",
  beach: "🏖️",
  city: "🏙️",
  pet: "🐕",
  checkin: "🔑",
};

// Image fallback
export const IMAGE_FALLBACK = "/assets/image 2.png";

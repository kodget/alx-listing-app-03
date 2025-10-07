// interfaces/index.ts

// Placeholder for HomeIcon props
export interface GlobalProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filtered: PropertyProps[];
}

export interface LayoutProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filtered: PropertyProps[];
  children: React.ReactNode;
}

export interface HomeIconProps {
  className?: string;
  src?: string;
  alt?: string;
  icon?: string;
}

// Placeholder for Card component props
export interface CardProps {
  title?: string;
  content?: string;
}

// Placeholder for Button component props
export interface ButtonProps {
  className?: string;
  label?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  icon?: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}
export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
}
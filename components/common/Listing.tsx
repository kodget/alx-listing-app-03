import { GlobalProps, PropertyProps } from "@/interfaces";
import PropertyCard from "./PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
const Listing: React.FC<GlobalProps> = ({ query, setQuery, filtered }) => {
  return (
    <>
      <h1 className="mb-4">This is the listing component</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[600px]:grid-cols-1 gap-4">
        {filtered.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </div>
    </>
  );
};

export default Listing;

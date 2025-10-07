import { GlobalProps } from "@/interfaces";
import PropertyCard from "./PropertyCard";

const Listing: React.FC<GlobalProps> = ({ query, filtered }) => {
  return (
    <section className="py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {query ? `Search results for "${query}"` : "Featured Properties"}
        </h2>
        <p className="text-gray-600">
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
        </p>
      </div>
      
      {filtered.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.name} {...property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No properties found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search criteria or browse all properties.
          </p>
        </div>
      )}
    </section>
  );
};

export default Listing;

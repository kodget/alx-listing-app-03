import { PropertyProps } from "@/interfaces";
import { AMENITY_ICONS } from "@/constants";
import FallbackImage from "./FallbackImage";
import Link from "next/link";

const getImagePath = (image: string): string => {
  const imageMap: { [key: string]: string } = {
    "2": "/assets/image 2.jpg",
    "3": "/assets/image 3.png",
    "4": "/assets/image 4.png",
    "5": "/assets/image 5.png",
    "5 (1)": "/assets/image 5 (1).png",
    "container": "/assets/Image container.png",
  };
  return imageMap[image] || "/assets/image 2.jpg";
};

const PropertyCard: React.FC<PropertyProps> = ({
  image,
  category,
  name: fullname,
  address,
  rating,
  offers,
  price,
  discount,
}) => {
  const discountedPrice = discount ? price - parseInt(discount) : price;
  const hasDiscount = discount && parseInt(discount) > 0;

  return (
    <Link href={`/property/${encodeURIComponent(fullname)}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-64 w-full">
          <FallbackImage
            src={getImagePath(image)}
            alt={fullname}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {hasDiscount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              -{discount}%
            </div>
          )}
          <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
            ⭐ {rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {Array.isArray(category) &&
              category.slice(0, 2).map((cat, index) => (
                <span
                  className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium"
                  key={index}
                >
                  {cat}
                </span>
              ))}
            {category.length > 2 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                +{category.length - 2} more
              </span>
            )}
          </div>

          {/* Property Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
            {fullname}
          </h3>

          {/* Address */}
          <p className="text-gray-600 text-sm mb-3">
            {address.city}, {address.state}, {address.country}
          </p>

          {/* Amenities */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              {AMENITY_ICONS.bed} {offers.bed}
            </span>
            <span className="flex items-center gap-1">
              {AMENITY_ICONS.shower} {offers.shower}
            </span>
            <span className="flex items-center gap-1">
              {AMENITY_ICONS.occupants} {offers.occupants}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {hasDiscount ? (
                <>
                  <span className="text-xl font-bold text-gray-900">
                    ${discountedPrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${price}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-gray-900">
                  ${price}
                </span>
              )}
              <span className="text-sm text-gray-600">/night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

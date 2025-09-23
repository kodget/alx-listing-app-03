import Image from "next/image";
import { PropertyProps } from "@/interfaces";
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
  return (
    <div className="flex flex-col w-full items-stretch content-center mb-2 shadow-lg shadow-[#fff]">
      <div className="rounded-xl">
        <Image
          src={`/assets/image-${image}.jpg`}
          alt="image_1"
          width={380}
          height={255}
        />
      </div>
      <div>
        <div className="flex flex-row gap-2 mb-2">
          {Array.isArray(category) &&
            category.map((cat, index) => (
              <span
                className="text-sm px-1 py-2 rounded-xl bg-[#F9F9F9] text-[#161117]"
                key={index}
              >
                {cat}
              </span>
            ))}
        </div>
        <div>
          <div>
            <div>
              <p className="bg-blue-900">{fullname}</p>
              <p>
                {address.state}, {address.city}, {address.country}
              </p>
            </div>
            <div>{rating}</div>
            <div>
              <p>
                {offers.bed} {offers.shower} {offers.occupants}
              </p>
              <span>{!discount ? price : price - discount}/n</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;

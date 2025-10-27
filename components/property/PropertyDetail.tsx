import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import FallbackImage from "../common/FallbackImage";
import { AMENITY_ICONS } from "@/constants";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offers");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">⭐ {property.rating}</span>
          <span>{property.address.city}, {property.address.state}, {property.address.country}</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <FallbackImage
            src={`/assets/image ${property.image}.png`}
            alt={property.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {["offers", "host"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "offers" && "What we offer"}
                {tab === "host" && "About host"}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mb-8">
        {activeTab === "offers" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <p className="text-gray-600 mb-6">{property.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {property.category.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">{amenity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl mb-1">{AMENITY_ICONS.bed}</div>
                <div className="text-sm text-gray-600">{property.offers.bed}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">{AMENITY_ICONS.shower}</div>
                <div className="text-sm text-gray-600">{property.offers.shower}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">{AMENITY_ICONS.occupants}</div>
                <div className="text-sm text-gray-600">{property.offers.occupants}</div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "host" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">About the host</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h3 className="font-semibold">Property Host</h3>
                <p className="text-gray-600">Superhost · 5 years hosting</p>
              </div>
            </div>
            <p className="text-gray-600">
              Experienced host dedicated to providing exceptional stays. Local expert with great recommendations for your visit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
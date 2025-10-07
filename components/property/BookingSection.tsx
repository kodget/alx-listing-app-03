import { PropertyProps } from "@/interfaces";
import { useState } from "react";

const BookingSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const totalPayment = nights * property.price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${property.price}/night</h3>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-in</label>
        <input 
          type="date" 
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2 rounded-md" 
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Check-out</label>
        <input 
          type="date" 
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2 rounded-md" 
        />
      </div>

      {nights > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <div className="flex justify-between text-sm">
            <span>${property.price} × {nights} nights</span>
            <span>${totalPayment}</span>
          </div>
        </div>
      )}

      <div className="mt-4">
        <p className="text-lg font-semibold">
          Total payment: <strong>${nights > 0 ? totalPayment : property.price}</strong>
        </p>
      </div>

      <button 
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
        disabled={!checkIn || !checkOut || nights <= 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
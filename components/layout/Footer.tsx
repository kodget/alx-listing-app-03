import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-[#222222] text-[#cacaca] ">
      <div className="h-5 bg-[#34967C] w-full"></div>
      <div p-4 pt-0>
        <div className="grid max-[960px]:grid-cols-1 grid-cols-2 gap-4 max-[960]:gap-12 place-content-between text-neutral-100 p-6">
          <div>
            <Image
              src="/assets/alx-logo-2.svg"
              alt="alx_logo_2"
              width={48}
              height={48}
            />
            <div className="mt-4 w-full">
              <p className="text-base text-[#cacaca]">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to
                stay for any trip.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h5 className="mb-4 font-bold ">Explore</h5>
              <ul className="gap-4 font-light list-none">
                <li className="leading-relaxed">Apartments in Dubai</li>
                <li className="leading-relaxed">Hotels in New York</li>
                <li className="leading-relaxed">Villa in Spain</li>
                <li className="leading-relaxed">Mansion in Indonesia</li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-bold ">Company</h5>
              <ul className="gap-4 font-light list-none">
                <li className="leading-relaxed">About us</li>
                <li className="leading-relaxed">Blog</li>
                <li className="leading-relaxed">Career</li>
                <li className="leading-relaxed">Customers</li>
                <li className="leading-relaxed">Brand</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 font-bold ">Help</h5>
              <ul className="gap-4 font-light list-none">
                <li className="leading-relaxed">Support</li>
                <li className="leading-relaxed">Cancel booking</li>
                <li className="leading-relaxed">Refunds process</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="grid grid-cols-2 place-content-between">
          <div className="p-4">
            <p>
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details
              <a className="text-[#34967C]" href="#">
                &nbsp;here
              </a>
            </p>
          </div>
          <ul className="grid grid-cols-4 list-none gap-2 items-center">
            <li>Terms of service</li>
            <li>Policy service</li>
            <li>Cookies policy</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

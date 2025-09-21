import Image from "next/image";
import Search from "../common/Search";
// In components/layout/Header.tsx, create a functional component that renders the header content
// , including search bar, sign and sign up ,
// Types of accommodation (e.g. Rooms, Mansion, Countryside, etc.) and a logo.

const Header: React.FC = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-4 content-between">
        <div className="w-1/2">
          <Image
            src="/assets/alx-logo.svg"
            alt="alx_logo"
            width={48}
            height={48}
          />
        </div>
        <div className="col-span-2 w-full">
          <Search />
        </div>
        <div className="flex flex-row gap-2 w-60 justify-self-end">
          <button className="border border-solid p-2 bg-[#34967C] text-white text-lg rounded-xl">
            sign up
          </button>
          <button className="border border-solid px-2 py-0 bg-white text-black text-lg rounded-[8px]">
            log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

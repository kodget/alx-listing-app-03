import Image from "next/image";
import Search from "../common/Search";
import Button from "../common/Button";
import AccommocdationType from "../common/AccommodationType";

const Header: React.FC = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-4 place-content-between p-4">
        <div className="pl-4 self-center max-[600px]:hidden md:block lg:block xl:block">
          <Image
            src="/assets/alx-logo.svg"
            alt="alx_logo"
            width={48}
            height={48}
          />
        </div>
        <div className="col-span-2 max-[600px]:col-span-3 w-full">
          <Search />
        </div>
        <div className="flex flex-row gap-2 ww-full justify-self-end">
          <Button
            type="button"
            className="bg-[#34967C] border-1 border-grey-800 text-white p-4  rounded-full cursor-pointer"
            label="sign up"
            icon="profile.svg"
          />

          <Button
            type="button"
            className="bg-[#fff] border-1 border-grey-800 p-4 text-black rounded-full cursor-pointer"
            label="log in"
          />
        </div>
      </div>
      <AccommocdationType />
    </div>
  );
};

export default Header;

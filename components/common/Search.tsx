import Image from "next/image";
const Search: React.FC = () => {
  return (
    <div className="flex flex-column justify-between border border-solid border-neutral-200 px-8 py-4 rounded-full ">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <p className=" text-[15px] text-neutral-500 font-medium">Location</p>
          <p className="w-auto text-base text-neutral-300 font-extralight">
            search for destination
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-[15px] text-neutral-500 font-medium">Check in</p>
          <p className=" text-base text-neutral-300 font-extralight">
            Add date
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-[14px] text-neutral-500 font-medium">Check out</p>
          <p className=" text-base text-neutral-300 font-extralight">
            Add date
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-[15px] text-neutral-500 font-medium">People</p>
          <p className=" size-[0.75] text-neutral-300 font-extralight">
            Add guest
          </p>
        </div>
      </div>
      <div className="bg-[#FFA800] p-4 rounded-full">
        <Image
          src="assets/magnifer.svg"
          alt="seach_icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Search;

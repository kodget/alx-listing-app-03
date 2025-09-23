"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { GlobalProps } from "@/interfaces";

const Search: React.FC<GlobalProps> = ({ query, setQuery, filtered }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      setQuery(inputRef.current.value);
    }
  };
  return (
    <>
      <div className="flex flex-row gap-0 ">
        <input
          type="string"
          name="location"
          className="bg-grey-300 outline:none border-1 border-grey-90o text-black p-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 shadow-lg "
          value={query}
          placeholder="search for destination"
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button type="submit" onClick={handleClick}>
          <Image
            src="assets/magnifer.svg"
            alt="seach_icon"
            width={18}
            height={18}
            onClick={handleClick}
          />
        </button>
      </div>
    </>
  );
};

export default Search;

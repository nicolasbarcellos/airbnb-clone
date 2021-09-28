import Image from "next/image";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

type HeaderProps = {
  placeholder: string;
};

export default function Header({ placeholder }: HeaderProps): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="grid grid-cols-3  sticky top-0 z-50 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          placeholder={placeholder ?? "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-600 placeholder-gray-400"
          type="text"
        />
        <SearchIcon
          className="
          hidden md:inline-flex 
          h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      <div className="justify-end items-center flex space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="cursor-pointer flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5861"]}
            onChange={handleSelect}
          />
          <div className="border-b mb-4 flex items-center">
            <h2 className="text-lg pl-2 font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              min="1"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="outline-none text-red-400 text-lg w-12 pl-2"
              type="number"
            />
          </div>
          <div className="flex justify-around">
            <button
              onClick={() => setSearchInput("")}
              className="text-gray-500"
            >
              Cancel
            </button>
            <button onClick={handleSearch} className="text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

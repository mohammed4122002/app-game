import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-full flex relative group items-center gap-2 justify-between px-4 border border-input rounded-xl md:w-[40%] bg-main">
      <input
      className="py-2 text-base w-full bg-transparent text-white border-none outline-none ring-0 placeholder:text-gray-400"
      />
      <SearchIcon color="white" />
    </div>
  );
};

export default Search;

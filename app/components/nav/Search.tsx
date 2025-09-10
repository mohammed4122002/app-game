import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-full flex relative items-center gap-2 px-2 md:px-3 border border-input rounded-md md:w-[40%] text-amber-50">
      <SearchIcon className="size-4 text-amber-50 " />
      <Input placeholder="Search games..." className="bg-transparent border-0 shadow-none focus-visible:ring-0 px-0" />
    </div>
  );
};

export default Search;

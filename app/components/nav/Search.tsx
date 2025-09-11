import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-full md:w-[40%] relative flex items-center gap-2 px-3 md:px-4 rounded-xl text-amber-50 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 focus-within:border-white/20 shadow-sm">
      <SearchIcon className="size-5 text-amber-50/90" />
      <Input
        placeholder="Search games..."
        className="z-10 bg-transparent border-0 shadow-none focus-visible:ring-0 px-0 placeholder:text-amber-50/50 text-amber-50"
      />
      <span className="absolute inset-0 rounded-xl ring-0 focus-within:ring-1 focus-within:ring-white/30 transition-[box-shadow] duration-200" />
    </div>
  );
};

export default Search;

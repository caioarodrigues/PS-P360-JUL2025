import { createContext } from "react";

interface SearchContextData {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextData>({
  searchQuery: "",
  setSearchQuery: () => {},
});
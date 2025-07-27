import { createContext } from "react";

interface PagesContextData {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (page: number) => void;
  setPagesCount: (count: number) => void;
}

export const PagesContext = createContext<PagesContextData>({
  currentPage: 1,
  pagesCount: 1,
  setCurrentPage: () => {},
  setPagesCount: () => {},
});
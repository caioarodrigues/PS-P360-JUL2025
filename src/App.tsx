import { UsersContext } from "./context/UsersContext";
import type { IUser } from "./domain/entities/IUser";
import AppRoutes from "./routes";
import { users } from "@/db";
import { useState } from "react";
import { SearchContext } from "./context/SearchContext";
import { PagesContext } from "./context/PagesContext";

function App() {
  const [allUsers, setAlltUsers] = useState<IUser[]>(users);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesCount, setPagesCount] = useState<number>(0);

  return (
    <PagesContext.Provider value={{ currentPage, pagesCount, setCurrentPage, setPagesCount }}>
      <UsersContext.Provider
        value={{ users: allUsers, setUsers: setAlltUsers }}
      >
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <AppRoutes />
        </SearchContext.Provider>
      </UsersContext.Provider>
    </PagesContext.Provider>
  );
}

export default App;

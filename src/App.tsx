import { UsersContext } from "./context/UsersContext";
import type { IUser } from "./domain/entities/IUser";
import AppRoutes from "./routes";
import { users } from "@/db";
import { useState } from "react";
import { SearchContext } from "./context/SearchContext";

function App() {
  const [allUsers, setAlltUsers] = useState<IUser[]>(users);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <UsersContext.Provider value={{ users: allUsers, setUsers: setAlltUsers }}>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <AppRoutes />
      </SearchContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;

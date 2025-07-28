import { UsersContext } from "./context/UsersContext";
import type { IUser } from "./domain/entities/IUser";
import AppRoutes from "./routes";
import { useEffect, useState } from "react";
import { SearchContext } from "./context/SearchContext";
import { PagesContext } from "./context/PagesContext";
import { useRequests } from "@/hooks/useRequests";
import { endpoints } from "@/constants";

function App() {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const { listAllUsers } = useRequests(endpoints.get_all_users);
  useEffect(() => {
    const fetchData = async () => {
      const response = await listAllUsers();
      setAllUsers(response);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PagesContext.Provider
      value={{ currentPage, pagesCount, setCurrentPage, setPagesCount }}
    >
      <UsersContext.Provider value={{ users: allUsers, setUsers: setAllUsers }}>
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <AppRoutes />
        </SearchContext.Provider>
      </UsersContext.Provider>
    </PagesContext.Provider>
  );
}

export default App;

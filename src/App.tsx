import {
  UsersContext,
  CurrentSelectedUserContext,
} from "./context/UsersContext";
import type { IUser } from "./domain/entities/IUser";
import AppRoutes from "./routes";
import { users } from "@/db";
import { useState } from "react";

function App() {
  const [allUsers, setAlltUsers] = useState<IUser[]>(users);

  return (
    <UsersContext.Provider value={{ users: allUsers, setUsers: setAlltUsers }}>
      <AppRoutes />
    </UsersContext.Provider>
  );
}

export default App;

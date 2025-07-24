import { UsersContext } from "./context/UsersContext";
import AppRoutes from "./routes";
import { users } from "@/db";
import { useState } from "react";

function App() {
  const [allUsers, seAlltUsers] = useState(users);

  return (
    <UsersContext.Provider value={{ users: allUsers, setUsers: seAlltUsers }}>
      <AppRoutes />
    </UsersContext.Provider>
  );
}

export default App;

import { createContext } from "react";
import type { IUser } from "@/domain/entities/IUser";

interface UsersContextData {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

interface CurrentSelectedUsersData {
  currentSelectedUsers: IUser[];
  setCurrentSelectedUsers: (users: IUser[]) => void;
}

export const UsersContext = createContext<UsersContextData>({
  users: [],
  setUsers: () => {},
});

export const CurrentSelectedUsersContext =
  createContext<CurrentSelectedUsersData>({
    currentSelectedUsers: [],
    setCurrentSelectedUsers: () => {},
  });

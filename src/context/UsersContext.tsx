import { createContext } from "react";
import type { IUser } from "@/domain/entities/IUser";

interface UsersContextData {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

interface CurrentSelectedUsersData {
  currentSelectedUser: IUser | null;
  setCurrentSelectedUser: (user: IUser | null) => void;
  showUserDetails: boolean;
  setShowUserDetails: (value: boolean) => void;
}

export const UsersContext = createContext<UsersContextData>({
  users: [],
  setUsers: () => {},
});

export const CurrentSelectedUserContext =
  createContext<CurrentSelectedUsersData>({
    currentSelectedUser: null,
    setCurrentSelectedUser: () => {},
    showUserDetails: false,
    setShowUserDetails: () => {},
  });

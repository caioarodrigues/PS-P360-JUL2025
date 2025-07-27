import type { ListUserDTO } from "@/dtos/user/ListUserDTO";
import { useState } from "react";
import { limitUsersProfilePerPage } from "@/constants";
import type { IUser } from "@/domain/entities/IUser";

function useUsersPagination() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentListedUsers, setCurrentListedUsers] = useState<ListUserDTO[]>(
    []
  );

  const nextPage = (pagesCount: number) => {
    if (currentPageIndex < pagesCount) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const updateCurrentListedUsers = (users: ListUserDTO[]) => {
    if (users.length > limitUsersProfilePerPage) {
      console.error("Users list exceeds the limit");
      return;
    }

    return setCurrentListedUsers(users);
  };

  const showUserDetails = (userId: number, currentSelectedUsers: IUser[]) => {
    const user = currentSelectedUsers.find((user) => user.id === userId);

    console.log("showUserDetails", userId, user);
  };

  const hideUserDetails = () => {};

  return {
    currentPageIndex,
    currentListedUsers,
    nextPage,
    previousPage,
    updateCurrentListedUsers,
    showUserDetails,
    hideUserDetails,
  };
}

export default useUsersPagination;

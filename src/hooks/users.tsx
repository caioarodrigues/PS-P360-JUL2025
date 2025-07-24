import type { ListUserDTO } from "@/dtos/user/ListUserDTO";
import { useState } from "react";
import { limitUsersProfilePerPage } from "@/constants";

function useUsersPagination() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentListedUsers, setCurrentListedUsers] = useState<ListUserDTO[]>([]);

  const nextPage = (pagesCount: number) => {
    console.log("nextPage", currentPageIndex, pagesCount);
    if (currentPageIndex < pagesCount - 1) {
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
  }

  return {
    currentPageIndex,
    currentListedUsers,
    nextPage,
    previousPage,
    updateCurrentListedUsers,
  };
}

export default useUsersPagination;

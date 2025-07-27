import { Box, Button } from "@chakra-ui/react";
import UsersList from "../components/users-list";
import { useContext, useEffect } from "react";
import { PagesContext } from "@/context/PagesContext";
import { useNavigate } from "react-router-dom";
import { limitUsersProfilePerPage } from "@/constants";
import useUsersPagination from "@/hooks/users";
import { UsersContext } from "@/context/UsersContext";

function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PagesContext);
  const { users } = useContext(UsersContext);
  const { currentPageIndex, nextPage, previousPage } = useUsersPagination();
  const navigate = useNavigate();
  
  const mod = users.length % limitUsersProfilePerPage;
  const pagesCount =
    Math.floor(users.length / limitUsersProfilePerPage) + (mod > 0 ? 1 : 0) - 1;

  const nextPageHandler = (pagesCount: number) => {
    if (currentPageIndex >= pagesCount) return;

    nextPage(pagesCount);
    setCurrentPage(currentPageIndex + 1);
  };

  const previousPageHandler = () => {
    if (currentPageIndex <= 0) return;

    previousPage();
    setCurrentPage(currentPageIndex - 1);
  };

  useEffect(() => {
    if (currentPage <= 0) navigate("/");
    else navigate(`/?page=${currentPage}`);
  }, [currentPage, navigate]);

  return (
    <Box>
      <UsersList />
      <Box p="3" display="flex" justifyContent="end" gap="1">
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={previousPageHandler}
          disabled={currentPageIndex <= 0}
        >
          Previous Page
        </Button>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => nextPageHandler(pagesCount)}
          disabled={currentPageIndex >= pagesCount}
        >
          Next Page
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;

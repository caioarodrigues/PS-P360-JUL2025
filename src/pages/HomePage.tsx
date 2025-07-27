import { Box, Button, Text } from "@chakra-ui/react";
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
  const currentPageIndexToDisplay = currentPageIndex + 1;
  const currentPagesCountToDisplay = pagesCount + 1;

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
      <Box
        p="3"
        display="flex"
        alignItems="center"
        justifyContent="end"
        gap="1"
      >
        <Text>
          Page {currentPageIndexToDisplay} of {currentPagesCountToDisplay}
        </Text>
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

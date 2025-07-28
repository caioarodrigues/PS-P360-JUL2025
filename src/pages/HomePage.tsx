import { Box, Button, Text } from "@chakra-ui/react";
import UsersList from "../components/users-list";
import { useContext, useEffect } from "react";
import { PagesContext } from "@/context/PagesContext";
import { useNavigate } from "react-router-dom";
import { limitUsersProfilePerPage } from "@/constants";
import useUsersPagination from "@/hooks/users";
import { UsersContext } from "@/context/UsersContext";
import { usePageHandlers } from "@/handlers/usePageHandlers";
import LoadingUsersList from "@/components/loading-users-list";

function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PagesContext);
  const { users } = useContext(UsersContext);
  const { currentPageIndex, nextPage, previousPage } = useUsersPagination();
  const { nextPageHandler, previousPageHandler } = usePageHandlers({
    nextPage,
    previousPage,
    setCurrentPage,
    currentPageIndex,
  });
  const navigate = useNavigate();

  const mod = users.length % limitUsersProfilePerPage;
  const pagesCount =
    Math.floor(users.length / limitUsersProfilePerPage) + (mod > 0 ? 1 : 0) - 1;
  const currentPageIndexToDisplay = currentPageIndex + 1;
  const currentPagesCountToDisplay = pagesCount + 1;

  useEffect(() => {
    if (currentPage <= 0) navigate("/");
    else navigate(`/?page=${currentPage}`);
  }, [currentPage, navigate]);

  if (!users || users.length === 0) {
    return (
      <LoadingUsersList />
    );
  }

  return (
    <Box
      flexGrow={1}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={{ base: "100%", md: "80%" }}
      placeSelf="center"
    >
      <UsersList />
      <Box
        p="3"
        display="flex"
        alignItems="center"
        justifyContent="end"
        gap="1"
        width="100%"
      >
        <Text mx={1}>
          Page {currentPageIndexToDisplay} of {currentPagesCountToDisplay}
        </Text>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={previousPageHandler}
          disabled={currentPageIndex <= 0}
        >
          Previous
        </Button>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => nextPageHandler(pagesCount)}
          disabled={currentPageIndex >= pagesCount}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;

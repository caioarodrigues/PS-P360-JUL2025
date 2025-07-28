import { Box, Button, Text } from "@chakra-ui/react";
import UsersList from "../components/users-list";
import { useContext } from "react";
import { PagesContext } from "@/context/PagesContext";
import { limitUsersProfilePerPage } from "@/constants";
import useUsersPagination from "@/hooks/users";
import { UsersContext } from "@/context/UsersContext";
import { usePageHandlers } from "@/handlers/usePageHandlers";
import LoadingUsersList from "@/components/loading-users-list";

function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PagesContext);
  const { users } = useContext(UsersContext);
  const { nextPage, previousPage } = useUsersPagination();
  const { nextPageHandler, previousPageHandler } = usePageHandlers({
    nextPage,
    previousPage,
    setCurrentPage,
    currentPageIndex: currentPage,
  });

  const mod = users.length % limitUsersProfilePerPage;
  const pagesCount =
    Math.floor(users.length / limitUsersProfilePerPage) + (mod > 0 ? 1 : 0) - 1;
  const currentPageIndexToDisplay = currentPage + 1;
  const currentPagesCountToDisplay = pagesCount + 1;

  if (!users || users.length === 0) {
    return <LoadingUsersList />;
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
      <UsersList startIndex={currentPage} />
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
          disabled={currentPage <= 0}
        >
          Previous
        </Button>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => nextPageHandler(pagesCount)}
          disabled={currentPage >= pagesCount}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;

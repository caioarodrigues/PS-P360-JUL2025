/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, GridItem, Stack } from "@chakra-ui/react";
import UserCard from "@/components/user-card";
import { limitUsersProfilePerPage } from "@/constants";
import { useContext, useEffect } from "react";
import { UsersContext } from "@/context/UsersContext";
import useUsersPagination from "@/hooks/users";
import { PagesContext } from "@/context/PagesContext";

const UsersList = () => {
  const {
    currentPageIndex,
    currentListedUsers,
    nextPage,
    previousPage,
    updateCurrentListedUsers,
  } = useUsersPagination();
  const { users } = useContext(UsersContext);
  const { setCurrentPage } = useContext(PagesContext);

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
    const start = currentPageIndex * limitUsersProfilePerPage;
    const end = start + limitUsersProfilePerPage;
    updateCurrentListedUsers(users.slice(start, end));
  }, [currentPageIndex, users]);

  return (
    <Stack wrap="wrap">
      <Grid gap="3" templateColumns="repeat(12, 1fr)" p="3">
        {currentListedUsers.map(({ avatarLink, id, name }) => (
          <GridItem colSpan={{ md: 4, base: 6 }} key={id}>
            <UserCard name={name} avatarLink={avatarLink} id={id} />
          </GridItem>
        ))}
      </Grid>
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
    </Stack>
  );
};

export default UsersList;

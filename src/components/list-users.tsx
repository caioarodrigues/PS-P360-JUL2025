import { Box, Button, Grid, GridItem, Stack } from "@chakra-ui/react";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";
import UserCard from "@/components/user-card";
import { limitUsersProfilePerPage } from "@/constants";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "@/context/UsersContext";

interface UpdateCurrentPageOptions {
  action: "next" | "previous";
}

const ListUsers = () => {
  const usersContext = useContext(UsersContext);
  const { users } = usersContext;

  const mod = users.length % limitUsersProfilePerPage;
  const pagesNeeded =
    Math.floor(users.length / limitUsersProfilePerPage) + (mod > 0 ? 1 : 0);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentUsers, setCurrentUsers] = useState<ListUserDTO[]>([]);

  useEffect(() => {
    const start = currentPageIndex * limitUsersProfilePerPage;
    const end = start + limitUsersProfilePerPage;
    setCurrentUsers(users.slice(start, end));
  }, [currentPageIndex, users]);

  const updateCurrentPageIndex = ({ action }: UpdateCurrentPageOptions) => {
    setCurrentPageIndex((prev) => {
      if (action === "next" && prev < pagesNeeded - 1) {
        return prev + 1;
      }
      if (action === "previous" && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <Stack wrap="wrap">
      <Grid gap="3" templateColumns="repeat(12, 1fr)" p="3">
        {currentUsers.map(({ avatarLink, id, name }) => (
          <GridItem colSpan={{ md: 4, base: 6 }} key={id}>
            <UserCard name={name} avatarLink={avatarLink} id={id} />
          </GridItem>
        ))}
      </Grid>
      <Box p="3" display="flex" justifyContent="end" gap="1">
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => updateCurrentPageIndex({ action: "previous" })}
          disabled={currentPageIndex <= 0}
        >
          Previous Page
        </Button>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => updateCurrentPageIndex({ action: "next" })}
          disabled={currentPageIndex >= pagesNeeded - 1}
        >
          Next Page
        </Button>
      </Box>
    </Stack>
  );
};

export default ListUsers;

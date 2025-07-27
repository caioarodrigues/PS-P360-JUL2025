import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import UserCard from "@/components/user-card";
import { limitUsersProfilePerPage } from "@/constants";
import { useContext, useLayoutEffect, useState } from "react";
import { UsersContext } from "@/context/UsersContext";
import { PagesContext } from "@/context/PagesContext";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";

const UsersList = () => {
  const [currentListedUsers, updateCurrentListedUsers] = useState<
    ListUserDTO[]
  >([]);
  const { currentPage } = useContext(PagesContext);
  const { users } = useContext(UsersContext);

  useLayoutEffect(() => {
    const start = currentPage * limitUsersProfilePerPage;
    const end = start + limitUsersProfilePerPage;
    const paginatedUsers = users.slice(start, end);

    updateCurrentListedUsers(paginatedUsers);
  }, [currentPage, users]);

  return (
    <Stack wrap="wrap" p="3">
      <Text fontSize="2xl" fontWeight="bold" color="black">Listing all user profiles</Text>
      <Grid gap="3" templateColumns="repeat(12, 1fr)">
        {currentListedUsers.map(({ avatarLink, id, name }) => (
          <GridItem colSpan={{ md: 2, base: 6 }} key={id}>
            <UserCard name={name} avatarLink={avatarLink} id={id} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default UsersList;

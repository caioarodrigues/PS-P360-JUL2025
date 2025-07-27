import { Grid, GridItem, Stack } from "@chakra-ui/react";
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
    <Stack wrap="wrap">
      <Grid gap="3" templateColumns="repeat(12, 1fr)" p="3">
        {currentListedUsers.map(({ avatarLink, id, name }) => (
          <GridItem colSpan={{ md: 4, base: 6 }} key={id}>
            <UserCard name={name} avatarLink={avatarLink} id={id} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default UsersList;

import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import UserCard from "@/components/user-card";
import { limitUsersProfilePerPage } from "@/constants";
import { useContext, useLayoutEffect, useState } from "react";
import { UsersContext } from "@/context/UsersContext";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";

interface UsersListProps {
  startIndex: number;
}

const UsersList = ({ startIndex = 0 }: UsersListProps) => {
  const [currentListedUsers, updateCurrentListedUsers] = useState<
    ListUserDTO[]
  >([]);
  const { users } = useContext(UsersContext);

  useLayoutEffect(() => {
    const start = startIndex * limitUsersProfilePerPage;
    const end = start + limitUsersProfilePerPage;
    const paginatedUsers = users.slice(start, end);

    updateCurrentListedUsers(paginatedUsers);
  }, [users, startIndex]);

  return (
    <Stack wrap="wrap" p="3" width="100%">
      <Text fontSize="2xl" fontWeight="bold" color="black">
        Listing all user profiles
      </Text>
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

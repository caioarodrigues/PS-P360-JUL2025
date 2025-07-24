import { Box, Button, For, Grid, GridItem, Stack } from "@chakra-ui/react";
import { users } from "@/db";
import type { ListUserDTO } from "@/dtos/user/ListUserDTO";
import UserCard from "@/components/user-card";
import { limitUsersProfilePerPage } from "@/constants";
import { useState } from "react";

interface UpdateCurrentPageOptions {
  action: "next" | "previous";
}

const ListUsers = () => {
  const mod = users.length % limitUsersProfilePerPage;
  const pagesNeeded =
    (users.length - mod) / limitUsersProfilePerPage + (mod > 0 ? 1 : 0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(
    users.slice(currentPage, limitUsersProfilePerPage)
  )<ListUserDTO[]>;

  const updateCurrentPage = ({ action }: UpdateCurrentPageOptions) =>
    setCurrentPage((prev) => {
      return action === "next" ? prev + 1 : prev - 1;
    });

  const switchPage = () => {
    let nextPageIndex = currentPage;

    if (nextPageIndex >= pagesNeeded) {
      updateCurrentPage({ action: "previous" });
      return;
    }

    nextPageIndex += 1;

    const nextUsers = users.slice(
      nextPageIndex * limitUsersProfilePerPage,
      (nextPageIndex + 1) * limitUsersProfilePerPage
    );

    setCurrentPage(nextPageIndex);
    setCurrentUsers(nextUsers);
  };

  return (
    <Stack wrap="wrap">
      <Grid gap="3" templateColumns="repeat(12, 1fr)" p="3">
        <For each={currentUsers as ListUserDTO[]}>
          {({ avatarLink, id, name }) => (
            <GridItem colSpan={{ md: 4, base: 6 }} key={id}>
              <UserCard name={name} avatarLink={avatarLink} id={id} />
            </GridItem>
          )}
        </For>
      </Grid>
      <Box p="3" display="flex" justifyContent="end">
        <Button variant="solid" colorScheme="blue" onClick={switchPage}>
          {currentPage === pagesNeeded ? "Last Page" : "Next Page"}
        </Button>
      </Box>
    </Stack>
  );
};

export default ListUsers;

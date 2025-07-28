import { Link, useSearchParams } from "react-router-dom";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContext, useLayoutEffect } from "react";
import { UsersContext } from "@/context/UsersContext";
import UserDetailedCard from "@/components/user-detailed-card";

function AboutUserPage() {
  const [searchParams] = useSearchParams();
  const { users } = useContext(UsersContext);
  const userId = Number(searchParams.get("id"));
  const user = users.find(({ id }) => id === userId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!user) {
    return <Text fontWeight="bold">User not found</Text>;
  }

  const { avatarLink, email, id, lastName, name } = user;

  return (
    <Box p="3" bg="blue.100" height="100%" flexGrow={1}>
      <Grid templateColumns="repeat(12, 1fr)" gapY={3}>
        <GridItem colStart={{ base: 1, md: 4 }} colSpan={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
          <UserDetailedCard
            avatarLink={avatarLink}
            email={email}
            lastName={lastName}
            name={name}
            id={id}
          />
        </GridItem>
        <GridItem
          colSpan={12}
          justifySelf={{ base: "end", md: "start" }}
          order={{ base: 2, md: 1 }}
        >
          <Button variant="solid">
            <Link to="/">Back to Home</Link>
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default AboutUserPage;

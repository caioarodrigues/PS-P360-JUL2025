import { Link, useSearchParams } from "react-router-dom";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { UsersContext } from "@/context/UsersContext";
import UserDetailedCard from "@/components/user-detailed-card";

function AboutUserPage() {
  const [searchParams] = useSearchParams();
  const { users } = useContext(UsersContext);
  const userId = Number(searchParams.get("id"));
  const user = users.find(({ id }) => id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  const { avatarLink, email, id, lastName, name } = user;

  return (
    <Box p="3" bg="blue.100" minHeight="100vh">
      <Grid templateColumns="repeat(12, 1fr)" gapY={3}>
        <GridItem colSpan={12} justifySelf="end">
          <Button variant="solid">
            <Link to="/">Back to Home</Link>
          </Button>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6 }}>
          <UserDetailedCard
            avatarLink={avatarLink}
            email={email}
            lastName={lastName}
            name={name}
            id={id}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default AboutUserPage;

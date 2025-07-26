import { Box } from "@chakra-ui/react";
import UsersList from "../components/users-list";

function HomePage() {
  return (
    <Box minHeight="100vh" bg="blue.200">
      <UsersList />
    </Box>
  );
}

export default HomePage;

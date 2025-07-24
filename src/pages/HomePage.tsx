import { Box, Heading, Text } from "@chakra-ui/react";
import UsersList from "../components/users-list";

function HomePage() {
  return (
    <Box minHeight="100vh" bg="blue.200">
      <Heading>Home</Heading>
      <Text>Bem-vindo à página inicial!</Text>
    
      <UsersList />
    </Box>
  );
}

export default HomePage;
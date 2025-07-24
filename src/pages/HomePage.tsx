import { Box, Heading, Text } from "@chakra-ui/react";
import ListUsers from "../components/list-users";

function HomePage() {
  return (
    <Box minHeight="100vh" bg="blue.200">
      <Heading>Home</Heading>
      <Text>Bem-vindo à página inicial!</Text>
    
      <ListUsers />
    </Box>
  );
}

export default HomePage;
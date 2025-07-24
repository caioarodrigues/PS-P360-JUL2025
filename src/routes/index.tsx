import { Box, Heading, Text } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

function HomeRoute() {
  return (
    <Box p={4}>
      <Heading>Home</Heading>
      <Text>Bem-vindo à página inicial!</Text>
    </Box>
  );
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeRoute />} />
  </Routes>
);

export default AppRoutes;

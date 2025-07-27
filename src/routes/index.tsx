import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutUserPage from "@/pages/AboutUserPage";
import GlobalHeader from "@/components/global-header";
import { Box } from "@chakra-ui/react";

const AppRoutes = () => {
  return (
    <Box minHeight="100vh" bg="blue.200" display="flex" flexDirection="column">
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-user" element={<AboutUserPage />} />
      </Routes>
    </Box>
  );
};

export default AppRoutes;

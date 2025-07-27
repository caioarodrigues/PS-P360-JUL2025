import { Box } from "@chakra-ui/react";
import UsersList from "../components/users-list";
import { useContext, useEffect } from "react";
import { PagesContext } from "@/context/PagesContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { currentPage } = useContext(PagesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage <= 0) navigate("/");
    else navigate(`/?page=${currentPage}`);
  }, [currentPage, navigate]);

  return (
    <Box minHeight="100vh" bg="blue.200">
      <UsersList />
    </Box>
  );
}

export default HomePage;

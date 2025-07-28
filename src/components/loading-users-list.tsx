import { Box, Text } from "@chakra-ui/react";

const LoadingUsersList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box
        as="span"
        width="40px"
        height="40px"
        border="4px solid"
        borderColor="blue.600"
        borderTopColor="transparent"
        borderRadius="50%"
        animation="spin 1s linear infinite"
        my={4}
      />
      <Text color="blue.800" fontWeight="bold">
        Carregando usuários...
      </Text>
    </Box>
  );
};

export default LoadingUsersList;

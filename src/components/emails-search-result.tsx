import { Text } from "@chakra-ui/react";

interface EmailSearchResultProps {
  email: string;
}

const EmailSearchResult = ({ email }: EmailSearchResultProps) => {
  return <Text key={email}>{email}</Text>;
};

export default EmailSearchResult;

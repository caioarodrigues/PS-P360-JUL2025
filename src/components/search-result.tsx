import { Stack, Text, Highlight } from "@chakra-ui/react";
import UserSearchResult from "./user-search-result";
import EmailSearchResult from "./emails-search-result";
import type { IUser } from "@/domain/entities/IUser";

interface SearchResultProps {
  searchQuery: string;
  usersResult: IUser[] | null;
  emailsResult: string[] | null;
  clearSearchHandler: () => void;
}

const SearchResult = ({
  clearSearchHandler,
  emailsResult,
  searchQuery,
  usersResult,
}: SearchResultProps) => {
  if (!searchQuery) return;

  if (searchQuery.length > 0 && usersResult && usersResult.length === 0)
    return <Text>No users found for "{searchQuery}"</Text>;

  return (
    <Stack maxHeight="50vh" overflowY="auto">
      {usersResult && usersResult.length > 0 && (
        <Stack>
          <Highlight
            query={["Users"]}
            styles={{
              fontWeight: "semibold",
              py: 2,
              px: 0.5,
              bg: "blue.200",
            }}
          >
            Users
          </Highlight>
          {usersResult.map(({ avatarLink, id, name, lastName }) => (
            <UserSearchResult
              avatarLink={avatarLink}
              clearSearchHandler={clearSearchHandler}
              id={id}
              name={name}
              lastName={lastName}
              key={id}
            />
          ))}
        </Stack>
      )}
      {emailsResult && (
        <Stack>
          <Highlight
            query={["Emails"]}
            styles={{
              fontWeight: "semibold",
              py: 2,
              px: 0.5,
              bg: "blue.200",
            }}
          >
            Emails
          </Highlight>
          {emailsResult.map((email) => (
            <EmailSearchResult key={email} email={email} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default SearchResult;

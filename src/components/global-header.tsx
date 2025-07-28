import { Input, InputGroup, Stack, Highlight, Text } from "@chakra-ui/react";
import { LuSearch, LuX } from "react-icons/lu";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { UsersContext } from "@/context/UsersContext";
import { SearchUserUseCase } from "@/useCases/SearchUserUseCase";
import { SearchEmailUseCase } from "@/useCases/SearchEmailUseCase";
import UserSearchResult from "./user-search-result";
import EmailSearchResult from "./emails-search-result";
import { useSearchHandlers } from "@/handlers/useSearchHandlers";

const GlobalHeader = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { users } = useContext(UsersContext);
  const { handleSearch, clearSearchHandler } = useSearchHandlers({ setSearchQuery });

  const usersResult = SearchUserUseCase.execute(searchQuery, users);
  const emailsResult = SearchEmailUseCase.execute(searchQuery, users);

  return (
    <Stack p={3} position="sticky" top={0} zIndex={10} bg="white">
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<LuX onClick={clearSearchHandler} />}
      >
        <Input
          placeholder="Search users"
          variant="subtle"
          onChange={handleSearch}
          value={searchQuery}
        />
      </InputGroup>
      {searchQuery !== "" && (
        <Stack maxHeight="50vh" overflowY="auto">
          {searchQuery.length > 0 && usersResult && usersResult.length === 0 && (
            <Text>No users found for "{searchQuery}"</Text>
          )}
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
      )}
    </Stack>
  );
};

export default GlobalHeader;

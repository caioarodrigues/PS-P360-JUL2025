import { Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { UsersContext } from "@/context/UsersContext";
import { SearchUserUseCase } from "@/useCases/SearchUserUseCase";
import { SearchEmailUseCase } from "@/useCases/SearchEmailUseCase";
import { useSearchHandlers } from "@/handlers/useSearchHandlers";
import SearchInput from "./search-input";
import SearchResult from "./search-result";

const GlobalHeader = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { users } = useContext(UsersContext);
  const { handleSearch, clearSearchHandler } = useSearchHandlers({
    setSearchQuery,
  });

  const usersResult = SearchUserUseCase.execute(searchQuery, users);
  const emailsResult = SearchEmailUseCase.execute(searchQuery, users);

  return (
    <Stack p={3} position="sticky" top={0} zIndex={10} bg="white">
      <SearchInput
        handleSearch={handleSearch}
        clearSearchHandler={clearSearchHandler}
        searchQuery={searchQuery}
      />
      <SearchResult
        searchQuery={searchQuery}
        usersResult={usersResult}
        emailsResult={emailsResult}
        clearSearchHandler={clearSearchHandler}
      />
    </Stack>
  );
};

export default GlobalHeader;

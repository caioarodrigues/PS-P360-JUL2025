import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch, LuX } from "react-icons/lu";

interface SearchInputProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  clearSearchHandler: () => void;
}

const SearchInput = ({
  handleSearch,
  clearSearchHandler,
  searchQuery,
}: SearchInputProps) => {
  return (
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
  );
};

export default SearchInput;

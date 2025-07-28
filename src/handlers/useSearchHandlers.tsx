interface SearchHandlersProps {
  setSearchQuery: (query: string) => void;
}

export const useSearchHandlers = ({ setSearchQuery }: SearchHandlersProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchQuery(value);
  };

  const clearSearchHandler = () => {
    return setSearchQuery("");
  };

  return {
    handleSearch,
    clearSearchHandler,
  };
};

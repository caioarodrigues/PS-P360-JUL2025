interface PageHandlersProps {
  currentPageIndex: number;
  setCurrentPage: (page: number) => void;
  nextPage: (pagesCount: number) => void;
  previousPage: () => void;
}

export const usePageHandlers = ({
  currentPageIndex,
  nextPage,
  previousPage,
  setCurrentPage,
}: PageHandlersProps) => {
  const nextPageHandler = (pagesCount: number) => {
    if (currentPageIndex >= pagesCount) return;

    nextPage(pagesCount);
    setCurrentPage(currentPageIndex + 1);
  };

  const previousPageHandler = () => {
    if (currentPageIndex <= 0) return;

    previousPage();
    setCurrentPage(currentPageIndex - 1);
  };

  return {
    nextPageHandler,
    previousPageHandler,
  };
};

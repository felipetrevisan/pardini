import { useState } from "react";

export const usePagination = <T>(items: T[], page = 1, perPage = 10) => {
  const [activePage, setActivePage] = useState(page);
  const totalPages = Math.ceil(items.length / perPage);
  const offset = perPage * (activePage - 1);
  const paginatedItems = items.slice(offset, perPage * activePage);

  return {
    activePage,
    nextPage: () =>
      setActivePage((page) => (page < totalPages ? page + 1 : page)),
    previousPage: () => setActivePage((page) => (page > 1 ? page - 1 : page)),
    totalPages,
    totalItems: items.length,
    items: paginatedItems,
  };
};

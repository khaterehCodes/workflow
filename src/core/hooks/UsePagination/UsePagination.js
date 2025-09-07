import { useState, useMemo } from "react";

export function usePagination({ totalUsers, usersPerPage = 5, fixedPages = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = fixedPages;

  const pages = useMemo(() => {
    const result = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || i > totalPages - 3 || i === currentPage) {
        if (i === 4 && currentPage < 4) {
          result.push("...");
        }
        result.push(i);
      } else if (i === totalPages - 3 && currentPage < totalPages - 3) {
        result.push("...");
      }
    }

    return result;
  }, [currentPage, totalPages]);

  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const getVisibleUsers = (users) => {
    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;
    return users.slice(start, end);
  };

  return { currentPage, setCurrentPage, totalPages, pages, prevPage, nextPage, getVisibleUsers };
}

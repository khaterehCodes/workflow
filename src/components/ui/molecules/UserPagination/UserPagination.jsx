import P from "../../atoms/customP/P";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

function UserPagination() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || i >= 8 || i === currentPage) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const pages = renderPages();

  return (
    <div className="mt-[280px] h-[61px] border-t flex items-center justify-between px-6">
      <P className="text-[#A1A1AA] text-[16px]">100 utilisateurs</P>
      <div className="flex">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-200"
        >
          <FiChevronLeft />
        </button>

        {pages.map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className="w-8 h-8 flex items-center justify-center border-t border-b border-l border-gray-300 text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center border-t border-b border-l border-gray-300 ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-white text-gray-700"
              } hover:bg-gray-200`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-200"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default UserPagination;

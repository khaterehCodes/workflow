import P from "../../atoms/customP/P";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../atoms/customButton/Button";

function UserPagination({ totalUsers, usersPerPage, currentPage, setCurrentPage, totalPages, pages, prevPage, nextPage }) {
  return (
    <div className="h-[61px] border-t flex items-center justify-between px-6">
      <P className="text-[#A1A1AA] text-[16px]">{totalUsers} utilisateurs</P>
      <div className="flex">
        <Button onClick={prevPage} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-200">
          <FiChevronLeft />
        </Button>
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="w-8 h-8 flex items-center justify-center border-t border-b border-l border-gray-300 text-gray-400" >
              ...
            </span>
          ) : (
            <Button key={index} onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center border-t border-b border-l border-gray-300 ${page === currentPage ? "bg-blue-500 text-white" : "bg-white text-gray-700"} hover:bg-blue-200`}>
              {page}
            </Button>
          )
        )}
        <Button onClick={nextPage} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-200">
          <FiChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default UserPagination;

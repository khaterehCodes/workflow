import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../../core/redux/feature/UserSlice";
import { statusStyles } from "../../../../core/array/Array";
import { useNavigate } from "react-router-dom";
import UserPagination from "../UserPagination/UserPagination";
import H2 from "../../atoms/customH2/H2";
import Span from "../../atoms/customSpan/Span";
import Button from "../../atoms/customButton/Button";
import { usePagination } from "../../../../core/hooks/usePagination";
function UserTable() {
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentPage, setCurrentPage, totalPages, pages, prevPage, nextPage, getVisibleUsers } = usePagination({ totalUsers: users.length, usersPerPage: 5, fixedPages: 10 });
  const visibleUsers = getVisibleUsers(users);
  
  const handleDelete = (index) => dispatch(deleteUser(index));
  const handleEdit = (user) => navigate("/edituser", { state: { user } });

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-[1104px] mb-4 flex justify-between items-center">
        <H2 className="text-3xl font-semibold">Liste des utilisateurs</H2>
      </div>
      <div className="min-w-[1104px] h-[700px] bg-white rounded-[12px] shadow pt-5 px-2 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {visibleUsers.length > 0 ? (
            <table className="w-full">
              <thead className="text-[#A1A1AA] text-[16px]">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Noms</th>
                  <th className="px-6 py-3 text-left font-medium">Prénoms</th>
                  <th className="px-6 py-3 text-left font-medium">E-mails</th>
                  <th className="px-6 py-3 text-left font-medium">Téléphone</th>
                  <th className="px-6 py-3 text-left font-medium">Statut</th>
                  <th className="px-6 py-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleUsers.map((user, index) => (
                  <tr key={user.email} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-6">{user.noms}</td>
                    <td className="px-6 py-6">{user.prenoms}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.telephone}</td>
                    <td className="px-6 py-4">
                      <Span className={`font-medium px-3 py-1 rounded-full text-sm inline-block ${statusStyles[user.statut] || "text-gray-500 bg-gray-100"}`}>
                        {user.statut}
                      </Span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <Button onClick={() => handleEdit(user)} className="w-[81px] text-[12px] font-medium border rounded-[10px] border-[#5C73DB] text-[#5C73DB] h-[31px]">
                        Modifier
                      </Button>
                      <Button onClick={() => handleDelete(index)} className="bg-[#DC2626] font-medium text-[12px] w-[81px] rounded-[10px] h-[31px] text-white">
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-500 mt-10">Aucun utilisateur à afficher.</div>
          )}
        </div>
        <div className="mt-auto">
          <UserPagination
            totalUsers={users.length}
            usersPerPage={5}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            pages={pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default UserTable;

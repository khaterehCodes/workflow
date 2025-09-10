import { useDispatch } from "react-redux";
import { statusStyles } from "../../../../core/array/Array";
import { useNavigate } from "react-router-dom";
import UserPagination from "../UserPagination/UserPagination";
import Span from "../../atoms/customSpan/Span";
import ActionButtons from "../../molecules/ActionButtons/ActionButtons";
import { usePagination } from "../../../../core/hooks/UsePagination/UsePagination";
import { deleteItem } from "../../../../core/redux/feature/UserSlice";

function UserTable({ users }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    pages,
    prevPage,
    nextPage,
    getVisibleUsers,
  } = usePagination({ totalUsers: users.length, usersPerPage: 5, fixedPages: 10 });

  const visibleUsers = getVisibleUsers(users);

  const handleDelete = (id) => dispatch(deleteItem({ key: "users", id }));
  const handleEdit = (user) => navigate("/edituser", { state: { user } });
  const handleAdd = () => navigate("/edituser");

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-[1190px] mb-4 flex justify-start items-center">
        <ActionButtons
          onAdd={handleAdd}
          addLabel="Ajouter un utilisateur"
          size="lg"
          showEdit={false}
          showDelete={false}
          showAdd={true}
        />
      </div>
      <div className="w-[1190px] h-[700px] bg-white rounded-[12px] shadow pt-5 px-2 flex flex-col">
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
                {visibleUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-6">{user.noms}</td>
                    <td className="px-6 py-6">{user.prenoms}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.telephone}</td>
                    <td className="px-6 py-4">
                      <Span
                        className={`font-medium px-3 py-1 rounded-full text-sm inline-block ${statusStyles[user.statut] || "text-gray-500 bg-gray-100"}`}>
                        {user.statut}
                      </Span>
                    </td>
                    <td className="px-6 py-4">
                      <ActionButtons
                        onEdit={() => handleEdit(user)}
                        onDelete={() => handleDelete(user.id)}
                        size="md"
                        showAdd={false}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-500 mt-10">
              Aucun utilisateur à afficher.
            </div>
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

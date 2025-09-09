import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../../core/redux/feature/UserSlice";
import { useNavigate } from "react-router-dom";
import ActionButtons from "../../molecules/ActionButtons/ActionButtons";
import UserPagination from "../UserPagination/UserPagination";
import { usePagination } from "../../../../core/hooks/UsePagination/UsePagination";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import { useState } from "react";

function CountryList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.data?.countries || []);
  const [query, setQuery] = useState("");

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    pages,
    prevPage,
    nextPage,
    getVisibleUsers,
  } = usePagination({ totalUsers: countries.length, usersPerPage: 5, fixedPages: 10 });

  const filteredCountries = countries.filter((c) =>
    c.libelle.toLowerCase().includes(query.toLowerCase()) ||
    c.codeISO.toLowerCase().includes(query.toLowerCase()) ||
    (c.description || "").toLowerCase().includes(query.toLowerCase())
  );

  const visibleCountries = getVisibleUsers(filteredCountries);

  const handleAdd = () => navigate("/editcountry");
  const handleEdit = (country) => navigate("/editcountry", { state: { country } });
  const handleDelete = (id) => dispatch(deleteItem({ key: "countries", id }));

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1190px] bg-white rounded-[12px] shadow pt-5 px-2 flex flex-col">
        <div className="w-full mb-4 flex justify-between items-center px-4">
          <h1 className="text-lg font-semibold">Liste des pays</h1>
          <ActionButtons
            onAdd={handleAdd}
            addLabel="Ajouter"
            size="md"
            showEdit={false}
            showDelete={false}
            showAdd={true}          />
        </div>
        
        <UserSearchBar query={query} setQuery={setQuery} />
        <div>
          <div className="flex-1 overflow-y-auto">
            {visibleCountries.length > 0 ? (
              <table className="w-full">
                <thead className="text-[#A1A1AA] text-[16px]">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium">Libellé</th>
                    <th className="px-6 py-3 text-left font-medium">Code ISO</th>
                    <th className="px-6 py-3 text-left font-medium">Description</th>
                    <th className="px-6 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleCountries.map((country) => (
                    <tr key={country.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-6">{country.libelle}</td>
                      <td className="px-6 py-6">{country.codeISO}</td>
                      <td className="px-6 py-4">{country.description}</td>
                      <td className="px-6 py-4">
                        <ActionButtons
                          onEdit={() => handleEdit(country)}
                          onDelete={() => handleDelete(country.id)}
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
                Aucun pays à afficher.
              </div>
            )}
          </div>

          <div className="mt-auto">
            <UserPagination
              totalUsers={filteredCountries.length}
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
    </div>
  );
}

export default CountryList;

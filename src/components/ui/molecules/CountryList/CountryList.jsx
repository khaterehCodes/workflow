import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../../core/redux/feature/UserSlice";
import ActionButtons from "../../molecules/ActionButtons/ActionButtons";
import UserPagination from "../UserPagination/UserPagination";
import { usePagination } from "../../../../core/hooks/UsePagination/UsePagination";
import UserSearchBar from "../UserSearchBar/UserSearchBar";
import { useState } from "react";
import CountryModal from "../CountryModal/CountryModal";
import H1 from "../../atoms/customH1/H1";

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.data?.countries || []);
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingCountry, setEditingCountry] = useState(null);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    pages,
    prevPage,
    nextPage,
    getVisibleUsers,
  } = usePagination({ totalUsers: countries.length, usersPerPage: 2, fixedPages: 10 });

  const filteredCountries = countries.filter((c) =>
    c.libelle.toLowerCase().includes(query.toLowerCase())
  );

  const visibleCountries = getVisibleUsers(filteredCountries);

  const handleEdit = (country) => {
    setEditingCountry(country);
    setOpenModal(true);
  };

  const handleDelete = (id) => dispatch(deleteItem({ key: "countries", id }));

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1190px] h-[389px] bg-white rounded-[12px] shadow pt-5 px-2 flex flex-col">
        <div className="w-full mb-4 flex justify-between items-center px-4">
          <H1 className="text-[18px] text-[#27272A] font-normal">Liste des pays</H1>
          <ActionButtons
            onAdd={() => {
              setEditingCountry(null);
              setOpenModal(true);
            }}
            addLabel="Ajouter"
            size="md"
            showEdit={false}
            showDelete={false}
            showAdd={true}
          />
        </div>

        <UserSearchBar
          placeholder="Vous cherchez un pays ..."
          query={query}
          setQuery={setQuery}
          width="1140px"
        />

        <div className="flex-1 flex flex-col justify-between">
          {visibleCountries.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <table className="w-full table-auto">
                <thead className="text-[#A1A1AA] text-[16px]">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium w-[300px]">Libellé</th>
                    <th className="px-6 py-3 text-left font-medium w-[200px]">Code ISO</th>
                    <th className="px-6 py-3 text-left font-medium w-[400px]">Description</th>
                    <th className="px-6 py-3 text-left font-medium w-[180px]">Actions</th>
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
                          size="base"
                          showAdd={false}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center text-gray-500">
              Aucun pays à afficher.
            </div>
          )}

          <div className="mt-2">
            <UserPagination
              totalUsers={filteredCountries.length}
              usersPerPage={2}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              pages={pages}
              prevPage={prevPage}
              nextPage={nextPage}
              containerClass="-mt-14"
            />
          </div>
        </div>
      </div>

      {openModal && (
        <CountryModal
          setOpenModal={setOpenModal}
          initialValues={editingCountry}
        />
      )}
    </div>
  );
}

export default CountryList;

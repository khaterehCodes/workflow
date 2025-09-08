import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../../core/redux/feature/UserSlice";
import ActionButtons from "../../molecules/ActionButtons/ActionButtons";
import UserPagination from "../UserPagination/UserPagination";
import { usePagination } from "../../../../core/hooks/UsePagination/UsePagination";

function CountryList() {
    const countries = useSelector((state) => state.users.list);
    const dispatch = useDispatch();

    const { currentPage, setCurrentPage, totalPages, pages, prevPage, nextPage, getVisibleUsers } =
        usePagination({ totalUsers: countries.length, usersPerPage: 5, fixedPages: 10 });

    const visibleCountries = getVisibleUsers(countries);

    const handleAdd = () => { };
    const handleEdit = (country) => { };
    const handleDelete = (index) => dispatch(deleteUser(index));

    return (
        <div className="flex flex-col items-center mt-6">
            <div className="w-[1104px] mb-4 flex justify-start items-center">
                <ActionButtons
                    onAdd={handleAdd}
                    addLabel="Ajouter un pays"
                    size="lg"
                    showEdit={false}
                    showDelete={false}
                    showAdd={true}
                />
            </div>

            <div className="min-w-[1104px] bg-white rounded-[12px] shadow pt-5 px-2 flex flex-col">
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
                                {visibleCountries.map((country, idx) => {
                                    const index = (currentPage - 1) * 5 + idx;
                                    return (
                                        <tr key={country.codeISO || country.email} className="border-b hover:bg-gray-50">
                                            <td className="px-6 py-6">{country.libelle || country.noms}</td>
                                            <td className="px-6 py-6">{country.codeISO || country.prenoms}</td>
                                            <td className="px-6 py-4">{country.description || country.email}</td>
                                            <td className="px-6 py-4">
                                                <ActionButtons
                                                    onEdit={() => handleEdit(country)}
                                                    onDelete={() => handleDelete(index)}
                                                    size="md"
                                                    showAdd={false}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center text-gray-500 mt-10">Aucun pays à afficher.</div>
                    )}
                </div>

                <div className="mt-auto">
                    <UserPagination
                        totalUsers={countries.length}
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

export default CountryList;

import Button from "../../atoms/customButton/Button";
import P from "../../atoms/customP/P";
import { users } from "../../../../core/array/Array";
import { statusStyles } from "../../../../core/array/Array";
import UserPagination from "../UserPagination/UserPagination";
function UsersTable() {
    return (
        <div className="flex justify-center mt-6">
            <div className="min-w-[1104px] h-[700px] bg-white rounded-[12px] shadow pt-5 px-2">
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
                        {users.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-6"><P className="text-gray-800">{user.noms}</P></td>
                                <td className="px-6 py-6"><P className="text-gray-800">{user.prenoms}</P></td>
                                <td className="px-6 py-4"><P className="text-gray-800">{user.email}</P></td>
                                <td className="px-6 py-4"><P className="text-gray-800">{user.telephone}</P></td>
                                <td className="px-6 py-4">
                                    <P
                                        className={`font-medium px-3 py-1 rounded-full text-sm inline-block ${statusStyles[user.statut] || "text-gray-500 bg-gray-100"}`}>
                                        {user.statut}
                                    </P>
                                </td>
                                <td className="px-6 py-4">
                                    <Button className="w-[81px] text-[12px] font-medium mr-1 h-[31px] border rounded-[10px] border-[#5C73DB] text-[#5C73DB]">
                                        Suspendre
                                    </Button>
                                    <Button className="bg-[#DC2626] font-medium text-[12px] w-[81px] rounded-[10px] h-[31px] text-white">
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <UserPagination />
            </div>
        </div>
    );
}

export default UsersTable;
